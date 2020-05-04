---
lang: es
title: TypeScript
description: Escribe JavaScript moderno y fuertemente tipado.
sidebar: auto
meta: 
  - name: description
    content: Guia básica de TypeScript y POO
  - name: keywords
    content: JavaScript, TypeScript Programacion, POO
---

# TypeScript

Escribe JavaScript moderno y fuertemente tipado.

## Basico

### Inicia un proyecto

Creamos el archivo tsconfig.json
`tsc -init`

### Compilar ts

`tsc <archivo.ts>`

### Modo observador de un archivo

`tsc --watch <archivo.ts>`

### Modo observador para todos los archivos .ts

`tsc *.ts -w`

## Tipos de datos

### boolean

```ts
let isDone: boolean = true
```

### number

```ts
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
```

### string

-  (" ", ' ')

```ts
let color: string = 'blue'
color = 'red'
```

### Template string

-  `` (` `) ``
-  Para interpolar variables se utiliza `${ }`

```ts
let fullName: string = `Bob Bobbington`
let age: number = 37

let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`
```

### Array

-  `[ ]`
-  Dos formas de declarar matrices

```ts
let list: number[] = [1, 2, 3]

let list: Array<number> = [1, 2, 3]
```

### Tuple

```ts
// Declare a tuple type
let x: [string, number]
// Initialize it
x = ['hello', 10] // OK
// Initialize it incorrectly
x = [10, 'hello'] // Error
```

### Enum

-  Una enumeración es una forma de dar nombres más amigables a conjuntos de valores numéricos.

```ts
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green
```

-  O bien, incluso establecer manualmente todos los valores en la enumeración:

```ts
enum Color {
	Red = 1,
	Green = 2,
	Blue = 4,
}
let c: Color = Color.Green
```

### Any

-  Es posible que tengamos que describir el tipo de variables que no sabemos cuando estamos escribiendo una aplicación.Estos valores pueden provenir de contenido dinámico, por ejemplo, del usuario o de una biblioteca de terceros.
   En estos casos, queremos optar por no realizar la comprobación de tipos y dejar que los valores pasen por las comprobaciones en tiempo de compilación.

```ts
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean
```

### Void

-  `void` es un poco como lo contrario de `any`: la ausencia de tener ningún tipo en absoluto.Normalmente puede ver esto como el tipo de retorno de funciones que no devuelven un valor:

```ts
function warnUser(): void {
	console.log('This is my warning message')
}
```

### Never

-  El `never` representa el tipo de valores que nunca ocurren.Por ejemplo,`never`es el tipo de retorno para una expresión de función o una expresión de función de flecha que siempre lanza una excepción o una que nunca devuelve;

```ts
// Function returning never must have unreachable end point
function error(message: string): never {
	throw new Error(message)
}

// Inferred return type is never
function fail() {
	return error('Something failed')
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
	while (true) {}
}
```

### Object

`object` es un tipo que representa el tipo no primitivo, es decir, cualquier cosa que no es`number`,`string`,`boolean`,`symbol`,`null`, o`undefined`. \
Con el`object` tipo, las APIs `Object.create` pueden ser mejor representadas.Por ejemplo:

```ts
declare function create(o: object | null): void

create({ prop: 0 }) // OK
create(null) // OK

create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
```

## Forzar un tipo de datos

A veces, terminará en una situación en la que sabrá más sobre un valor que TypeScript. Por lo general, esto ocurrirá cuando sepa que el tipo de alguna entidad podría ser más específico que su tipo actual.

Las aserciones de tipo tienen dos formas.

1 - Uno es la sintaxis de "ángulo-corchete":

```ts
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
```

2 - Y el otro es el as-syntax:

```ts
let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length
```

### Tipos personalizados

Podemos pasarle a una variable mas de un tipo \
separando los tipos por `|`

Variables

```ts
let curso: string | number = 'Typescript'
// Podemos pasarle un valor numerico sin que de Error
curso = 1
```

Arrays

```ts
let cursos: (string | number)[] = ['TypeScript', 2]
```

Tuplas
Define la estructura de la tupla y el orden en que resive los tipos de datos

```ts
let curso: [string, number] = ['TypeScript', 1]
// Correcto
curso = ['Angular', 7]

