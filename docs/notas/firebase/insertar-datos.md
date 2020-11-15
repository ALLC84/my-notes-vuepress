---
lang: es
title: Insertar datos
description: Insertar datos en Firebase.
# sidebar: auto
meta:
    - name: description
      content: Insertar datos en Firebase.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Insertar datos
---

# Insertar datos

```js
set()-- >
	'No crea un id, con lo cual el dato esta directamente, si hay datos en la referencia a guardar, los sobre escribe';
push()-- >
	`Genera un id unico al subir los datos a la DB --> agrega datos sin borrar los ya existentes`;
```

```js
//Ejemplo: 1
db.ref()
	.child('data')
	.push({
		mensaje: 'hola - push',
	});

//Ejemplo: 2
db.ref()
	.child('data')
	.set({
		mensaje: 'hola - set',
	});
```
