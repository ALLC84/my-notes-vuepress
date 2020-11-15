---
lang: es
title: Grid area
description: Grid area de CSS GRID
# sidebar: auto
meta:
    - name: description
      content: Grid area de CSS GRID
    - name: keywords
      content: css, grid, layout, Grid area
---

# Grid area

#### Grid template areas con nombres

Veamos un ejemplo de uso para las grid areas.

## HTML

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

## CSS

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
