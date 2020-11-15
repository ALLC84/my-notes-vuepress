---
lang: es
title: Crear la Api
description: Api rest en cloud functions firebase + firestore
# sidebar: auto
meta:
    - name: description
      content: Ape rest firebase cloud functions
    - name: keywords
      content: JavaScript, Firebase, Base de datos, Cloud Functions.
---

# Crear la Api

Crearemos la api en el archivo `index.js`

## Configuración y requerimientos

```js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

// INICIAMOS FIREBASE
const serviceAccount = require('./permissions.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://fir-cloud-restapi.firebaseio.com',
});

// Instanciamos la base de datos.
const db = admin.firestore();

// INSTANCIAMOS LO QUE SERA NUESTRO SERVIDOR
const app = express();

// Usamos Cors
app.use(cors({ origin: true }));
```

## Crear post

```js
/*
|-----------------------------------------------
| RUTA - CREAR POSTS
|-----------------------------------------------
*/
app.post('/api/posts', (req, res) => {
	(async () => {
		try {
			let newPost = {
				title: req.body.title,
				subtitle: req.body.subtitle,
				body: req.body.body,
			};
			let citiesRef = await db.collection('posts');
			await citiesRef.add(newPost);

			res.status(200).json(newPost);
		} catch (error) {
			console.log(': --------------------------------');
			console.log(': Create Post --> error: ', error);
			console.log(': --------------------------------');

			res.status(500).send(error);
		}
	})();
});
```

## Obtener todos los posts

```js
/*
|-----------------------------------------------
| RUTA - LEER POSTS
|-----------------------------------------------
*/
app.get('/api/posts', (req, res) => {
	(async () => {
		try {
			let citiesRef = await db.collection('posts');
			let snapshot = await citiesRef.get();

			if (snapshot.empty) {
				console.log('No matching documents.');
				return;
			}

			let data = [];
			await snapshot.forEach((doc) => {
				let dataLoop = {
					id: doc.id,
					body: doc.data(),
				};
				data.push(dataLoop);
			});

			res.status(200).send(data);
		} catch (error) {
			console.log(': --------------------------------');
			console.log(': Get Posts --> error: ', error);
			console.log(': --------------------------------');

			res.status(500).send(error);
		}
	})();
});
```

## Obtener un post

```js
/*
|-----------------------------------------------
| RUTA - LEER UN POST POR SU ID
|-----------------------------------------------
*/
app.get('/api/posts/:id', (req, res) => {
	(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id);
			let snapshot = await citiesRef.get();

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento');
			}

			let response = await snapshot.data();
			res.status(200).send(response);
		} catch (error) {
			console.log(': -----------------------------------');
			console.log(': Get One Posts --> error: ', error);
			console.log(': -----------------------------------');

			res.status(500).send(error);
		}
	})();
});
```

## Actualizar post

```js
/*
|-----------------------------------------------
| RUTA - ACTUALIZAR POST POR SU ID
|-----------------------------------------------
*/
app.put('/api/posts/:id', (req, res) => {
	(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id);
			let snapshot = await citiesRef.get();

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento');
			}

			let updatedPost = {
				title: req.body.title,
				subtitle: req.body.subtitle,
				body: req.body.body,
			};
			await citiesRef.update(updatedPost);

			res.status(200).json(updatedPost);
		} catch (error) {
			console.log(': ----------------------------------');
			console.log(': Update Posts --> error: ', error);
			console.log(': ----------------------------------');

			res.status(500).send(error);
		}
	})();
});
```

## Eliminar post

```js
/*
|-----------------------------------------------
| RUTA - ELIMINAR 
|-----------------------------------------------
*/
app.delete('/api/posts/:id', (req, res) => {
	(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id);
			let snapshot = await citiesRef.get();

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento');
			}

			let deletedPost = await snapshot.data();
			await citiesRef.delete();

			res.status(200).json({
				deletedPost,
				message: `El documento con id: ${req.params.id} ha sido eliminado!`,
			});
		} catch (error) {
			console.log(': ----------------------------------');
			console.log(': Delete Posts --> error: ', error);
			console.log(': ----------------------------------');

			res.status(500).send(error);
		}
	})();
});
```

## Exports App

```js
/*
|-----------------------------------------------
| EJECUTA NUESTRA API
|-----------------------------------------------
*/
exports.app = functions.https.onRequest(app);
```
