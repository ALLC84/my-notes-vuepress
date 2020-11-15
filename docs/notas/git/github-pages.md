---
lang: es
title: GitHub Pages
description: Subir una página a GitHub pages.
meta: 
  - name: description
    content: Subir una página a GitHub pages.
  - name: keywords
    content: Git GitHub Control de versiones pages
---


# GitHub Pages
### Subir pagina a GitHub

## Configuración

1 - ``git init`` \
2 - ``git add .`` \
3 - ``git commit -m -initial commit- `` \
4 - ``git remote add origin http... `` \
5 - ``git push origin master `` 

## Automatizar subida

1 - Instalar **gh-pages** \
`yarn add gh-pages` ó `npm install gh-pages`\
2 - En la configuracion antes de las dependencias creamos
```json
{
  "homepage": "https://<nombre-usuario>.github.io/<nombre-repositorio>/"
}
```
3- Crear unos script para construccion y  hacer el deploy
```json
{
  "predeploy": "yarn build", 
  "deploy": "gh-pages -d build"
}
```

4- Ejecutamos el comando ``yarn deploy``
**Ejemplo del package.json:**
```json
{
  "name": "nombre",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://<nombre-usuario>.github.io/<nombre-repositorio>/",
  "dependencies": {
    "gh-pages": "^2.0.1",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5",
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    "eject": "react-scripts eject"
  },
}
```