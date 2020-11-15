---
lang: es
title: Terminología
description: Terminología de CSS GRID
# sidebar: auto
meta:
    - name: description
      content: Terminología de CSS GRID
    - name: keywords
      content: css, grid, layout, Terminología
---

# Terminología y elementos

Elementos del DOM
`grid-container`

```css
display: grid;
```

```css
display: inline-grid;
```

## grid-items

-   hijos directos
-   pseudoelementos ::before y ::after
-   texto

::: warning NOTA
Las siguientes definiciones no existen en el DOM, el navegador los crea para posicionar y alinear elementos
:::

## grid-tracks

-   Las filas y columnas

## grid-lines

-   Se encuentran a los lados de los tracks, izquierda y derecha para columnas, arriba y abajo para filas

## grid-cells

-   La intersección entre una fila y una columna

## grid-areas

-   Cualquiera area rectángular delimitada por cuatro grid-lines
