---
lang: es
title: Configuración
description: Configuración vuepress.
# sidebar: auto
meta:
    - name: description
      content: Configuración vuepress
    - name: keywords
      content: Vue, Vuepress, Frontend ,JavaScript,Configuración
---

# Configuración Vuepress

## Modificamos config.js

El archivo `docs/.vuepress/config.js` sera el encargado de tener la configuracion de nuestra
`nav` entre otras cosas.

```js
module.exports = {
	title: 'Mis notas',
	description: 'Una guia con mis notas sobre programación web!',

	themeConfig: {
		logo: '/images/hero.png',

		nav: [
			{
				text: 'Notas',
				ariaLabel: 'Menu de notas',
				items: [
					{
						text: 'git',
						link: '/notas/git',
					},
					{
						text: 'JavaScript',
						link: '/notas/javascript',
					},
					{
						text: 'Vuepress',
						link: '/notas/vuepress',
					},
				],
			},
			{ text: 'About', link: 'https://cv.alejandrollorente.com' },
		],
	},
};
```

[Aquí podras ver la información completa sobre el archivo config.js de vuepress](https://vuepress.vuejs.org/config/)

## Modificamos README.md

El arvhivo `README.md` será el Home de nuestra página,
encargado de contener la información de las tarjetas

```md
---
lang: es
layout: HomeLayout
title: Mis Notas
description: Una guia con mis notas sobre programación web!

cards:
    - title: 'Git '
      description: Control de versiones
      path: notas/git
      image: /images/img-card-git.jpg

    - title: JavaScript
      description: Base de datos en tiempo real
      path: notas/javascript
      image: /images/img-card-javascript.jpg

    - title: Vuepress
      description: Crea páginas de documentación con Vue.
      path: notas/vuepress
      image: /images/img-card-vuepress.jpg

meta:
    - name: description
      content: Notes de programación web
    - name: keywords
      content:
          'Notas de programación, Vue, TypeScript, JavaScript, CSS, HTML, Git,
          Vuepress, Gatsby, React.  '

footer: Copyright © 2020 - Alejandro Llorente
---
```
