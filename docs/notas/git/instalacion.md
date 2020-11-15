---
lang: es
title: Instalación e inicio
description: Instalación de github, MacOS y Windows.
meta: 
  - name: description
    content: Instalación de github, MacOS y Windows.
  - name: keywords
    content: Git GitHub Control de versiones Instalación
---

# Instalación e Inicio 

## Mac
[Instalar en MacOS](https://git-scm.com/download/mac)

```sh
brew install git
```

Puedes descargar una interfaz gráfica 
[GitHub Desktop](https://desktop.github.com/)


## Windows
[Instalar en windows](https://git-scm.com/download/win)


## Iniciar un repositorio
```sh
git init <nombreProyecto>
```

## Clonar un repositorio existente 
(No necesita iniciarlo)
  - Tenemos ventajas al clonar un repositorio con respecto a descargar el .zip desde github.
  - Al clonarlo nos viene con el archivo `.config` donde estaran registrados todos los commits que se han hecho en el proyecto y se puede ver como ha evolucionado en el tiempo.

```sh
git clone <URL del repositorio>
```

## Flujo Git
![Areas en Git](/images/gitareas.jpg "Areas en Git")