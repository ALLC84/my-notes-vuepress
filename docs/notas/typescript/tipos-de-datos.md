---
lang: es
title: Tipos de datos
description: Tipos de datos Typescript.
# sidebar: auto
meta:
    - name: description
      content: Tipos de datos Typescript.
    - name: keywords
      content: Tipos de datos typescript, TypeScript
---

# Tipos de datos

## boolean

```ts
let isDone: boolean = true;
```

## number

```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## string

-   (" ", ' ')

```ts
let color: string = 'blue';
color = 'red';
```

## Template string

-   `` (` `) ``
-   Para interpolar variables se utiliza `${ }`

```ts
let fullName: string = `Bob Bobbington`;
let age: number = 37;

let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
```

## Array

-   `[ ]`
-   Dos formas de declarar matrices

```ts
let list: number[] = [1, 2, 3];

let list: Array<number> = [1, 2, 3];
```

## Tuple

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

## Enum

-   Una enumeración es una forma de dar nombres más amigables a conjuntos de valores numéricos.

```ts
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;
```

-   O bien, incluso establecer manualmente todos los valores en la enumeración:

```ts
enum Color {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c: Color = Color.Green;
```

## Any

-   Es posible que tengamos que describir el tipo de variables que no sabemos cuando estamos escribiendo una aplicación.Estos valores pueden provenir de contenido dinámico, por ejemplo, del usuario o de una biblioteca de terceros.
    En estos casos, queremos optar por no realizar la comprobación de tipos y dejar que los valores pasen por las comprobaciones en tiempo de compilación.

```ts
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
```

## Void

-   `void` es un poco como lo contrario de `any`: la ausencia de tener ningún tipo en absoluto.Normalmente puede ver esto como el tipo de retorno de funciones que no devuelven un valor:

```ts
function warnUser(): void {
	console.log('This is my warning message');
}
```

## Never

-   El `never` representa el tipo de valores que nunca ocurren.Por ejemplo,`never`es el tipo de retorno para una expresión de función o una expresión de función de flecha que siempre lanza una excepción o una que nunca devuelve;

```ts
// Function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message);
}

// Inferred return type is never
function fail() {
	return error('Something failed');
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
	while (true) {}
}
```

## Object

`object` es un tipo que representa el tipo no primitivo, es decir, cualquier cosa que no es`number`,`string`,`boolean`,`symbol`,`null`, o`undefined`. \
Con el`object` tipo, las APIs `Object.create` pueden ser mejor representadas.Por ejemplo:

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create('string'); // Error
create(false); // Error
create(undefined); // Error
```
