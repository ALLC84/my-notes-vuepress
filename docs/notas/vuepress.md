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

```javascript
# instalación global
yarn global add vuepress # O npm install -g vuepress
```

## Inicia un proyecto
```
# Crea una carpeta para el proyecto
mkdir <nombre-carpeta> && cd <nombre-carpeta>

# Crea un archivo markdown
echo '# Hello VuePress' > README.md

# Iniciamos el proyecto en un servidor local 
vuepress dev

# Construcción del proyecto para producción
vuepress build
```

**Estructura básica:**
```
docs
  |
  |.vuepress
  |   | 
  |    components
  |    public
  |      |
  |       images
  |    config
  |
   README.md

node_modules
.gitignore
package.json
```
