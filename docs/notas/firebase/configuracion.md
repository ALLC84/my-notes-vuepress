---
lang: es
title: Configuración
description: Configuración inicial firebase
# sidebar: auto
meta:
    - name: description
      content: Configuración inicial firebase
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Configuración.
---

# Configuración inicial

Todos los servicios de firebase tienen una inicializacion

Para acceder a los cervicios pripero debemos traer la configuracion de la DB, inicializarla y luego acceder a ella.

## Config

```js
/* 
|-----------------------------------------------
|  FIREBASE
|-----------------------------------------------
| Configuracion de FireBase para conectarnos 
| a los diferentes servicios.
|
*/
const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
};

export default config;
```

## Inicializa DB

```js
firebase.initializeApp(config);
```

## Acceder a la DB

```js
db = firebase.dataBase();
```
