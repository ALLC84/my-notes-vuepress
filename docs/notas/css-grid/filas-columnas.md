---
lang: es
title: Filas Columnas
description: Filas Columnas de CSS GRID
# sidebar: auto
meta:
    - name: description
      content: Filas Columnas de CSS GRID
    - name: keywords
      content: css, grid, layout, Filas, Columnas
---

# Filas y Columnas

::: warning NOTA
Podemos pasar las dimenciones en %, px, rem, em, fr => ( fraccion )
:::

## Columnas

```css
grid-template-columns: 50% 50%;
```

## Filas

```css
grid-template-rows: 33, 3% 33, 3% 33, 3%;
```

## Shorthands

`grid: row row / columns columns columns`

```css
grid: 50% 50% / 33, 3% 33, 3% 33, 3%;
```

## Tamaños auto

Columns y Rows tamaño auto
| COMANDO | ACCIÓN |
| -------------------------- | ----------------------------------------------------------------------- |
|`grid-auto-rows:` | px / mimax() / auto / etc... Define una altura por defecto a las rows |
|`grid-auto-columns:` | px / mimax() / auto / etc ==> Define un ancho por defecto a las columns |
|`grid-auto-flow:` | Controla como se colocan los elementos en la cuadricula automaticamente:|

Valores por teclado: `row / columns / dense / row dense / column dense`

Vaores globales: `ìnherit / initial / unset`|

`dense` Intenta rellenar los huecos de la cuadricula con los elementos mas pequeños incluso cambiando el orden del html. Si se omite, se utiliza un algoritmo "disperso", donde el algoritmo de colocación solo se mueve "hacia adelante" en la cuadrícula al colocar elementos, nunca retroceder para rellenar los agujeros. Esto garantiza que todos los elementos colocados automáticamente aparezcan "en orden", incluso si esto deja agujeros que podrían haber sido rellenados por elementos posteriores.
