---
lang: es
title: Inicio
description: Inicio Api rest en cloud functions firebase + firestore
# sidebar: auto
meta:
    - name: description
      content: Inicio Api rest en cloud functions firebase + firestore
    - name: keywords
      content: JavaScript, Firebase, Base de datos, Cloud Functions, Inicio
---

# Iicio del proyecto

## Inatalacion CLI

```sh
npm install -g firebase-tools
```

## Login firebase

```sh
firebase login
```

## Proyecto firebase

```sh
firebase init
```

En el menu mostrado, seleccionamos cloud functions con la tecla espaciadora de nuestro teclado y luego al Enter.

Selecciona `JavaScript` como lenguaje.

## Estructura del proyecto

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
├── .firebaserc
└── .gitignore

```
