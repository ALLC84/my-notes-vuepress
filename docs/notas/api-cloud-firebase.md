---
lang: es
title: Api - Cloud Functions
description: Api rest en cloud functions firebase + firestore
sidebar: auto
meta:
   - name: description
     content: Ape rest firebase cloud functions
   - name: keywords
     content: JavaScript, Firebase, Base de datos, Cloud Functions.
---

# Api - Cloud Functions

## Requerimientos

Crearemos una API en cloud functions con node y express.
::: warning NOTA
Para empezar debes tener una cuanta en google y crear un proyecto en firebase console.

-  Inicia una base de datos firestore en modo prueba para permitir permisos de lectura y escritura sin necesidad de estar autenticado.
-  En configuraciones del proyecto `settings`en la pestaña `Cuentas de servicio` genera una clave privada. Esto descargara una archivo .json que utilizaremos mas adelante. \
   Copia el fragmento de codigo que encontrarás.

```js
var admin = require('firebase-admin')
var serviceAccount = require('path/jsoDescargado.json')
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://<tus-datos>.firebaseio.com',
})
```

:::

## Iicio del proyecto

###  Inatalacion CLI

```sh
npm install -g firebase-tools
```

### Proyecto de npm

```sh
npm init --y
```

### Login firebase

```sh
firebase login
```

### Proyecto firebase

```sh
firebase init
```

En el menu mostrado, seleccionamos cloud functions con la tecla espaciadora de nuestro teclado y luego al Enter.

Selecciona `JavaScript` como lenguaje.

### Estructura del proyecto

```sh
.
├── functions
│   ├── node_modules
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── permissions.json # Archivo .json descargado de firebase
│
├── node_modules
├── .firebaserc
├── .gitignore
└── package.json

```

## Instalaciones necesarias

Instalaremos las dependencias que utilizaremos en este proyecto.

### Express
Para crear nuestro servidor en node.

```sh
npm i express
```

### Cors
Para permitir el envio de datos entre servidores.

```sh
npm i cors
```

## Ejecución
Ejecutamos el proyecto en nuestro entorno local

```sh
cd functions

npm run serve
```

::: warning NOTA
Veremos en consola la url donde podremos hacer las pruebas desde postman
:::

## Estructura del Post

Estructura de los post en nuestra base de datos firestore

```json
{
	"title": "String",
	"subtitle": "String",
	"body": "String[]"
}
```

## Crear la Api

Crearemos la api en el archivo `index.js`

```js
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

// INICIAMOS FIREBASE
const serviceAccount = require('./permissions.json')
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://fir-cloud-restapi.firebaseio.com',
})

// Instanciamos la base de datos.
const db = admin.firestore()

// INSTANCIAMOS LO QUE SERA NUESTRO SERVIDOR
const app = express()

// Usamos Cors
app.use(cors({ origin: true }))

/*
|-----------------------------------------------
| RUTA - CREAR POSTS
|-----------------------------------------------
*/
app.post('/api/posts', (req, res) => {
	;(async () => {
		try {
			let newPost = {
				title: req.body.title,
				subtitle: req.body.subtitle,
				body: req.body.body,
			}
			let citiesRef = await db.collection('posts')
			await citiesRef.add(newPost)

			res.status(200).json(newPost)
		} catch (error) {
			console.log(': --------------------------------')
			console.log(': Create Post --> error: ', error)
			console.log(': --------------------------------')

			res.status(500).send(error)
		}
	})()
})

/*
|-----------------------------------------------
| RUTA - LEER POSTS
|-----------------------------------------------
*/
app.get('/api/posts', (req, res) => {
	;(async () => {
		try {
			let citiesRef = await db.collection('posts')
			let snapshot = await citiesRef.get()

			if (snapshot.empty) {
				console.log('No matching documents.')
				return
			}

			let data = []
			await snapshot.forEach((doc) => {
				let dataLoop = {
					id: doc.id,
					body: doc.data(),
				}
				data.push(dataLoop)
			})

			res.status(200).send(data)
		} catch (error) {
			console.log(': --------------------------------')
			console.log(': Get Posts --> error: ', error)
			console.log(': --------------------------------')

			res.status(500).send(error)
		}
	})()
})

/*
|-----------------------------------------------
| RUTA - LEER UN POST POR SU ID
|-----------------------------------------------
*/
app.get('/api/posts/:id', (req, res) => {
	;(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id)
			let snapshot = await citiesRef.get()

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento')
			}

			let response = await snapshot.data()
			res.status(200).send(response)
		} catch (error) {
			console.log(': -----------------------------------')
			console.log(': Get One Posts --> error: ', error)
			console.log(': -----------------------------------')

			res.status(500).send(error)
		}
	})()
})

/*
|-----------------------------------------------
| RUTA - ACTUALIZAR POST POR SU ID
|-----------------------------------------------
*/
app.put('/api/posts/:id', (req, res) => {
	;(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id)
			let snapshot = await citiesRef.get()

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento')
			}

			let updatedPost = {
				title: req.body.title,
				subtitle: req.body.subtitle,
				body: req.body.body,
			}
			await citiesRef.update(updatedPost)

			res.status(200).json(updatedPost)
		} catch (error) {
			console.log(': ----------------------------------')
			console.log(': Update Posts --> error: ', error)
			console.log(': ----------------------------------')

			res.status(500).send(error)
		}
	})()
})

/*
|-----------------------------------------------
| RUTA - ELIMINAR 
|-----------------------------------------------
*/
app.delete('/api/posts/:id', (req, res) => {
	;(async () => {
		try {
			let citiesRef = await db.collection('posts').doc(req.params.id)
			let snapshot = await citiesRef.get()

			if (!snapshot.exists) {
				res.status(404).send('No existe el documento')
			}

			let deletedPost = await snapshot.data()
			await citiesRef.delete()

			res.status(200).json({
				deletedPost,
				message: `El documento con id: ${req.params.id} ha sido eliminado!`,
			})
		} catch (error) {
			console.log(': ----------------------------------')
			console.log(': Delete Posts --> error: ', error)
			console.log(': ----------------------------------')

			res.status(500).send(error)
		}
	})()
})

/*
|-----------------------------------------------
| EJECUTA NUESTRA API
|-----------------------------------------------
*/
exports.app = functions.https.onRequest(app)
```

## Deploy

El deploy de nuestra API no puede ser mas simple!

```sh
firebase deploy
```

::: warning NOTA
En el apartado Functions de firebase console, encontraremos la nueva url a utilizar para las peticiones a la API
:::
