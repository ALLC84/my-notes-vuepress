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

**Te muestro como he hecho esta web de notas.**

## Instalación

```sh
# instalación global
yarn global add vuepress # O npm install -g vuepress
```

## Inicia un proyecto

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

## Estructura del proyecto:

```
.
├── docs
│   ├── .vuepress
│   │   ├── components
│   │   ├── public
│   │   │   └── images
│   │   └── config.js
│   │
│   ├── notas
│   │   ├── git.md
│   │   ├── vuepress.md
│   │   ├── javascript.md
│   │   └── etc
│   │
│   └── README.md
│
└── package.json
```

[Puede ver mas detalle de la estructura de un proyecto Vuepress](https://vuepress.vuejs.org/guide/directory-structure.html)

## Configuración

### Modificamos config.js

El archivo `docs/.vuepress/config.js` sera el encargado de tener la configuracion de nuestra
`nav` entre otras cosas.

```js
module.exports = {
  title: "Mis notas",
  description: "Una guia con mis notas sobre programación web!",

  themeConfig: {
    logo: "/images/hero.png",

    nav: [
      {
        text: "Notas",
        ariaLabel: "Menu de notas",
        items: [
          {
            text: "git",
            link: "/notas/git",
          },
          {
            text: "JavaScript",
            link: "/notas/javascript",
          },
          {
            text: "Vuepress",
            link: "/notas/vuepress",
          },
        ],
      },
      { text: "About", link: "https://cv.alejandrollorente.com" },
    ],
  },
};
```

[Aquí podras ver la información completa sobre el archivo config.js de vuepress](https://vuepress.vuejs.org/config/)

### Modificamos README.md

El arvhivo `README.md` será el Home de nuestra página,
encargado de contener la información de las tarjetas

```md
---
lang: es
layout: HomeLayout
title: Mis Notas
description: Una guia con mis notas sobre programación web!

cards:
  - title: "Git "
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
      "Notas de programación, Vue, TypeScript, JavaScript, CSS, HTML, Git,
      Vuepress, Gatsby, React.  "

footer: Copyright © 2020 - Alejandro Llorente
---
```

## Crearemos unos componentes

### HomeLayout

Será el componente principal, encargado de renderizar la información del archivo `README.md`
`HomeLayout.vue`

```vue
/** * ------------------------------------- * TEMPLATE *
------------------------------------- */
<template>
  <div class="container">
    <header class="header">
      <h1>
        {{ $frontmatter.title }}
      </h1>
      <h3 class="header__description">
        {{ $frontmatter.description }}
      </h3>
    </header>

    <main class="main">
      <ListNotes :data="$frontmatter.cards" />
    </main>

    <footer class="footer">
      {{ $frontmatter.footer }}
    </footer>
  </div>
</template>

/** * ------------------------------------- * SCRIPT *
------------------------------------- */
<script>
export default {
  name: "HomeLayout",
};
</script>

/** * ------------------------------------- * STYLES *
------------------------------------- */
<style scoped>
.container {
  position: relative;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 1rem;
}
.header {
  text-align: center;
}
.header__description {
  color: #6a8bad;
}
.main {
  margin: 3rem 0;
  padding-bottom: 3rem;
  border-bottom: 0.03rem solid rgb(218, 218, 218);
}
.footer {
  text-align: center;
  padding: 0 1rem;
  color: #6a8bad;
  font-size: 0.9em;
}
</style>
```

### ListNotes

Recibe los datos por `props` del `HomeLayout.vue`, Será el contenedor encargado de definir el grid y la llamada a un componente card que crea cada tarjeta.
`ListNotes.vue`

```vue
/** * ------------------------------------- * TEMPLATE *
------------------------------------- */
<template>
  <div class="card__container">
    <article v-for="(item, index) in data" :key="index">
      <Card :data="item" />
    </article>
  </div>
</template>

/** * ------------------------------------- * SCRIPT *
------------------------------------- */
<script>
export default {
  name: "ListNotes",

  props: ["data"],
};
</script>

/** * ------------------------------------- * STYLES *
------------------------------------- */
<style scoped>
.card__container {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  width: 100%;
}
@media screen and (min-width: 576px) {
  .card__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }
}
@media screen and (min-width: 678px) {
  .card__container {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8rem;
  }
}
</style>
```

### Card

Es llamado por el componente `ListNotes.vue` en cada vuelta de su ciclo for, recibiendo en cada ciclo los datos necesarios para crear cada tarjeta.
`card.vue``

```vue
/** * ------------------------------------- * TEMPLATE *
------------------------------------- */
<template>
  <div class="card">
    <div class="card__image-container">
      <router-link :to="data.path">
        <img class="card__image" :src="data.image" :alt="data.title" />
      </router-link>
    </div>
    <div class="card__body">
      <router-link :to="data.path">
        <h3 class="card__body-title">
          {{ data.title }}
        </h3>
      </router-link>
      <p class="card__body-content">
        {{ data.description }}
      </p>
    </div>
    <footer class="card__footer">
      <Avatar />
      <router-link :to="data.path" class="card__footer-button">
        LEER
      </router-link>
    </footer>
  </div>
</template>

/** * ------------------------------------- * SCRIPT *
------------------------------------- */
<script>
export default {
  name: "Card",

  props: ["data"],
};
</script>

/** * ------------------------------------- * STYLES *
------------------------------------- */
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(174, 190, 205, 0.3);
}
.card__image-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.card__image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}
.card__body {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  flex-grow: 1;
}
.card__body-title {
  margin: 0;
  padding-top: 1rem;
  color: rgb(65, 64, 64);
  font-weight: 900;
}
.card__body-content {
  margin-top: 0.3rem;
}
.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 1rem;
  width: -webkit-fill-available;
  background: rgb(243, 243, 243);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.card__footer-button {
  background: rgb(243, 243, 243);
  color: #3eaf7c;
  border: none;
  outline: none;
  height: fit-content;
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  font-weight: 700;
}
</style>
```

### Avatar

`Avatar.vue`
Este componente es utilizado en el footer de cada Card.

```vue
/** * ------------------------------------- * TEMPLATE *
------------------------------------- */
<template>
  <div class="avatar">
    <img
      src="/images/imgAbout.jpg"
      alt="Imagen Alejandro Llorente"
      class="avatar__image"
    />
  </div>
</template>

/** * ------------------------------------- * SCRIPT *
------------------------------------- */
<script>
export default {
  name: "Avatar",
};
</script>

/** * ------------------------------------- * STYLES *
------------------------------------- */
<style scoped>
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  border: 0.1rem solid white;
  overflow: hidden;
}
.avatar__image {
  max-width: 100%;
}
</style>
```

## Notas

### Git

```md
---
lang: es
title: Git
description: Guia básica de Git y GitHub
sidebar: auto
meta:
  - name: description
    content: Guia básica de Git y GitHub
  - name: keywords
    content: Git, GitHub, Control de versiones
---

# Git

## Comandos básicos

ETC...
```

### JavaScript

```md
---
lang: es
title: JavaScript
description: El lenguaje de la web
sidebar: auto
meta:
  - name: description
    content: Notas sobre JavaScript
  - name: keywords
    content: JavaScript, Web, Frontend
---

# JavaScript

## El lenguaje mas extendido de internet

ETC...
```

### Vuepress

```md
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

**Te muestro como he hecho esta web de notas.**

## Instalación

ETC...
```

## Resultado final

### Home

![Captura pantalla Home](/images/captura-home.png "Captura de pantalla Home")

### Notas

![Captura pantalla Notas](/images/captura-notas.png "Captura de pantalla Notas")
