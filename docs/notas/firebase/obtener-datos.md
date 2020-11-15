---
lang: es
title: Obtener datos
description: Obtener datos de firebase.
# sidebar: auto
meta:
    - name: description
      content: Obtener datos de firebase.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Obtener datos
---

# Obtener datos

## Valor

Obtener el valor de un nodo o referencia

```js
// Ejem: 1
const valorRef = db.ref().child('Referencia');

// Ejem: 2
const torneos = database.ref('enero');
```

## Datos

```js
on()-- > 'Se actualiza en tiempo real';
once()-- > 'Se actualiza al recargar';

// Ejemplo:
let dataTorneos = [];
const torneos = database.ref('enero');

torneos.on('value', (data) => {
	dataTorneos.push(data.val());
});
```
