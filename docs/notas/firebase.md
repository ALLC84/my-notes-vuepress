---
lang: es
title: Firebase
description: Base de datos en tiempo real
sidebar: auto
meta:
   - name: description
     content: Guia básica de Firebase
   - name: keywords
     content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions.
---

# Firebase

**Base de datos en tiempo real**

## Basicos Firebase

Todos los servicios de firebase tienen una inicializacion

Para acceder a los cervicios pripero debemos traer la configuracion de la DB, inicializarla y luego acceder a ella.

### Configuracion

```js
/* 
|-----------------------------------------------
|  FIREBASE
|-----------------------------------------------
| Configuracion de FireBase para conectarnos 
|
*/
const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
}

export default config
```

### Inicializa DB

```js
firebase.initializeApp(config)
```

### Acceder a la DB

```js
db = firebase.dataBase()
```

### Obtener valor

Obtener el valor de un nodo o referencia

```js
// Ejem: 1
const valorRef = db.ref().child('Referencia')

// Ejem: 2
const torneos = database.ref('enero')
```

### Obtener datos

```js
on()-- > 'Se actualiza en tiempo real'
once()-- > 'Se actualiza al recargar'

// Ejemplo:
let dataTorneos = []
const torneos = database.ref('enero')

torneos.on('value', (data) => {
	dataTorneos.push(data.val())
})
```

### Insertar datos

```js
set()-- >
	'No crea un id, con lo cual el dato esta directamente, si hay datos en la referencia a guardar, los sobre escribe'
push()-- >
	`Genera un id unico al subir los datos a la DB --> agrega datos sin borrar los ya existentes`
```

```js
//Ejemplo: 1
db.ref()
	.child('data')
	.push({
		mensaje: 'hola - push',
	})

//Ejemplo: 2
db.ref()
	.child('data')
	.set({
		mensaje: 'hola - set',
	})
```

### Actualizar datos

```js
// Se utiliza para actualizar datos en firebase
update()
```

### Eliminar datos

```js
// Se utiliza para eliminar datos en firebase
delete()
```

### Detectar cambios

Metodos que se utilizan para detectar cambios segun acciones en la
DB y actualizan la vista.

```js
referenciaDB.on('child_added', (data) => {})

referenciaDB.on('child_changed', (data) => {})

referenciaDB.on('child_removed', (data) => {})
```

### Trabajando con la terminal

Muestra todos los comandos que se pueden utilizar en firebase

```sh
firebase --help
```

Dar privilegios a la terminal para interactura con la DB

```sh
firebase login
```

Servicios a utilizar

```sh
firebase init
```

## CRUD FireBase

### HTML

```html
<!-- Formulario para obtener datos del usuario -->
<form>
	<input type="text" id="name" placeholder="Escribe tu ombre" required />
	<input type="text" id="email" placeholder="Escribe tu Email" required />
	<input type="hidden" id="id" />
	<input type="submit" value="Enviar" />
</form>

<!-- Lista donde se mostraran los usuarior registrados -->
<ul id="contacts"></ul>
```

### JavaScript

```js
;
((d, c, f) => {

	const config = {
	   apiKey: "",
	   authDomain: "",
	   databaseURL: "",
	   projectId: "",
	   storageBucket: "",
	   messagingSenderId: ""
	};

	// ( f ) es utilizada como firebase para inicializar firebase
	f.initializeApp( config );

	/*
	|-----------------------------------------------
	| Obtener campos y crear variables
	|-----------------------------------------------
	| Obtenemos todas lod campos HTML que utilizamos y
	| creamos las variables.
	|
	*/
	const db = f.database(),
		  contactRef   = db.ref().child('contacts'),
		  contactsForm = d.forms[0],
		  contactName  = d.getElementById('name'),
		  contactEmail = d.getElementById('email'),
		  contactId    = d.getElementById('id'),
		  contacts     = d.getElementById('contacts')


	/*
	|-----------------------------------------------
	| ASSETS
	|-----------------------------------------------
	| Funciones de ayuda que se utilizaran
	|
	*/
	function contactTemplate({name, email}) {
		return `
			<span> ${name}$ </span>
			-
			<span> ${email}$ </span>

			<button class="edit"> Editar </button>
			<button> class="delete" Eliminar </button>
		`
	}


	/*
	|-----------------------------------------------
	| CREATE
	|-----------------------------------------------
	| Guardamos los datos recibidos por el formulario
	|
	*/
	contactsForm.addEventListener('submit', e => {
		e.preventDefault();

		let id = contactId || contactRef.push().key,
			contactData = {
				name  = contactName.value,
				email = contactEmail.value
			},
			updateData = {}

		updateData[`/${id}`] = contactData;

		contactRef.update(updateData);

		contactId.value = '';
		contactsForm.reset();
	});


	/*
	|-----------------------------------------------
	| READ
	|-----------------------------------------------
	| Leemos los datos,
	| Detectamos cambios,
	| Detectamos eliminados de la DB de firebase
	|
	| Todo esto para mantener la vista actualizada con los datos de la DB
	|
	*/
	// Muestra los datos
	contactRef.on('child_added', data => {
		let li = d.createElement('li')

		li.id = data.key
		li.innerHTML = contactTemplate(data.val())
		contacts.appendChild(li)
	})

	// Detecta ediciones en los datos y actualiza la vista
	contactRef.on('child_changed', data => {
		let affectedNode = d.getElementById(data.key)
		affectedNode.innerHTML = contactTemplate(data.val())
	})

	// Detecta las eliminaciones y elimina los datos de la vista
	contactRef.on('child_removed', data => {
		let affectedNode = d.getElementById(data.key)
		contacts.removeChild(affectedNode)
	})


	/*
	|-----------------------------------------------
	| EDIT - DELETE
	|-----------------------------------------------
	|
	| Detectara clicK en todo el documento HTML
	| Luego se le pedira que escuche los botones edit, delete
	| matches() retorna boolean --> si coincide o no con ... ( cualquier selector CSS valido )
	|
	*/
	d.addEventListener('click', e => {
		let affectedNode = e.target.parentElement;
		//UPDATE
		if( e.target.matches('button.edit')) {
			contactName.value = affectedNode.querySelector('.name').innerText
			contactEmail.value = affectedNode.querySelector('.email').innerText
			contactId.value = affectedNode.id
		}

		//DELETE
		if( e.target.matches('button.delete')) {
			let id = affectedNode.id
			db.ref(`contacts/${id}`).remove()
		}
	})



})(document, console.log, firebase);
```

