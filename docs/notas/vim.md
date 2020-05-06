---
lang: es
title: Vim
description: Editor de texto para terminal
sidebar: auto
meta:
   - name: description
     content: Guia básica de Vim, un editor de texto para terminal.
   - name: keywords
     content: Vim, editor de texto, terminal.
---

# Vim

Una guía básica de vim, un editor de texto para terminal.

## Vim Config

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

## Juego Vim

Juego en linea para practicar comandos de vim

[VIM Adventures](https://vim-adventures.com/)

## Básicos

| COMANDO                    | ACCIÓN                           |
| -------------------------- | -------------------------------- |
| `vim`                      | Entrar                           |
| `edit path/nombre-archivo` | Editar archivo ya estando dentro |
| `vim path/nombre-archivo`  | Abrir archivo                    |
| `:help`                    | Ayuda                            |
| `:q`                       | Salir                            |
| `:q!`                      | Salir sin guardar                |
| `:w`                       | Guardar                          |
| `:wq`                      | Guardar y salir                  |

## Navegacioón

### Navegar documento

| COMANDO | ACCIÓN                               |
| ------- | ------------------------------------ |
| `g`     | Se mueve al inicio del documento     |
| `G`     | Se mueve al final del documento      |
| `35 G`  | Se mueve a la linea 35 del documento |

### Mover entre lineas

```text
	   k
	l      h
	   j
```

| COMANDO       | ACCIÓN                                   |
| ------------- | ---------------------------------------- |
| `0`           | Mueve al principio de una linea          |
| `$`           | Mueve al final de una linea              |
| `10 j` `15 k` | Mover una cantidad de lineas determinada |

### Mover entre palabras

| COMANDO | ACCIÓN                                                         |
| ------- | -------------------------------------------------------------- |
| `e`     | Final de la palabra actual                                     |
| `w`     | Siguiente palabra                                              |
| `b`     | Palabra anterior                                               |
| `5 e`   | Mover una cantidad de palabras determinadas                    |
| `*`     | Se mueve a la siguiente palabra igual que donde esta el cursor |
| `%`     | Se mueve entre apertura y cierre de `( )`                      |

### Buscar

| COMANDO     | ACCIÓN                                      |
| ----------- | ------------------------------------------- |
| `f + letra` | Busca la sigueinte letra segun esta ubicado |

### Editar

| COMANDO | ACCIÓN                                     |
| ------- | ------------------------------------------ |
| `ì`     | Insertar                                   |
| `esc`   | Salir de edición                           |
| `u`     | Des hacer cambios                          |
|                                                      |
|`o`      | Nueva linea                                |
|`O`      | Nueva linea antes                          |
|                                                      |
|`x`      | Borrar caracter sin entrar a editar        |
|`X`      | Borrar caracter anterior                   |
|`r`      | Modificar un caracter por otro             |
|                                                      |
|`dw`     | Borrar una palabra ( vale como cortar )    |
|`dd`     | Borrar toda la linea ( vale como cortar )  |
|                                                      |
|`yy`     | Copiar una linea                           |
|`5 yy`   | Copia 5 lineas en este caso                |
|                                                      |
|`p`      | Pegar                                      |
|                                                      |
|`.`      | Repetir comando anterior                   |

### Modo Visual

Activa modo visual
`v`

Selecciona lineas

```
	   k
	l      h
	   j
```

Selecciona palabras
`e`

## Buscar

| COMANDO    | ACCIÓN                 |
| ---------- | ---------------------- |
| `/palabra` | Busca palabra          |
| `n`        | Siguiente coincidencia |
| `N`        | Anterior coincidencia  |

## Reemplazar

Reemplaza una palabra por otra.

`:%/palabra/nueva-palabra`