// Error
curso = [1, 'React']
```

### Alias para tipos de datos

Creamos una variable donde solo podra resivir los valores asignado

```ts
let cusosComprados: 'TypeScript' | 'Angular' | 'JavaScript'

// Error
cursosComprados = 'React'
```

`TYPE` Define un tipo ( Alieas )

```ts
type Curso = 'TypeScript' | 'Angular' | 'JavaScript'

cursosComprados: Curso = 'Angular'

// Funcion que resive como parametro una variable de typo Curso
const cursoComDesc = (curso: Curso) => {
	cursoComprado = curso
}

// Error
cursosComprados: Curso = 'React'
```

TYPE para una funcion

```ts
type FuncionCompra = (curso: Curso) => void

// Una funcion que resive como tipo otra funcion definida con TYPE
const cursoComDesc: FuncionCompra = (curso) => {
	cursoComprado = curso
}
```

### Verificación de tipos

```ts
type Curso = 'Angular' | 'TypeScript'

type CursoObj = {
	id: number
	nombre: string
}

// Tiene que resivir los tipos y campos especificados sino dara Error
const primerCurso: CursoObj = {
	id: 1,
	nombre: 'JavaScript',
}
```

### Castin

Se utiliza para verificar que los datos sean de un tipo, antes de intentar utilizarlo en una funcion

```ts
function getIdCurso(curso: string): number {
	const obj = JSON.parse(curso)

	return (obj as CursoObj).id

	// Se puade hacer el castin tambien asi
	return (<CursoObj>obj).id
}
```

## Funciones

Los parametros de las funciones en js son opcionales, si no existe devuelve undefined.

### Parametros obligatorios en ts

```js
function nombre(nombre: string): string {
	console.log(nombre)
}
```

### Parametros opcionales

```js
function nombre(nombre?: string): string {
	console.log(nombre)
}
```

### Parametros por defecto

```js
function nombre(nombre: string, capitalizar: boolean = true): string {
	if (capitalizar) {
		return capitalizar(nombre)
	} else {
		return nombre
	}
}

function capitalizar(palabra: string): string {
	return palabra.charAt(0).tuUpperCase() + palabra.substr(1).tuLogerCase()
}
```

### Parametros Rest

```js
function nombre( a: number, ...b: number[] ):number {
   return( a + ...b )
}
```

### Tipo funcion

(tipo de los parametros) => retorno de la funcion

```js
function sumar(a: number, b: number): number {
	return a + b
}

const miFuncion: (a: number, b: number) => number = sumar
```

## Objetos en TypeScript

### Basico

```js
let flash = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],
}
```

### De un tipo especifico

```js
let flash: { nombre: string, edad: number, poderes: string[] } = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],
}
```

### Metodos de objetos

Se puede crear una carpeta con todas las definiciones de tipos de tu app

```js
type Heroe = {
	nombre: string,
	edad: number,
	poderes: string[],

	getNombre(): string,
}

let flash: Heroe = {
	nombre: 'Barry Allen',
	edad: 24,
	poderes: ['Correr rapido', 'Viajar en el tiempo'],

	getNombre() {
		return this.nombre
	},
}

flash.getNombre()
```

### Varios tipos en una variable

```js
let loQueSea: number | string | boolean | Heroe = 'Alejandro'

loQueSea = {
	nombre: 'Alejandro',
	edad: 34,
	poderes: 'Aprender programacion',
}
```

### Validar tipo de dato

```js
console.log(typeof loQueSea)
```

## Que es tsconfig.json

Configuracion para la compilacion de typescript

### Incluir archivos y carpetas

```json
"include": [
   "app/**/*"
],
```

### Ingnorar archivos y carpetas

```json
"exclude": [
   "node_modules",
   "src/",
   "etc",
   "build"
]
```

### Generar archivo de salida unico

```json
"outFile": "build/main.js"
```

## Namespace y modulos

-  Ayuda a separar el codigo
-  Se crean de forma global
-  Tienen el problema de que al importarlo se carga todas las funciones del namespace

```
- interfaces
- clases
- logica
- funciones
```

### Namespace

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
Validaciones.validarTexto('Alejandro')
```

