---
lang: es
title: Detectar cambios.
description: Detectar cambios en Firebase.
# sidebar: auto
meta:
    - name: description
      content: Detectar cambios en Firebase.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Detectar cambios
---

# Detectar cambios

Metodos que se utilizan para detectar cambios segun acciones en la
DB y actualizan la vista.

```js
referenciaDB.on('child_added', (data) => {});

referenciaDB.on('child_changed', (data) => {});

referenciaDB.on('child_removed', (data) => {});
```
