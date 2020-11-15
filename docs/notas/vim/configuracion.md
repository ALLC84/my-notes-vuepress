---
lang: es
title: Configuración
description: Configuración del editor de texto vim
# sidebar: auto
meta:
    - name: description
      content: Configuración del editor de texto vim.
    - name: keywords
      content: Vim, editor de texto, terminal, configuración.
---

# Configuración de vim

En este archivo podemos cambiar el comportamiento de vim.
`vim ~/.vimrc`

```txt
" Usa espacios en lugar de pestañas
set expandtab

" Use la línea numérica
set number

" Sea inteligente cuando use tabkey
set smarttab

" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4

" Habilitar complementos de tipo de archivo
filetype plugin on
filetype indent on

" Sangría automática
set ai

" Sangría inteligente
set si

" Wrap lines
set wrap

" Establecer como lectura automática cuando un archivo se cambia desde el exterior
set autoread

" Configure el retroceso para que actúe como debería actuar
set backspace=eol,start,indent

" Mostrar corchetes coincidentes cuando el indicador de texto esté sobre ellos
set showmatch

" Cuántas décimas de segundo parpadear al combinar paréntesis
set mat=2

" No hay sonido molesto en los errores.
set noerrorbells
set novisualbell
set t_vb=
set tm=500

" Habilitar resaltado de sintaxis
syntax enable

" Establezca utf8 como codificación estándar y en \ _US como idioma estándar
set encoding=utf8

" Use Unix como el tipo de archivo estándar
set ffs=unix,dos,mac

" Desactive la copia de seguridad, ya que la mayoría de las cosas están en SVN, git et.c de todos modos
set nobackup
set nowb
set noswapfile

" Regrese a la última posición de edición al abrir archivos (¡Quiere esto!)
autocmd BufReadPost *
\if line("'\"") > 0 && line("'\"") <= line("$") |
\ exe "normal! g`\"" |
\ endif

" Recordar información sobre buffers abiertos al cerrar
set viminfo^=%

filetype plugin indent on
syntax on
```
