---
lang: es
title: Decoradores
description: Decoradores en Typescript.
# sidebar: auto
meta:
    - name: description
      content: Decoradores en Typescript.
    - name: keywords
      content: Decoradores en typescript, TypeScript
---

# Decoradores

Los decoradores (`@`), son Caracteristicas propias de TypeScript

**"experimentalDecorators": true** --> `tsconfig.json`

`@NombreDecorador`

::: tip NOTA
Un decorador, no es mas que una funcion.\
Sirve para extender una funcion mediante otra funcion, pero sin tocar la original.\
El decorador recibe una funcion como argumento ( aquella que se quire decorar )
Devuelve esa funcion con alguna funcionalidad adicional

**Caracteristicas**

-   El nombre del decorador tiene que ser el de la funcion a decorar, y tiene que estar definida previamente
-   Podriamos decorar funciones, propiedades, una clase, parametros, metodos, etc.
    :::

## Decoradores de Clases

```js
function consola(constructor: Function) {
	console.log(constructor);
}
```

## Decorador de fabrica

Una funcion que puede recibir parametros
que debe regresar algo que pueda ser utilizado como un decorador

```js
function imprimirConsola(imprimir: boolean): Function {
	if (imprimir) {
		return consola;
	} else {
		return () => 'null';
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
import { Cliente, Direccion } from './modelos';

// Creando un primer cliente
const direccion01 = new Direccion('España', 'Madrid', 'Camilo Jose Cela');
const cliente01 = new Cliente(1, 'Alejandro Llorente', direccion01);

function analizar(clave: any) {
	console.log(`[Cliente] ${clave}`);
}

analizar(Cliente);
for (let propiedad in Cliente.prototype) {
	console.log(`[Cliente] ${propiedad}`);
}
```
