---
lang: es
title: Supresión de seguimiento
description: Ignora algunos archivos para que git no haga seguimiento de ellos.
# sidebar: auto
meta: 
  - name: description
    content: Ignora algunos archivos para que git no haga seguimiento de ellos.
  - name: keywords
    content: Git GitHub Control de versiones Supresión de seguimiento
---




# Supresión de seguimiento


## Ignorar archivos
Excluir archivos temporales y rutas
`.gitignore`
```
.log
build
temp-
```

## Listar 
Muestra todos los archivos ingnorados del proyecto
* Un archivo de texto llamado .gitignore suprime la versión accidental de archivos y rutas que coinciden con los paterns/rutas especificados

```
git ls-files --other --ignored --exclude-standard
```