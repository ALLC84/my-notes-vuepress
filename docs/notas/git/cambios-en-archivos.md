---
lang: es
title: Cambios en archivos
description: Cambios en los archivos Git
# sidebar: auto
meta: 
  - name: description
    content: Cambios en los archivos Git
  - name: keywords
    content: Git GitHub Control de versiones cambios en archivos 
---


# Cambios en archivos

### Reubicar y eliminar archivos versionados

## Mostrar
Muestra en formato arbol el directorio de carpetas en consola.
``` sh
trace
```

## Borrar
Borra el archivo del directorio de trabajo y organiza la eliminación
```sh
git rm <nombreArchivo>
```

Elimina el archivo del control de versiones pero conserva el archivo localmente
```sh
git rm --cached <nombreArchivo>
```

## Renombrar
Cambia el nombre del archivo y lo prepara para el commit.
```sh
git mv <nombreActual> <nuevoNombre>
```