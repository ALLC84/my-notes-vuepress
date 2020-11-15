---
lang: es
title: Hosting
description: Subir página a firebase hosting.
# sidebar: auto
meta:
    - name: description
      content: Subir página a firebase hosting.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Hosting
---

# Firebase Hosting

Hacer deploy de una web en Firebase Hosting

## Instalación

```sh
npm install -g firebase-tools
```

## Login

```sh
firebase login
```

## Inicializar proyecto

```sh
firebase init
```

::: warning NOTA
En la configuracion de firebase ponemos la carpeta pública que será utilizada en producción.

Esta carpeta se utilizará para hacer el deploy ( en el caso de react es ==> build)

Escogemos el proyecto de firebase donde haremos el deploy.
:::

## Deploy

```sh
firebase deploy
```

## Proyecto asociado

Mostrar los proyecyos asociado a la cuenta logeada

```sh
firebase projects:list
```

## Logout

Des logeranos de firebase-tools

```sh
firebase logout
```
