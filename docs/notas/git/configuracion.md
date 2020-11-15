---
lang: es
title: Configuración inicial
description: Configuración inicial de git.
meta: 
  - name: description
    content: Configuración inicial de git.
  - name: keywords
    content: Git GitHub Control de versiones Configuracion
---


# Configuracion básica inicial

- Puedes hace una configuracion global o local
  - `--global` --> Configuracion para todos los proyectos de tu PC
  - `--local` --> Para un proyecto específico


- Como editor de texto puedes utilizar 
  - Vim
  - TextEdit 
  - etc...
  

```sh
git config --local user.name 'Alejandro Llorente'
git config --local user.email 'alejandro@alejandro.com'
```

Permite cambiar el editor de texto por defecto 
```sh
git config --local user.editor vim
```

Permite una coloración útil de la salida de la línea de comandos
```sh
git config --global color.ui auto
```

Mostramos la configuracion de nuestro archivo .config
```sh
git config --list 
```