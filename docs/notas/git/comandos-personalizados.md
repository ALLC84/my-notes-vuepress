---
lang: es
title: Comandos personalizados
description: Crear comandos personalizados en Git.
meta: 
  - name: description
    content: Crear comandos personalizados en Git.
  - name: keywords
    content: Git GitHub Control de versiones Comandos Personalizados
---

# Comandos presonalizados

### Podemos combinar los comandos anteriores o crear comandos personalizados

**Ejemplos:**
```sh
git log --stat -p
git log --stat -1
git log --stat -p -2
git log --graph --decorate
```

**Otros Ejemplos: Personalizados**
```sh
git log --pretty
git log --pritty = format:"%h-%an,%ar:%I"
```

Con la informacion mostrada podemos obtener el codigo del commit ( hasch ) y utilizarlo para volver al estado en que se encontraba el ( proyecto/archivo ) en ese momento.
```sh
git checkout <hasch>
```