### Modulos

libreria `system.js`
validaciones/texto.ts

```js
export function validarTexto(texto: string): string {
	if (texto > 3) {
		return true
	} else {
		return false
	}
}
```

app.js

```js
import { validarTexto } from 'validaciones/texto'
```

## Depuracion en TypeScript

1 - Abrimos inspeccionar elemento en el navegador

2- Sources / archivo del codigo a inspecionar

3 - Marcamos el punto donde queremos obtener el dato y recargamos el navegador

4 - Obtendremos el valor de los datos en ese punto

## Caracteristicas ES6

### Destructuracion objetos

```js
let avengers = {
	nick: 'Samuel Jackson',
	ironman: 'Robert Downey',
	vision: 'Paul Bettany',
}

const { nick, ironman, vision } = avengers
```

### Destructuracion array

```js
let avengersArray = ['Samuel Jackson', 'Robert Downey', 'Paul Bettany']

const [avenger1, avenger2, avenger3] = avengersArray
```

### Nuevo ciclo for Of

```js
for (let avenger of avengersArray) {
	console.log(avenger)
}
```

## Clases en TypeScript

```js
class Avengers {
	nombre: string
	equipo: string
	nombreReal: string
	puedePelear: boolean
	peleasGanadas: numbe
}

let atman: Avengers = new Avengers()
```

### Static

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
console.log(Curso.getInfo(TS))
```

### Clases abstractas

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

### Interfaces

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
	console.log(`Enviando a ${xmen.nombre}`)

	xmen.regenerar(xmen.nombre)
}

let worverine: Xmen = {
	nombre: 'Cindy',
	poder: 'Aprender',

	regenerar(nombreReal: string) {
		console.log(`Se ha regenerado ${nombreReal}`)
	},
}

enviarMision(worverine)
```

### Interface functions

```js
interface DosNumerosFunc {
	(num1: number, num2: number): number;
}

let sumar: DosNumerosFunc

sumar = (num1: number, num2: number) => num1 + num2
console.log(sumar(8, 7))

let restar: DosNumerosFunc

sumar = (num1: number, num2: number) => num1 - num2
console.log(sumar(12, 6))
```

### Constructor privados

Se utiliza cuando quieres que no exista mas de una instancia de una clase

### Constructor Genericos

Para los genericos por convencion se utiliza con una `<T>` luego al parametro:T

```js
function regresar<T>(arg: T) {
	return arg
}

console.log(regresar(15.456789).toFixed(2))
console.log(regresar('alejandro').toUpperCase())
```

-  Genericos en funciones

```js
function funcionGenerica<T>(args: T) {
	return args
}

type Heroe = {
	nombre: string,
	poder: string,
}

type Villano = {
	nombre: string,
	nombreReal: string,
	poder: string,
}

let deadpool = {
	nombre: 'Deadpool',
	nombreReal: 'Wade Wiston',
	poder: 'Recuperacion',
}

console.log(funcionGenerica < Villano > deadpool)
```

-  Genericos en Array

```js
let heroesArray: Array<string> = ['Alejandro', 'Cindy']

// Lo mismo que esto
let villanos: String[] = ['Perrro malo', 'Gato malo']
```

### Clases Genericas

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

## Decoradores

Los decoradores (`@`), son Caracteristicas propias de TypeScript

**"experimentalDecorators": true** --> `tsconfig.json`

`@NombreDecorador`

::: tip NOTA
Un decorador, no es mas que una funcion.\
Sirve para extender una funcion mediante otra funcion, pero sin tocar la original.\
El decorador recibe una funcion como argumento ( aquella que se quire decorar )
Devuelve esa funcion con alguna funcionalidad adicional

**Caracteristicas**

-  El nombre del decorador tiene que ser el de la funcion a decorar, y tiene que estar definida previamente
-  Podriamos decorar funciones, propiedades, una clase, parametros, metodos, etc.
   :::

### Decoradores de Clases

```js
function consola(constructor: Function) {
	console.log(constructor)
}
```

### Decorador de fabrica

Una funcion que puede recibir parametros
que debe regresar algo que pueda ser utilizado como un decorador

