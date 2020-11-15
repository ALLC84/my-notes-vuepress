---
lang: es
title: Metodos de clase
description: Metodos de clase en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Metodos de clase en Typescript.
    - name: keywords
      content: Metodos de clase en typescript, TypeScript
---

# Metodos de clases

## Atributos de solo lectura

::: tip READONLY
Se le pasa a la propiedad el atributo `readonly` \
`private readonly nombre: string`
:::

## get / set

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

-   Utilizacion de los Getters y Setters

```ts
const curso_1 = new Curso(1, 'TypeScript');

console.log(curso_1.nombre); // get nombre
console.log((curso_1.nombre = 'Super TypeScript')); // set nombre
```

## De clase

**Ejemplo 1**

-   Definicion de una Clases

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

-   Instancia de la clase

```ts
//const escuela = new EscuelaProgramacion('EProg')

let escuela: EscuelaProgramacion;
escuela = new EscuelaProgramacion('EProg');

escuela.agregarCurso('TypeScript');
escuela.agregarCurso('Angular');
```

## Modificadores de acceso

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
let escuela: EscuelaProgramacion;
escuela = new EscuelaProgramacion('EProg');

escuela.agregarCurso(new Curso(1, 'TypeScript'));
escuela.agregarCurso(new Curso(2, 'Angular'));
```
