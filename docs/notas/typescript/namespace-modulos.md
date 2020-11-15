---
lang: es
title: Namespace y modulos
description: Namespace y modulos en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Namespace y modulos en Typescript.
    - name: keywords
      content: Namespace, modulos, Typescript
---

# Namespace y modulos en Typescript

-   Ayuda a separar el codigo
-   Se crean de forma global
-   Tienen el problema de que al importarlo se carga todas las funciones del namespace

```
- interfaces
- clases
- logica
- funciones
```

## Namespace

Creamos una carpeta validaciones
un archivo texto.ts y otro fecha.ts

`texto.ts`

```js
namespace Validaciones {
   export function validarTexto(texto:string):string {
      if(texto > 3) {
         return true
      } else {
         return false
      }
   }
}
```

`fecha.ts`

```js
namespace Validaciones {
   export function validarFecha(fecha:number):number {
      if(typeof fecha === number) {
         return true
      } else {
         return false
      }
   }
}
```

`app.ts`

```js
/// <reference path="./validaciones/texto.ts" />
Validaciones.validarTexto('Alejandro');
```

## Modulos

libreria `system.js`
validaciones/texto.ts

```js
export function validarTexto(texto: string): string {
	if (texto > 3) {
		return true;
	} else {
		return false;
	}
}
```

app.js

```js
import { validarTexto } from 'validaciones/texto';
```