```js
function imprimirConsola(imprimir: boolean): Function {
	if (imprimir) {
		return consola
	} else {
		return () => 'null'
	}
}
```

```js
@imprimirConsola(false)
class Villanos {
   constructor(public nombre: string) {}
}
```

**Ejemplo de decoradores:**

`cliente.ts`

```ts
import {
   Cuenta,
   Direccion
} from './modelos'

// target --> Es nuestra clase
function Entidad(config: any){
   console.log(`Entidad: ${config}`)

   return (target: any) => {
      target.clave = config.clave
      console.log(`Target:` ${target})
   }
}

// target --> Hace referencia a ----- agregarCuenta()
function enumerable(config: boolean){
   return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

      console.log(`Target: ${target}`)

      descriptor.enumerable = config
   }
}

@Entidad({
  clave: 'CLIENTE'
})
export class Cliente {
   private static clave : 'CLIENTE'
   private codigo       : number
   private nombre       : string
   private direccion    : Direccion
   private cuenta       : Cuenta[]

   constructor(codigo: number, nombre: string, direccion: Direccion){
      this.codigo    = codigo
      this.nombre    = nombre
      this.direccion = direccion
      this.cuenta    = []
   }


   @enumerable(false)
   agregarCuenta(cuenta: Cuenta){
      this.cuenta.push(cuenta)
   }
}
```

Instancias en `app.ts`

```ts
import { Cliente, Direccion } from './modelos'

// Creando un primer cliente
const direccion01 = new Direccion('España', 'Madrid', 'Camilo Jose Cela')
const cliente01 = new Cliente(1, 'Alejandro Llorente', direccion01)

function analizar(clave: any) {
	console.log(`[Cliente] ${clave}`)
}

analizar(Cliente)
for (let propiedad in Cliente.prototype) {
	console.log(`[Cliente] ${propiedad}`)
}
```

## Metodos de clases

### Atributos de solo lectura

::: tip READONLY
Se le pasa a la propiedad el atributo `readonly` \
`private readonly nombre: string`
:::

### get / set

```ts
class Curso = {
   constructor(private _id: number, private _nombre: string){

   }

   // Getters
   get id(){
      return this._id
   }

   get nombre(){
      return this._nombre
   }

   // Setters
   set id(id: number){
      this._id = id
   }

   set nombre(nombre: string){
      if(nombre.length <= 3){
         return
      }
      this._nombre = nombre
   }
}
```

-  Utilizacion de los Getters y Setters

```ts
const curso_1 = new Curso(1, 'TypeScript')

console.log(curso_1.nombre) // get nombre
console.log((curso_1.nombre = 'Super TypeScript')) // set nombre
```

### De clase

**Ejemplo 1**

-  Definicion de una Clases

```ts
class EscuelaProgramacion = {
   nombre: string
   cursos: string []

   constructor(nombre: string) {
      this.nombre = nombre
      this.cursos = []
   }

   agregarCurso(curso: string): void{
      this.cursos.push(curso)
   }
}
```

-  Instancia de la clase

```ts
//const escuela = new EscuelaProgramacion('EProg')

let escuela: EscuelaProgramacion
escuela = new EscuelaProgramacion('EProg')

escuela.agregarCurso('TypeScript')
escuela.agregarCurso('Angular')
```

### Modificadores de acceso

::: tip Nota
`(-) private` --> Solo accesible desde la propia clase \
`(#) protected` --> Accesible desde una clase que hereda de esta\
`(+) public` --> Accesible desde toda la app
:::

**Ejemplo 2**
Definición de las clases

```ts
class Curso = {
   private id: number
   private nombre: string

   constructor(id: number, nombre: string){
      this.id = id
      this.nombre = nombre
   }
}
```

Simplificando la clase Curso

```ts
class Curso = {
   constructor(private id: number, private nombre: string){

   }
}
```

```ts
class EscuelaProgramación = {
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

Instancia de la clase

```ts
let escuela: EscuelaProgramacion
escuela = new EscuelaProgramacion('EProg')

