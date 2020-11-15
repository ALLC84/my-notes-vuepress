---
lang: es
title: tsconfig.json
description: tsconfig en Typescript.
# sidebar: auto
meta:
    - name: description
      content: tsconfig en Typescript.
    - name: keywords
      content: tsconfig Typescript
---

# Que es tsconfig.json

Configuracion para la compilacion de typescript

## Incluir archivos y carpetas

```json
"include": [
   "app/**/*"
],
```

## Ingnorar archivos y carpetas

```json
"exclude": [
   "node_modules",
   "src/",
   "etc",
   "build"
]
```

## Generar archivo de salida unico

```json
"outFile": "build/main.js"
```
