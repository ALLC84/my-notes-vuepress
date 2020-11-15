---
lang: es
title: Crud 
description: Ejemplo de Crud en firebase 
# sidebar: auto
meta:
    - name: description
      content: Guia básica de Firebase
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Crud
---

# CRUD FireBase

## HTML

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

## JavaScript

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
