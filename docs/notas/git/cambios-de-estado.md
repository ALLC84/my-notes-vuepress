---
lang: es
title: Cambios de estado
description: Hacer cambios en los diferentes estados que puede tener un archivo con seguimiento de git.
# sidebar: auto
meta: 
  - name: description
    content: Hacer cambios en los diferentes estados que puede tener un archivo con seguimiento de git.
  - name: keywords
    content: Git GitHub Control de versiones Cambios estado
---

# Cambios de estado

* ### Revisar ediciones y hacer una transacción de compromiso.

## Enumera todos los cambios
Enumera todos los archivos nuevos o modificados para ser comprometidos
```sh
git status
```
## Instantaneas
Instantáneas del archivo en preparación para la versión
```sh
git add <nombreArchivo>
```

Instantáneas de todos los archivo en preparación para la versión 
```sh 
git add  .
```

## Deshacer
Deshace el archivo, pero conserva su contenido.
```sh
git reset <nombreArchivo>
```

## Diferencias 
Muestra diferencias de archivos aún no en escena
```sh
git diff
```

Muestra las diferencias de archivos entre la puesta en escena y la última versión del archivo.
```sh
git dif --staged
```

## Commit
Registra instantáneas de archivos de forma permanente en el historial de versiones.
```sh
git commit -m "<descripción del mensaje>"
```

Vuelve al estado antes de hacer el commit
```sh
git checkout <nombreArchivo>
```

## Puch
Envia los cambios los commit realizados en local al repositorio remoto.
```sh
git push
```

## Pull
Actualiza en local cambios que pueda tener en el repositorio creados por otros.
```sh
git pull <nombreRama>
```


