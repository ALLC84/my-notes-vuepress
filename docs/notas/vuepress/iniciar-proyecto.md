---
lang: es
title: Inciar proyecto
description: Inciar proyecto Vuepress.
# sidebar: auto
meta:
    - name: description
      content: Inciar proyecto Vuepress.
    - name: keywords
      content: Vue, Vuepress, Frontend ,JavaScript, Inicio, Proyecto
---

# Inicia un proyecto

```sh
# Crea una carpeta para el proyecto
mkdir <mis-notas> && cd <mis-notas>

# Crea un archivo markdown
echo '# Mis Notas' > README.md
```

Luego, agregue algunos scripts al package.json:

```json
{
	"scripts": {
		"docs:dev": "vuepress dev docs",
		"docs:build": "vuepress build docs"
	}
}
```

Iniciamos en un servidor local para comenzar a editar

```sh
yarn docs:dev # O npm run docs:dev
```

Generar archivos estáticos que pasaremos a producción.

```sh
yarn docs:build # O npm run docs:build
```

Por defecto, los archivos creados estarán en `.vuepress/dist`, que se pueden configurar a través del campo `dest` en `.vuepress/config.js`. Los archivos creados se pueden implementar en cualquier servidor de archivos estático.

[Documentación oficial sobre instalación](https://vuepress.vuejs.org/guide/getting-started.html#global-installation)
