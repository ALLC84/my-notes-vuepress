---
lang: es
title: Tracks flexibles
description: Tracks flexibles de CSS GRID
# sidebar: auto
meta:
    - name: description
      content: Tracks flexibles de CSS GRID
    - name: keywords
      content: css, grid, layout, Tracks flexibles
---

# Tracks flexibles y áreas

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
