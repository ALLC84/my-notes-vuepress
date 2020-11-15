---
lang: es
title: Alias
description: Como creas alias en Zsh.
# sidebar: auto
meta:
    - name: description
      content: Como creas alias en Zsh.
    - name: keywords
      content: Zsh Ohmyszh alias
---

## Alias

Podemos crear algunos alias para facilitarno el acceso a rutas y tareas que hacemos avitualmente

-   Abrimos el archivo de configuración de zsh

`open ~/.zshrc`

```
alias sudo="sudo "
alias .h="cd '$HOME'"
alias ..="cd .."
alias ...="cd ../.."
alias ll="exa -l"
alias la="exa -la"
alias cdl="cd '$HOME/Local/lab'"
alias ssl="cd '/Volumes/SSD Mojave/code'"

alias gitconfig="code ~/.gitconfig"
alias zshconfig="code ~/.zshrc"
alias ohconfig="code ~/.p10k.zsh"

alias allconfig="gitconfig && zshconfig && ohconfig"
alias updateconfig="source ~/.zshrc"
```

Para que funcionen los cambios ejecutamos

`source ~/.zshrc`

A partir de ahora podemos utilizar nuestros alias

**Por ejemplo:**

Para abrir el archivo de configuración nuevamente, en este caso nos abrirá el archivo en Visual Studio Code.

`zshconfig`

Para refrescar los cambios

`updateconfig`

::: warning NOTA
En caso que no reconozca el comendo `code`, debemos activar esta configuración en VSC

Precionamos `comand + p` y escribimos

`> Shell command 'code' successfully installed in PATH.`
:::

Para que la terminal muestre las los iconos correctamente en Visual Studio Code debemos cambiar la fuente del editor.
