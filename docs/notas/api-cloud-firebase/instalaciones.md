---
lang: es
title: Instalaciones
description: Instalaciones necesarias Api rest en cloud functions firebase + firestore
# sidebar: auto
meta:
    - name: description
      content: Instalaciones necesarias Api rest en cloud functions firebase + firestore
    - name: keywords
      content: JavaScript, Firebase, Base de datos, Cloud Functions, Instalaciones necesarias.
---

# Instalaciones necesarias

Instalaremos las dependencias que utilizaremos en este proyecto.

Primero nos movmeos a la carpete functions

```sh
cd functions
```

## Express

Para crear nuestro servidor en node.

```sh
npm i express
```

## Cors

Para permitir el envio de datos entre servidores.

```sh
npm i cors
```

## Ejecución

Ejecutamos el proyecto en nuestro entorno local

```sh
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