escuela.agregarCurso(new Curso(1, 'TypeScript'))
escuela.agregarCurso(new Curso(2, 'Angular'))
```

## POO TypeScript

### Que rodea la POO ?

-  Clases
-  Abstraccion de datos
-  Encapsulacion
-  Informacion privada
-  Herencia
-  Polimorfismo

### Herencia

::: tip Nota
Las clases heredan los metodos y propiedades de la clase padre. \
Deben estar marcados como `public` o `protected` \
Se utiliza el metodo `super()` para obtener las propiedades del padre.
:::

```ts
class Curso = {
   constructor(protected id: number, protected nombre: string){

   }

   nuevoCurso(curso: Curso): void{
      this.cursos.push(curso)
   }
}
```

```ts
class Escuela = {
   constructor(protected _id: number, protected _nombre: string, protected cursos: Curso){

   }
}
```

Clase que Hereda

```ts
class EscuelaProgamacion extend Escuela = {
   constructor(nombre: string, paginaWeb: string){
      super(nombre)
   }
}
```

Instanciando la clase y utilizando los metodos de las clases heredadas

```ts
let escuela: EscuelaProgamacion
escuela = new EscuelaProgamacion('Eprog', 'eprog.com')

console.log(escuela.nombre) // Get de la clase padre
```

### Simulación de un banco

**Dentro de una carpeta llamada modelos creamos las diferentes clases**

Clase Direccion --> direccion.ts

```ts
export class Direccion {
	constructor(
		private pais: string,
		private ciudad: string,
		private calle: string
	) {}
}
```

Clase Cuenta --> cuenta.ts

```ts
export abstract class Cuenta {
	constructor(
		private numero: number,
		private saldo: number,
		private modena: string
	) {}
}
```

Clase Caja de Ahorro --> caja-ahorro.ts

```ts
import { Cuenta } from './cuenta'

export class CajaDeAhorro extends Cuenta {
	constructor(
		private nombre: string,
		private saldo: number,
		private moneda: string,
		private interes: number
	) {
		super(nombre, saldo, moneda) // Cuenta.constructor()
	}

	public aplicarInteres(): void {
		console.log(`Aplicando Interes: ${this.interes}`)
	}
}
```

Clase Cuenta Corriente --> cuenta-corriente.ts

```ts
import { Cuenta } from './cuenta'

export class CuentaCorriente extends Cuenta {
	constructor(
		private nombre: string,
		private saldo: number,
		private moneda: string,
		private interes: number
	) {
		super(nombre, saldo, moneda) // Cuenta.constructor()
	}

	public aplicarInteres(): void {
		console.log(`Aplicando Interes: ${this.interes}`)
	}
}
```

Clase Cliente --> cliente.ts

```ts
import { Cuenta } from './cuenta'
import { Direccion } from './direccion'

export class Cliente {
	private codigo: number
	private nombre: string
	private direccion: Direccion
	private cuenta: Cuenta[]

	constructor(codigo: number, nombre: string, direccion: Direccion) {
		this.codigo = codigo
		this.nombre = nombre
		this.direccion = direccion
		this.cuenta = []
	}

	agregarCuenta(cuenta: Cuenta) {
		this.cuenta.push(cuenta)
	}
}
```

INDEX --> index.ts \
Creamos un archivo index donde exportaremos todas las clases de la carpeta modelos

```ts
import { Cliente } from './cliente'
import { Cuenta } from './cuenta'
import { CajaDeAhorro } from './caja-ahorro'
import { CajaCorriente } from './cuenta-corriente'
import { Direccion } from './direccion'
```

**Crear instancias en app.ts**

```ts
import {
	Cliente,
	Cuenta,
	CajaDeAhorro,
	CajaCorriente,
	Direccion,
} from './modelos'

// Creando un primer cliente
const direccion01 = new Direccion('España', 'Madrid', 'Camilo Jose Cela')
const cliente01 = new Cliente(1, 'Alejandro Llorente', direccion01)

const cuenta01: Cuenta, cuenta02: Cuenta

cuenta01 = new CajaDeAhorro(100, 0, 'EU', 10)
cuenta02 = new CuentaCorriente(500, 0, 'EU', 5)

cliente01.agregarCuenta(cuenta01)
cliente01.agregarCuenta(cuenta02)
```
