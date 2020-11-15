---
lang: es
title: Historial de cambios
description: Revisa el historial de cambios en git.
meta: 
  - name: description
    content: Revisa el historial de cambios en git.
  - name: keywords
    content: Git GitHub Control de versiones Historial Cambios
---


# Revisa el historial

### Navegar e inspeccionar la evolución de los archivos del proyecto.

## Lista historial
Lista el historial de versiones para la rama actual
```sh
git log
```
## Detalles de los commits
Muestra detalles de los cambios de los commits( proporciona mas info ) \
Se puede limitar el numero de commits a mostrar.
```sh
git log -p
git log -p -2
```
## Estadisticas de cambios
Muestra una estadistica de todos los archivos y que paso en cada uno de ellos
```sh
git log --stat
```
Enumera el historial de versiones de un archivo, incluidos los nombres
```sh
git log --follow <nombreArchivo>
```
## Diferencias entre ramas
Muestra diferencias de contenido entre dos ramas.
```sh
git diff <primeraRama> <segundaRama>
```

## Salida de metadatos
Salida de metadatos y cambios de contenido de la confirmación especificada.
```sh
git show <commit>
```