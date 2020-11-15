---
lang: es
title: Requerimientos
description: Requerimientos Api rest en cloud functions firebase + firestore
# sidebar: auto
meta:
    - name: description
      content: Requerimientos Api rest en cloud functions firebase + firestore
    - name: keywords
      content: JavaScript, Firebase, Base de datos, Cloud Functions, Requerimientos
---

# Requerimientos

::: warning NOTA
Para empezar debes tener una cuanta en google y crear un proyecto en firebase console.

-   Inicia una base de datos firestore en modo prueba para permitir permisos de lectura y escritura sin necesidad de estar autenticado.
-   En configuraciones del proyecto `settings`en la pestaña `Cuentas de servicio` genera una clave privada. Esto descargara una archivo .json que utilizaremos mas adelante.

Copia el fragmento de codigo que encontrarás.

```js
var admin = require('firebase-admin');
var serviceAccount = require('path/jsoDescargado.json');
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://<tus-datos>.firebaseio.com',
});
```

:::
