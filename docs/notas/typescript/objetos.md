---
lang: es
title: Objetos
description: Objetos en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Objetos en Typescript.
    - name: keywords
      content: Objetos Typescript
---

# Objetos en TypeScript

## Basico

```js
let flash = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],
};
```

## De un tipo especifico

```js
let flash: { nombre: string, edad: number, poderes: string[] } = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],
};
```

## Metodos de objetos

Se puede crear una carpeta con todas las definiciones de tipos de tu app

```js
type Heroe = {
	nombre: string,
	edad: number,
	poderes: string[],

	getNombre(): string,
};

let flash: Heroe = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],

	getNombre() {
		return this.nombre;
	},
};

flash.getNombre();
```

## Varios tipos en una variable

```js
let loQueSea: number | string | boolean | Heroe = 'Alejandro';

loQueSea = {
	nombre: 'Alejandro',
	edad: 34,
	poderes: 'Aprender programacion',
};
```

## Validar tipo de dato

```js
console.log(typeof loQueSea);
```
