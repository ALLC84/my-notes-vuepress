---
lang: es
title: Detener y restaurar
description: Como detener y restaurar cambios en git.
# sidebar: auto
meta: 
  - name: description
    content: Como detener y restaurar cambios en git.
  - name: keywords
    content: Git GitHub Control de versiones Detener Restaurar
---



## Guardar fragmentos

### Detener y restaurar cambios incompletos.

- Almacena temporalmente todos los archivos de seguimiento modificados
```sh
git stash
```

- Enumera todos los conjuntos de cambios ocultos
```sh
git stash list
```

- Restaura los archivos cambiados más recientes
```sh
git stash pop
```

- Descarta el último conjunto de cambios creado
```sh
git stash drop
```