---
lang: es
title: Redo commits
description: Borra errores del historial de reemplazo en git.
meta: 
  - name: description
    content: Borra errores del historial de reemplazo en git.
  - name: keywords
    content: Git GitHub Control de versiones Borrar Error Historial
---


# REDO Commits
### Borra errores del historial de reemplazo

## Deshacer confirmaciones
Deshace todas las confirmaciones despues [confirmación], conservando los cambios localmente
```sh
git reser <commit>
```
## Descartar historial
Descarta todo el historial y los cambios de nuevo a la confirmación especificada
```sh
git reser -hard <commit>
```