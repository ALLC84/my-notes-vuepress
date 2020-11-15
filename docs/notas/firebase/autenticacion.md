---
lang: es
title: Autenticación
description: Autenticación firebase con GitHub.
# sidebar: auto
meta:
    - name: description
      content: Autenticación firebase con GitHub.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Autenticación
---

# Autenticacion

## Github

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
