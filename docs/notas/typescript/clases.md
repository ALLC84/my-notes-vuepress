---
lang: es
title: Clases
description: Clases en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Clases en Typescript.
    - name: keywords
      content: Clases en typescript, TypeScript
---

# Clases en TypeScript

```js
class Avengers {
	nombre: string;
	equipo: string;
	nombreReal: string;
	puedePelear: boolean;
	peleasGanadas: numbe;
}

let atman: Avengers = new Avengers();
```

## Static

Atributos y metodos estaticos
::: tip NOTA
Para utilizar estos metodos no se necesita instanciar la clase
`NombreClase.metodoEstatico()`
:::

Clase con un metodo estatico

```ts
class Curso = {
   constructor(private id: number, private nombre: string){}

   static getInfo(curso: Curso): string {
      return JSON.stringify(curso)
   }
}
```

```ts
class Escuela = {
  private nombre: string
  private cursos: Curso[]

  constructor(nombre: string) {
    this.nombre = nombre
				this.cursos = []
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso)
  }

}
```

```ts
let escuela: Escuela
escuela = new Escuela('Escuela de Programación')

const TS = new Curso( 1, 'TypeScript'))
```

Utilizamos el metodo sin la necesidad de instanciar la clase

```ts
console.log(Curso.getInfo(TS));
```

## Clases abstractas

Las clases abtractas te permiten definir un modelo de datos pero no podran ser Instanciadas. \
Si se crea un metodo abstracto autoamicamente la clase tendra que ser abstracta. \
Los metodos abstractos solo se define, luego en la clase que hereda es cuando se implementa la funcionalidad necesaria.

Son utilizadas con `extends nombreClase`

```ts
abstract class Escuela = {
   constructor(protected _id: number, protected _nombre: string, protected cursos: Curso){

   }

   abstract public empezarCurso(curso: Curso): void
}
```

```ts
class EscuelaProgramacion extend Escuela = {
   constructor(nombre: string, paginaWeb: string){
      super(nombre)
   }

   public empezarCurso(curso: Curso) {
      console.log(`${this._nombre} ${this.paginaWeb}`)
   }
}

let escuela: EscuelaProgramacion
escuela = new EscuelaProgramacion('EProg', 'ep.com')

const angular = new Curso(3, 'Angular')
escuela.empezarCurso(angular)
```

## Interfaces

Para definir una estructura para un objetos, clases, funciones.

Son utilizadas con `implements nombreClase`

**Interface Objetos**

```js
interface Xmen {
	nombre: string;
	poder: string;

	regenerar(nombreReal: string): void;
}

function enviarMision(xmen: Xmen) {
	console.log(`Enviando a ${xmen.nombre}`);

	xmen.regenerar(xmen.nombre);
}

let worverine: Xmen = {
	nombre: 'Cindy',
	poder: 'Aprender',

	regenerar(nombreReal: string) {
		console.log(`Se ha regenerado ${nombreReal}`);
	},
};

enviarMision(worverine);
```

## Interface functions

```js
interface DosNumerosFunc {
	(num1: number, num2: number): number;
}

let sumar: DosNumerosFunc;

sumar = (num1: number, num2: number) => num1 + num2;
console.log(sumar(8, 7));

let restar: DosNumerosFunc;

sumar = (num1: number, num2: number) => num1 - num2;
console.log(sumar(12, 6));
```

## Constructor privados

Se utiliza cuando quieres que no exista mas de una instancia de una clase

## Constructor Genericos

Para los genericos por convencion se utiliza con una `<T>` luego al parametro:T

```js
function regresar<T>(arg: T) {
	return arg;
}

console.log(regresar(15.456789).toFixed(2));
console.log(regresar('alejandro').toUpperCase());
```

-   Genericos en funciones

```js
function funcionGenerica<T>(args: T) {
	return args;
}

type Heroe = {
	nombre: string,
	poder: string,
};

type Villano = {
	nombre: string,
	nombreReal: string,
	poder: string,
};

let deadpool = {
	nombre: 'Deadpool',
	nombreReal: 'Wade Wiston',
	poder: 'Recuperacion',
};

console.log(funcionGenerica < Villano > deadpool);
```

-   Genericos en Array

```js
let heroesArray: Array<string> = ['Alejandro', 'Cindy'];

// Lo mismo que esto
let villanos: String[] = ['Perrro malo', 'Gato malo'];
```

## Clases Genericas

```js
class Cuadrado< T extends number | string > {
   base: T;
   altura: T;

   area(): number {
      return this.base * this.altura;
   }
}

let cuadrado = new Cuadrado<number | string>();

cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
```
