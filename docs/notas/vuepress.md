---
lang: es
title: Vuepress
description: Crea una web de documentación con Vue.
sidebar: auto
meta:
  - name: description
    content: Crea páginas de documentación con Vuepress
  - name: keywords
    content: Vue, Vuepress, Frontend ,JavaScript, Netlify, CMS
---
# Vuepress

## Instalación

```sh
# instalación global
yarn global add vuepress # O npm install -g vuepress
```

## Inicia un proyecto

```sh
# Crea una carpeta para el proyecto
mkdir <nombre-carpeta> && cd <nombre-carpeta>

# Crea un archivo markdown
echo '# Hello VuePress' > README.md
```

**Estructura básica:**

```
.
├── docs
│   ├── .vuepress (Opcional)
│   │   ├── components (Opcional)
│   │   ├── theme (Opcional)
│   │   │   └── Layout.vue
│   │   ├── public (Opcional)
│   │   ├── styles (Opcional)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (Opcional, Avanzado zona problematica)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (Opcional)
│   │   └── enhanceApp.js (Opcional)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

Luego, agregue algunos scripts a package.json:

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

- - -