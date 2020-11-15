---
lang: es
title: Plugin
description: Como instalar y configurar plugin en Zsh.
# sidebar: auto
meta:
    - name: description
      content: Como instalar y configurar plugin en Zsh.
    - name: keywords
      content: Zsh Ohmyszh plugin
---

# Plugins

Podemos usar plugins para extender la funcionalidades de zsh. Algunos ya vienen por defecto con la instalacions de `ho-my-zsh`

Podemos encontrar los plugin que vienen por defecto en la carpeta `.oh-my-zsh` hubicada en la carpeta raiz de nuestro usuario, en una sub carpeta llamada `plugins`

Tambien podremos encontrar alli una carpeta `custom` donde estaran los plugin o temas descargados por nuestra cuanta.

`chif + command + .` Para mostrar archivos ocultos

Hay que tener en cuanta que cargar plugins de innecesarios pueder relentizar nuestra terminal.

En mi caso estos son los plugin que utilizo.

## Resaltado de sintaxis

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
```

## Sugerencias de comandos

```sh
 git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

## Configuración

```
plugins=(
  git
  z
  zsh-syntax-highlighting
  zsh-autosuggestions
)
```
