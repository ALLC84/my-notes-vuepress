---
lang: es
title: Forzar tipos
description: Forzar tipos de datos Typescript.
# sidebar: auto
meta:
    - name: description
      content: Forzar tipos de datos Typescript.
    - name: keywords
      content: Forzar tipos de datos typescript, TypeScript
---

# Forzar un tipo de datos

A veces, terminará en una situación en la que sabrá más sobre un valor que TypeScript. Por lo general, esto ocurrirá cuando sepa que el tipo de alguna entidad podría ser más específico que su tipo actual.

Las aserciones de tipo tienen dos formas.

1 - Uno es la sintaxis de "ángulo-corchete":

```ts
let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;
```

2 - Y el otro es el as-syntax:

```ts
let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;
```

## Tipos personalizados

Podemos pasarle a una variable mas de un tipo \
separando los tipos por `|`

Variables

```ts
let curso: string | number = 'Typescript';
// Podemos pasarle un valor numerico sin que de Error
curso = 1;
```

Arrays

```ts
let cursos: (string | number)[] = ['TypeScript', 2];
```

Tuplas
Define la estructura de la tupla y el orden en que resive los tipos de datos

```ts
let curso: [string, number] = ['TypeScript', 1];
// Correcto
curso = ['Angular', 7];

// Error
curso = [1, 'React'];
```

## Alias para tipos de datos

Creamos una variable donde solo podra resivir los valores asignado

```ts
let cusosComprados: 'TypeScript' | 'Angular' | 'JavaScript';

// Error
cursosComprados = 'React';
```

`TYPE` Define un tipo ( Alieas )

```ts
type Curso = 'TypeScript' | 'Angular' | 'JavaScript';

cursosComprados: Curso = 'Angular';

// Funcion que resive como parametro una variable de typo Curso
const cursoComDesc = (curso: Curso) => {
	cursoComprado = curso;
};

// Error
cursosComprados: Curso = 'React';
```

TYPE para una funcion

```ts
type FuncionCompra = (curso: Curso) => void;

// Una funcion que resive como tipo otra funcion definida con TYPE
const cursoComDesc: FuncionCompra = (curso) => {
	cursoComprado = curso;
};
```

## Verificación de tipos

```ts
type Curso = 'Angular' | 'TypeScript';

type CursoObj = {
	id: number;
	nombre: string;
};

// Tiene que resivir los tipos y campos especificados sino dara Error
const primerCurso: CursoObj = {
	id: 1,
	nombre: 'JavaScript',
};
```

## Castin

Se utiliza para verificar que los datos sean de un tipo, antes de intentar utilizarlo en una funcion

```ts
function getIdCurso(curso: string): number {
	const obj = JSON.parse(curso);

	return (obj as CursoObj).id;

	// Se puade hacer el castin tambien asi
	return (<CursoObj>obj).id;
}
```
