---
lang: es
title: POO
description: POO en Typescript.
# sidebar: auto
meta:
    - name: description
      content: POO en Typescript.
    - name: keywords
      content: POO en typescript, TypeScript
---

# POO TypeScript

## Que rodea la POO ?

-   Clases
-   Abstraccion de datos
-   Encapsulacion
-   Informacion privada
-   Herencia
-   Polimorfismo

## Herencia

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
let escuela: EscuelaProgamacion;
escuela = new EscuelaProgamacion('Eprog', 'eprog.com');

console.log(escuela.nombre); // Get de la clase padre
```

## Simulación de un banco

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
import { Cuenta } from './cuenta';

export class CajaDeAhorro extends Cuenta {
	constructor(
		private nombre: string,
		private saldo: number,
		private moneda: string,
		private interes: number
	) {
		super(nombre, saldo, moneda); // Cuenta.constructor()
	}

	public aplicarInteres(): void {
		console.log(`Aplicando Interes: ${this.interes}`);
	}
}
```

Clase Cuenta Corriente --> cuenta-corriente.ts

```ts
import { Cuenta } from './cuenta';

export class CuentaCorriente extends Cuenta {
	constructor(
		private nombre: string,
		private saldo: number,
		private moneda: string,
		private interes: number
	) {
		super(nombre, saldo, moneda); // Cuenta.constructor()
	}

	public aplicarInteres(): void {
		console.log(`Aplicando Interes: ${this.interes}`);
	}
}
```

Clase Cliente --> cliente.ts

```ts
import { Cuenta } from './cuenta';
import { Direccion } from './direccion';

export class Cliente {
	private codigo: number;
	private nombre: string;
	private direccion: Direccion;
	private cuenta: Cuenta[];

	constructor(codigo: number, nombre: string, direccion: Direccion) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.direccion = direccion;
		this.cuenta = [];
	}

	agregarCuenta(cuenta: Cuenta) {
		this.cuenta.push(cuenta);
	}
}
```

INDEX --> index.ts \
Creamos un archivo index donde exportaremos todas las clases de la carpeta modelos

```ts
import { Cliente } from './cliente';
import { Cuenta } from './cuenta';
import { CajaDeAhorro } from './caja-ahorro';
import { CajaCorriente } from './cuenta-corriente';
import { Direccion } from './direccion';
```

**Crear instancias en app.ts**

```ts
import {
	Cliente,
	Cuenta,
	CajaDeAhorro,
	CajaCorriente,
	Direccion,
} from './modelos';

// Creando un primer cliente
const direccion01 = new Direccion('España', 'Madrid', 'Camilo Jose Cela');
const cliente01 = new Cliente(1, 'Alejandro Llorente', direccion01);

const cuenta01: Cuenta, cuenta02: Cuenta;

cuenta01 = new CajaDeAhorro(100, 0, 'EU', 10);
cuenta02 = new CuentaCorriente(500, 0, 'EU', 5);

cliente01.agregarCuenta(cuenta01);
cliente01.agregarCuenta(cuenta02);
```
