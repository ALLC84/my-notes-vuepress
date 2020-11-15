---
lang: es
title: Caracteristicas ES6
description: Tipos de datos Typescript.
# sidebar: auto
meta:
    - name: description
      content: Caracteristicas ES6 Typescript.
    - name: keywords
      content: ES6, TypeScript
---

# Caracteristicas ES6

## Destructuracion objetos

```js
let avengers = {
	nick: 'Samuel Jackson',
	ironman: 'Robert Downey',
	vision: 'Paul Bettany',
};

const { nick, ironman, vision } = avengers;
```

## Destructuracion array

```js
let avengersArray = ['Samuel Jackson', 'Robert Downey', 'Paul Bettany'];

const [avenger1, avenger2, avenger3] = avengersArray;
```

## Nuevo ciclo for Of

```js
for (let avenger of avengersArray) {
	console.log(avenger);
}
```
