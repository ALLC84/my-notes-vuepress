---
lang: es
title: Extenciones
description: Como instalar y configurar extenciones en Zsh.
# sidebar: auto
meta:
    - name: description
      content: Como instalar y configurar extenciones en Zsh.
    - name: keywords
      content: Zsh Ohmyszh extenciones
---

# Extenciones

Una de mis extenciones favoritas que te ahorraran tiempo y mejorara tu productividad.

### En su pagina de GitHub podras ver como se utiliza. [fzf](https://github.com/junegunn/fzf) 

```sh
brew  install fzf
```

Aqui unas congifuraciones que te ayudaran a sacarle más partido a esta extencion.
Sacada del curso gratuito de Terminal 100% productiva con zsh [CodelyTV](https://codely.tv/)

`open ~/.zshrc`

```hs
# Busca en un directorio y mueve a la selección
# ---------------------------------------------

_display_message() {
  dirtomove=$(ls | fzf)
  cd "$dirtomove"
}
zle     -N _display_message
bindkey '^h' _display_message


# Buscar comandos del historial que podras seleccionar y ejecutar
# --------------------------------------------

_reverse_search() {
  local selected_command=$(fc -rl 1 | awk '{$1="";print substr($0,2)}' | fzf)
  LBUFFER=$selected_command
}
zle -N _reverse_search
bindkey '^f' _reverse_search
```
