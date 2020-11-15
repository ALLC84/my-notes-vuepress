---
lang: es
title: Sincronizar cambios
description: Registrar un marcador de repositorio e intercambiar historial de versiones
meta: 
  - name: description
    content: Registrar un marcador de repositorio e intercambiar historial de versiones
  - name: keywords
    content: Git GitHub Control de versiones Sincronizar Cambios
---


# Sincronizar cambios

### Registrar un marcador de repositorio e intercambiar historial de versiones

![Sincronizar cambios en git](/images/gitflowremote.png  "Sincronizar cambios en git")

## Origen del proyecto 
Muestr al origen desde donde se esta trallendo el proyecto clonado.
```sh
git remote --v
```
## Descargar la historia
Descarga toda la historia desde el marcador del repositorio.( Por si ha sido modificado por otros desarrolladores que esten trabajando en el mismo proyecto )
```sh
git fetch <marcador>
```
## Combina ramas local
Combina la sucursal del marcador en la sucursal local actual
```sh
git merge <marcador> / <rama>
git merge nombre rama
```
## Subir archivo al repositoiro
Sube todas las sucursales locales comprometidas a GitHub.
```sh
git push <alias> <rama>
git push origin master
```
## Descargar cambios del repositorio
Descarga el historial de marcadores e incorpora cambios.
```sh
git pull origin master
```