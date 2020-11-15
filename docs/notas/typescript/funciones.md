---
lang: es
title: Funciones
description: Funciones en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Funciones en Typescript.
    - name: keywords
      content: Funciones Typescript
---

# Funciones en Typescript

Los parametros de las funciones en js son opcionales, si no existe devuelve undefined.

## Parametros obligatorios en ts

```js
function nombre(nombre: string): string {
	console.log(nombre);
}
```

## Parametros opcionales

```js
function nombre(nombre?: string): string {
	console.log(nombre);
}
```

## Parametros por defecto

```js
function nombre(nombre: string, capitalizar: boolean = true): string {
	if (capitalizar) {
		return capitalizar(nombre);
	} else {
		return nombre;
	}
}

function capitalizar(palabra: string): string {
	return palabra.charAt(0).tuUpperCase() + palabra.substr(1).tuLogerCase();
}
```

## Parametros Rest

```js
function nombre( a: number, ...b: number[] ):number {
   return( a + ...b )
}
```

## Tipo funcion

(tipo de los parametros) => retorno de la funcion

```js
function sumar(a: number, b: number): number {
	return a + b;
}

const miFuncion: (a: number, b: number) => number = sumar;
```
