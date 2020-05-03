---
lang: es
title: Git
description: Guia básica de Git y GitHub
sidebar: auto
meta: 
  - name: description
    content: Guia básica de Git y GitHub
  - name: keywords
    content: Git GitHub Control de versiones 
---

# Git - Control de versiones

## Instalación
### Mac
[Instalar en MacOS](https://git-scm.com/download/mac)

[GitHub Desktop](https://desktop.github.com/)
### Windows
[Instalar en windows](https://git-scm.com/download/win)

## Comandos básicos
### Iniciar un repositorio
```sh
git init <nombreProyecto>
```
### Clonar un repositorio existente 
(No necesita iniciarlo)
  - Tenemos ventajas al clonar un repositorio con respecto a descargar el .zip desde github.
  - Al clonarlo nos viene con el archivo `.config` donde estaran registrados todos los commits que se han hecho en el proyecto y se puede ver como ha evolucionado en el tiempo.
```sh
git clone <URL del repositorio>
```

## Configuracion básica inicial
- Puedes hace una configuracion global o local
  - `--global` --> Configuracion para todos los proyectos de tu PC
  - `--local` --> Para un proyecto específico
- Como editor de texto puedes utilizar 
  - Vim
  - TextEdit 
  - etc...
  

```sh
git config --local user.name 'Alejandro Llorente'
git config --local user.email 'alejandro@alejandro.com'
```

- Permite cambiar el editor de texto por defecto 
```sh
git config --local user.editor vim
```

- Permite una coloración útil de la salida de la línea de comandos
```sh
git config --global color.ui auto
```

- Mostramos la configuracion de nuestro archivo .config
```sh
git config --list 
```


## Flujo Git
![Areas en Git](/images/gitareas.jpg "Areas en Git")


## Hacer cambios
**Revisar ediciones y hacer una transacción de compromiso.**
### Enumera todos los cambios
Enumera todos los archivos nuevos o modificados para ser comprometidos
```sh
git status
```
### Instantaneas
Instantáneas del archivo en preparación para la versión
```sh
git add <nombreArchivo>
```

Instantáneas de todos los archivo en preparación para la versión 
```sh 
git add  .
```

### Deshacer
Deshace el archivo, pero conserva su contenido.
```sh
git reset <nombreArchivo>
```
### Diferencias 
Muestra diferencias de archivos aún no en escena
```sh
git diff
```

Muestra las diferencias de archivos entre la puesta en escena y la última versión del archivo.
```sh
git dif --staged
```

### Commit
Registra instantáneas de archivos de forma permanente en el historial de versiones.
```sh
git commit -m "<descripción del mensaje>"
```

Vuelve al estado antes de hacer el commit
```sh
git checkout <nombreArchivo>
```

### Pull
Actualiza el en local cambios que pueda tener en el repositorio creados por otros.
```sh
git pull <nombreRama>
```


## Ramas
Las ramas son utilizada para crear una copia local de el proyecto en el punto donde se encuentra. Así realizar cambios, crear nuevas funcionalidades, etc..., si temor a romper el codigo creado hasta el momento. Al finalizar el nuevo código podemos merge (juntarla) a la master y implementar los cambios.
![Ramas en Git](/images/gitflow.png "Ramas en git")

### Enumera todas ramas
Todas las ramas locales en el repositorio actual
```sh
git branch
```
### Crear ramas
Crea una nueva rama.
```sh
git branch <nombreRama>
```
### Cambiar de rama
Cambia a la rama especificada y actualiza el directorio de trabajo.
```sh
git checkout <nombreRama>
```

Atajo ( Crea una rama y nos movemos a ella a la vez)
```sh
git checkout -b <nombreRama>
```
### Merge
Combina el historial de la rama especificada en la rama actual
*Hay que estar hubicado en la rama a la cual se quire traer el cadigo a fusionar*
```sh
git merge <nombreRama>
```
### Borrar ramas
Borra la rama especificada
```sh
git branch -D <nombreRama>
```
### Mostrar ramas
**Muestra de forma gráfica el formato de las ramas**
```sh
git log --graph --decorate --qall --oneline
```

### Flujo del trabajo con ramas

1 - Creamos una nueva rama  n\
`git branch <nombre-rama>`
	
2 - Nos movemos a la nueva rama n\
`git checkout <nombre-nueva-rama>`
	
3 - Una vez creado los cambios y estemos conforme con ellos n\
`git add -A`
`git commit -m "Hemos hecho cambios en el archivo ..."`
	
4 - Nos movemos a la rama master n\
`git checkout master`

5 - Juntamos los nuevos cambion a master n\
`git merge <nombre-rama-creada-anteriormente>`


## Cambios en los Archivos
**Reubicar y eliminar archivos versionados**
### Mostrar
Muestra en formato arbol el directorio de carpetas en consola.
``` sh
trace
```
### Borrar
Borra el archivo del directorio de trabajo y organiza la eliminación
```sh
git rm <nombreArchivo>
```

Elimina el archivo del control de versiones pero conserva el archivo localmente
```sh
git rm --cached <nombreArchivo>
```
### Renombrar
Cambia el nombre del archivo y lo prepara para el commit.
```sh
git mv <nombreActual> <nuevoNombre>
```


## Supresión de seguimiento
**Excluir archivos temporales y rutas**
`.gitignore`
```
.log
build
temp-
```
- Listar  todos los archivos ingnorados del proyecto
  - Un archivo de texto llamado .gitignore suprime la versión accidental de archivos y rutas que coinciden con los paterns/rutas especificados
```
git ls-files --other --ignored --exclude-standard
```


## Guardar fragmentos
**Detener y restaurar cambios incompletos.**
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


## Revisa el historial
**Navegar e inspeccionar la evolución de los archivos del proyecto.**
### Lista historial
Lista el historial de versiones para la rama actual
```sh
git log
```
### Detalles de los commits
Muestra detalles de los cambios de los commits( proporciona mas info ) \
Se puede limitar el numero de commits a mostrar.
```sh
git log -p
git log -p -2
```
### Estadisticas de cambios
Muestra una estadistica de todos los archivos y que paso en cada uno de ellos
```sh
git log --stat
```
Enumera el historial de versiones de un archivo, incluidos los nombres
```sh
git log --follow <nombreArchivo>
```
### Diferencias entre ramas
Muestra diferencias de contenido entre dos ramas.
```sh
git diff <primeraRama> <segundaRama>
```

### Salida de metadatos
Salida de metadatos y cambios de contenido de la confirmación especificada.
```sh
git show <commit>
```

## Comandos presonalizados
**Podemos combinar los comandos anteriores o crear comandos personalizados**
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

- Con la informacion mostrada podemos obtener el codigo del commit ( hasch ) y utilizarlo para volver al estado en que se encontraba el ( proyecto/archivo ) en ese momento.
```sh
git checkout <hasch>
```


## REDO Commits
**Borra errores del historial de reemplazo**
### Deshacer confirmaciones
Deshace todas las confirmaciones despues [confirmación], conservando los cambios localmente
```sh
git reser <commit>
```
### Descartar historial
Descarta todo el historial y los cambios de nuevo a la confirmación especificada
```sh
git reser -hard <commit>
```


## Sincronizar cambios
**Registrar un marcador de repositorio e intercambiar historial de versiones**
![Sincronizar cambios en git](/images/gitflowremote.png  "Sincronizar cambios en git")
### Origen del proyecto 
Muestr al origen desde donde se esta trallendo el proyecto clonado.
```sh
git remote --v
```
### Descargar la historia
Descarga toda la historia desde el marcador del repositorio.( Por si ha sido modificado por otros desarrolladores que esten trabajando en el mismo proyecto )
```sh
git fetch <marcador>
```
### Combina ramas local
Combina la sucursal del marcador en la sucursal local actual
```sh
git merge <marcador> / <rama>
git merge nombre rama
```
### Subir archivo al repositoiro
Sube todas las sucursales locales comprometidas a GitHub.
```sh
git push <alias> <rama>
git push origin master
```
### Descargar cambios del repositorio
Descarga el historial de marcadores e incorpora cambios.
```sh
git pull origin master
```

## Integrar un proyecto de GitHub
**Integrando repositorios local con repositorio Git (facil)**
### Vincular
```sh
git remote add origin https://github.com/...
```
### Mostrar vinculos
Ver vinculacion del proyecyo
```sh
git remote -v
```
### Elimina vinculos
Eliminar vinculacion
```sh
git remote remove origin
```

## Git Pages
### Subir pagina a GitHub

1 - ``git init`` \
2 - ``git add .`` \
3 - ``git commit -m -initial commit- `` \
4 - ``git remote add origin http... `` \
5 - ``git push origin master `` 

**Automatizar subida** 

1 - Instalar **gh-pages** \
`yarn add gh-pages` ó `npm install gh-pages`\
2 - En la configuracion antes de las dependencias creamos
```json
{
  "homepage": "https://<nombre-usuario>.github.io/<nombre-repositorio>/"
}
```
3- Crear unos script para construccion y  hacer el deploy
```json
{
  "predeploy": "yarn build", 
  "deploy": "gh-pages -d build"
}
```

4- Ejecutamos el comando ``yarn deploy``
**Ejemplo del package.json:**
```json
{
  "name": "nombre",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://<nombre-usuario>.github.io/<nombre-repositorio>/",
  "dependencies": {
    "gh-pages": "^2.0.1",
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5",
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build",
    "eject": "react-scripts eject"
  },
}
```
