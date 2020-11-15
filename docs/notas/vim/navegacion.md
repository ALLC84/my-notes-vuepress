---
lang: es
title: Navegación
description: Comandos para navegacion en el editor de texto vim
# sidebar: auto
meta:
    - name: description
      content: Comandos para navegacion en el editor de texto vim.
    - name: keywords
      content: Vim, editor de texto, terminal, navegación.
---

# Navegación en vim

## Navegar documento

| COMANDO | ACCIÓN                               |
| ------- | ------------------------------------ |
| `g`     | Se mueve al inicio del documento     |
| `G`     | Se mueve al final del documento      |
| `35 G`  | Se mueve a la linea 35 del documento |

## Mover entre lineas

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

## Mover entre palabras

| COMANDO | ACCIÓN                                                         |
| ------- | -------------------------------------------------------------- |
| `e`     | Final de la palabra actual                                     |
| `w`     | Siguiente palabra                                              |
| `b`     | Palabra anterior                                               |
| `5 e`   | Mover una cantidad de palabras determinadas                    |
| `*`     | Se mueve a la siguiente palabra igual que donde esta el cursor |
| `%`     | Se mueve entre apertura y cierre de `( )`                      |

## Buscar

| COMANDO     | ACCIÓN                                      |
| ----------- | ------------------------------------------- |
| `f + letra` | Busca la sigueinte letra segun esta ubicado |

## Editar

| COMANDO | ACCIÓN                                    |
| ------- | ----------------------------------------- |
| `ì`     | Insertar                                  |
| `esc`   | Salir de edición                          |
| `u`     | Des hacer cambios                         |
|         |
| `o`     | Nueva linea                               |
| `O`     | Nueva linea antes                         |
|         |
| `x`     | Borrar caracter sin entrar a editar       |
| `X`     | Borrar caracter anterior                  |
| `r`     | Modificar un caracter por otro            |
|         |
| `dw`    | Borrar una palabra ( vale como cortar )   |
| `dd`    | Borrar toda la linea ( vale como cortar ) |
|         |
| `yy`    | Copiar una linea                          |
| `5 yy`  | Copia 5 lineas en este caso               |
|         |
| `p`     | Pegar                                     |
|         |
| `.`     | Repetir comando anterior                  |

## Modo Visual

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
