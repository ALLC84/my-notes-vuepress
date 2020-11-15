---
lang: es
title: Ramas
description: Ramas de git.
# sidebar: auto
meta:
    - name: description
      content: Ramas de git.
    - name: keywords
      content: Git GitHub Control de versiones Cambios estado Ramas
---

# Ramas

Las ramas son utilizada para crear una copia local de el proyecto en el punto donde se encuentra. Así realizar cambios, crear nuevas funcionalidades, etc..., si temor a romper el codigo creado hasta el momento. Al finalizar el nuevo código podemos merge (juntarla) a la master y implementar los cambios.
![Ramas en Git](/images/gitflow.png 'Ramas en git')

## Enumera ramas

Todas las ramas locales en el repositorio actual

```sh
git branch
```

Muestra de forma gráfica el formato de las ramas

```sh
git log --graph --decorate --qall --oneline
```

## Crear rama

Crea una nueva rama.

```sh
git branch <nombreRama>
```

## Cambiar de rama

Cambia a la rama especificada y actualiza el directorio de trabajo.

```sh
git checkout <nombreRama>
```

Atajo ( Crea una rama y nos movemos a ella a la vez)

```sh
git checkout -b <nombreRama>
```

## Merge

Combina el historial de la rama especificada en la rama actual
_Hay que estar hubicado en la rama a la cual se quire traer el cadigo a fusionar_

```sh
git merge <nombreRama>
```

## Borrar ramas

Borra la rama especificada

```sh
git branch -D <nombreRama>
```

## Flujo

### Un ejemplo del flujo para trabajar con ramas

1 - Creamos una nueva rama

`git branch <nombre-rama>`

2 - Nos movemos a la nueva rama

`git checkout <nombre-nueva-rama>`

3 - Una vez creado los cambios y estemos conforme con ellos

`git add -A`
`git commit -m "Hemos hecho cambios en el archivo ..."`

4 - Nos movemos a la rama master

`git checkout master`

5 - Juntamos los nuevos cambion a master

`git merge <nombre-rama-creada-anteriormente>`