## Autenticacion

### Github

HTML

```html
<button id="login">Entra con github</button>

<div id="login-message">
	<div>
		<p id="session-message"></p>
	</div>
</div>
```

JavaScript

```js
;
((d, c, f) => {

	const config = {
	   apiKey: "",
	   authDomain: "",
	   databaseURL: "",
	   projectId: "",
	   storageBucket: "",
	   messagingSenderId: ""
	};

	// ( f ) es utilizada como firebase para inicializar firebase
	f.initializeApp( config );

	/*
	|-----------------------------------------------
	| AUTH
	|-----------------------------------------------
	| . Github --> GithubProvider()
	| . Cada Red Social tiene tu nombre de funcion provider
	| 	( ver docs en firebase)
	|
	*/
	const provider = new f.auth.GithubAuthProvider(),
		  user = f.auth.currentUser,
		  loginMessage = d.getElementById('login-message'),
		  ahutMessage = d.getElementById('session-message')


	// Detecta los cambios en el estado de login del usuario
	f.auth().onAuthStateChange(user => {
		if(user) {
			// Podemos mandar mensaje a la vista con boton le sierre
			<button id="logout"> Salir <button>
			c('Usuario autenticado')
		} else {
			// Podemos mandar mensaje a la vista
			c('Usuario NO autenticado')
		}
	})

	d.addEventListener('click', e => {
		// Detecta click en login
		if(e.target.matches('#login')) {

			f.auth().singInWithPopup(provider)
				.then(result => {
					// Podemos mandar mensaje a la vista
					c(result.user)
				})
				.catch(err => {
					// Podemos mandar mensaje a la vista
					c(err)
				})
		}

		// Detecta click en logout
		if(e.target.matches('#logout')) {
			f.auth().singOut()
				.then(() => loginMessage.innerHTML = `
					<p> Session terminada </p>
				`)
		}
	})

})(document, console.log, firebase);

```

## Abilitar CORS

Para poder descarga de archivos

1 - Instalamos `gsutil` para linea de comandos.

**Ejemplo para MAC**
En nuestro terminal:

1 - Escribe

```sh
curl https://sdk.cloud.google.com | bash
```

2 - Reinicia tu shell:

```sh
exec -l $SHELL
```

3 - Ejecuta `gcloud init` para inicializar el entorno de gcloud:

```sh
gcloud init
```

Creamos un archivo en nuestro proyecto llamado cors.json

```json
[
	{
		"origin": ["*"],
		"method": ["GET"],
		"maxAgeSeconds": 3600
	}
]
```

Ubicados en la carpeta del proyecto desde la terminal escribimos el siguiente codigo pasando el nombre de nuestro bucket de firebase storage.

```sh
gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```

## Firebase Hosting

Hacer deploy de una web en Firebase Hosting

### Instalación

```sh
npm install -g firebase-tools
```

### Login

```sh
firebase login
```

### Inicializar proyecto

```sh
firebase init
```

::: warning NOTA
En la configuracion de firebase ponemos la carpeta pública que será utilizada en producción.

Esta carpeta se utilizará para hacer el deploy ( en el caso de react es ==> build)

Escogemos el proyecto de firebase donde haremos el deploy.
:::

### Deploy

```sh
firebase deploy
```

### Proyecto asociado

Mostrar los proyecyos asociado a la cuenta logeada

```sh
firebase projects:list
```

### Logout

Des logeranos de firebase-tools

```sh
firebase logout
```
