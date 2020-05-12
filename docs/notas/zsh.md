---
lang: es
title: Zsh
description: Como instalar y configurar Zsh
sidebar: auto
meta:
    - name: description
      content: Como instalar y configurar Zsh
    - name: keywords
      content: Zsh Ohmyszh plugin
---

# Zsh

Resaltado de sintaxis y funcionalidad extra para nuestra terminal.

::: tip NOTA
Esta configuración es para ordenadores MacOS!
:::

## oh-my-zsh

Podemos darle estilos personalizados a nuestra terminal configurando manualmente. Pero podemos ahorarnos mucho tiempo y dolores de cabeza utilizando un framework.

::: warning IMPORTANTE
Debemos hacer una copia de lo que tenemos hasta ahora en nuestro archivo de configuración `.zshrc` porque la instalacion puede borrar o modificar por completo este archivo. `open ~/.zshrc`
:::

```sh
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Veremos muchas lineas nuevas de configuración en nuestro archivo `.zshrc`

Ya podremos ver cambios nuestra terminal, ya que nos activa unos estilos por defecto. 

::: tip NOTA
Seguramente tendremos que volver a copiar los datos que teniamos anteriormente.
:::


## Theme
Veremos como podemos instalar un nuevo `theme` y utilizarlo sobre este Framework.
El theme que utilizo y me gusta mucho es `powerlevel10k`

### Instalación
```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

### Activación
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



## Plugins
Podemos usar plugins para extender la funcionalidades de zsh. Algunos ya vienen por defecto con la instalacions  de  `ho-my-zsh`

Podemos encontrar los plugin que vienen por defecto en la carpeta `.oh-my-zsh` hubicada en la carpeta raiz de nuestro usuario, en una sub carpeta llamada `plugins`

Tambien podremos encontrar alli una carpeta `custom` donde estaran los plugin o temas descargados por nuestra cuanta.

`chif + command + .` Para mostrar archivos ocultos

Hay que tener en cuanta que cargar plugins de innecesarios pueder relentizar nuestra terminal.

En mi caso estos son los plugin que utilizo.

### Resaltado de sintaxis
```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting
```

### Sugerencias de comandos
```sh
 git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

### Configuración
```
plugins=(
  git 
  z
  zsh-syntax-highlighting
  zsh-autosuggestions
)
```


## Extenciones 

Una de mis extenciones favoritas que te ahorraran tiempo y mejorara tu productividad.

### [fzf](https://github.com/junegunn/fzf) En su pagina de GitHub podras ver como se utiliza.

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

## Resultado final
![Custom terminal](/images/custom-terminal.png "Custom terminal")