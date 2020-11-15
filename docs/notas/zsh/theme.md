---
lang: es
title: Theme
description: Instalación y configuración del theme en zsh.
# sidebar: auto
meta:
    - name: description
      content: Instalación y configuración del theme en zsh.
    - name: keywords
      content: Zsh Ohmyszh plugin theme
---

# Theme

Veremos como podemos instalar un nuevo `theme` y utilizarlo sobre este Framework.
El theme que utilizo y me gusta mucho es `powerlevel10k`

## Instalación

```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

## Activación

Modificamos el archivo `.zshrc`

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Ejecutamos `source ~/.zshrc` para refrescar los cambios.

Ahora tendremos en nuestro Home un nuevo archivo `.p10k.zsh`

Podemos ejecutar `open ~/.p10k.zsh` para abrir este archvio.

Necesitaremos instalar una fuente para reprecentar bien los simbolos que trae el thema.
[MesloLGS NF](https://github.com/romkatv/powerlevel10k#fonts)

EL siguiente paso es cambiar la fuente en las configuraciones de nuestra terminal.

En mi caso he hecho unas pequeñas modificaciones para el PROMPT, quedando así.

```
# The list of segments shown on the left. Fill it with the most important segments.
typeset -g POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
# =========================[ Line #1 ]=========================
os_icon                 # os identifier
dir                     # current directory
vcs                     # git status
# =========================[ Line #2 ]=========================
newline                 # \n
prompt_char             # prompt symbol
)


# Defines character set used by powerlevel10k. It's best to let `p10k configure` set it for you.
typeset -g POWERLEVEL9K_MODE=nerdfont-complete
```

Tambien podemos cambiar el theme de colores en nuestras preferencias de terminal.
En este caso Solarized Dart.
