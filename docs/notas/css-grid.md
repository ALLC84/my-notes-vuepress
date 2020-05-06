---
lang: es
title: CSS-GRID
description: Guia básica de CSS GRID
sidebar: auto
meta:
   - name: description
     content: Guia básica de CSS GRID
   - name: keywords
     content: css, grid, layout
---

# CSS - GRID

## Conceptos

### Layout

-  Geometria que calcula el navegador para saber donde colocar cada elemento y que tanto separarlo de los demás.

### CSS Grid

-  Permite construir layouts a través de dos ejes (horizontal y vertical | inline y block)
-  No importa la posición de un elemento en el código HTML para construir el layout.
-  Al igual que flexbox requiere una relación de padre (grid-container) a hijos (grid-items)

## Terminología y elementos

Elementos del DOM
`grid-container`

```css
display: grid;
```

```css
display: inline-grid;
```

### grid-items

-  hijos directos
-  pseudoelementos ::before y ::after
-  texto

::: warning NOTA
Las siguientes definiciones no existen en el DOM, el navegador los crea para posicionar y alinear elementos
:::

### grid-tracks

-  Las filas y columnas

### grid-lines

-  Se encuentran a los lados de los tracks, izquierda y derecha para columnas, arriba y abajo para filas

### grid-cells

-  La intersección entre una fila y una columna

### grid-areas

-  Cualquiera area rectángular delimitada por cuatro grid-lines

## Filas y Columnas

::: warning NOTA
Podemos pasar las dimenciones en %, px, rem, em, fr => ( fraccion )
:::

### Columnas

```css
grid-template-columns: 50% 50%;
```

### Filas

```css
grid-template-rows: 33, 3% 33, 3% 33, 3%;
```

### Shorthands

`grid: row row / columns columns columns`

```css
grid: 50% 50% / 33, 3% 33, 3% 33, 3%;
```

### Tamaños auto

Columns y Rows tamaño auto
| COMANDO | ACCIÓN |
| -------------------------- | ----------------------------------------------------------------------- |
|`grid-auto-rows:` | px / mimax() / auto / etc... Define una altura por defecto a las rows |
|`grid-auto-columns:` | px / mimax() / auto / etc ==> Define un ancho por defecto a las columns |
|`grid-auto-flow:` | Controla como se colocan los elementos en la cuadricula automaticamente:|

Valores por teclado: `row / columns / dense / row dense / column dense`

Vaores globales: `ìnherit / initial / unset`|

`dense` Intenta rellenar los huecos de la cuadricula con los elementos mas pequeños incluso cambiando el orden del html. Si se omite, se utiliza un algoritmo "disperso", donde el algoritmo de colocación solo se mueve "hacia adelante" en la cuadrícula al colocar elementos, nunca retroceder para rellenar los agujeros. Esto garantiza que todos los elementos colocados automáticamente aparezcan "en orden", incluso si esto deja agujeros que podrían haber sido rellenados por elementos posteriores.

## Definir tracks

### Tipos de grid

-  Grid implicito
-  Grid explicito

### Tipos de tracks

-  Fijos
-  Flexibles

### grid-gap

-  Espaciado interno dentre los items

```css
grid-rows-gap: 1rem;
grid-columns-gap: 1rem;
```

### Shorthands

Define espaciado en ambos.

```css
grid-gap: 1rem;
```

## Colocar grid-items

```css
grid-column-start
grid-column-end
grid-column
grid-row-start
grid-row-end
```

Shorthands

`grid-row: grid-column-start / grid-column-end`

`grid-column: grid-column-start / grid-column-end`

```css
grid-row: 1 / 3
grid-column: 1 / 4
```

Shorthands, ahun resume mas la disposicion de filas y columnas:

-  `grid-template-areas (container)`
-  `grid-area (items)`
-  `grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end`

```css
grid-area: 1 / 1 / 3 / 4;
```

## Grid area

#### Grid template areas con nombres

Veamos un ejemplo de uso para las grid areas.

#### HTML

```html
<body>
	<div class="container">
	   <header class="header"></header>

		<main class="main"></main>

		<aside class="aside"></aside>
      
		<footer class="footer"></footer>
	</div>
</body>
```

#### CSS

Si queremos dejar un espacio en blanco utilizamos un punto `(.)`

```css
.container {
   height: 100vh;
   max-width: 1200px;
   margin: 0 auto;
   display: grid;
   grid-gap: 1rem;
   /* ========================= rows / columns */
   grid: 100px auto 100px / repeat(4, 15%)
   grid-template-areas:
      "header header header header"
      "main main main aside"
      "footer footer footer footer"
}

.header {
   grid-area: header;
}

.main {
   grid-area: main;
}

.aside {
   grid-area: aside;
}

.footer {
   grid-area: foote"
}
```

## Funciones

`repeat`

```css
grid-template-rows: repeat(2, 50%)
grid-template-columns: 50% repeat(2, 25%)
```

Shorthands

`grid: rows / columns`

```css
grid: repeat(2, 50%) / 50% repeat(2, 25% 10%);
```

## Tracks flexibles y áreas

1. `fr` Una fraccion de espacio total

En este caso `1fr` equivale a dos `rows` del 50%

```css
grid-template-rows: repeat(2, 1fr);
```

2. Por el contenido

4) minmax(), auto-fit y auto-fill

`auto-fill`

Ajusta el contenido y salta de linea en caso de no entrar en pantalla evitando un scroll orizontal ( hay que definir un tamaño )

Tiene un problema ya que puede generar espacion en blanco

```css
gird-template-columns: repeat(auto-fill, 200px);
```

`min-max(tamaño-minimo , tamaño-maximo)`

Puede resolver los espacios en blanco de auto-fill y **( rellenarlos )**

```css
gird-template-columns: repeat(auto-fill, min-max(400px, 1fr));
```

`auto-fit`

**No crea espacio de mas** sino que los rellena con los items

```css
gird-template-columns: repeat(auto-fit, min-max(400px, 1fr));
```

## Grid alineación

Las propiedades `align-self` y `align-items` controlan la alineación en el eje de bloque ( columns ).

Alineación de `grid-items` y alineación de `grid-tracks`

**`align-items:`**
**`align-self:`**
**`justify-items:`**
**`justify-self:`**

`auto / normal / start / center / end / stretch / baseline / first baseline / last baseline`

Las propiedades `justify-content` y `justify-items` controlan la alineación en el eje de ( rows )

**`aling-content`**
**`align-items:`**
**`justify-content:`**
**`justify-items:`**

`normal / start / center / end / stretch / baseline / first baseline / last baseline / space-around / space-between / space-evenly`
