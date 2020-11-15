---
lang: es
title: Cors
description: Abilitar cors firebase.
# sidebar: auto
meta:
    - name: description
      content: Abilitar cors firebase.
    - name: keywords
      content: JavaScript, TypeScript, Firebase, Base de datos, Cloud Functions, Abilitar cors
---

# Abilitar CORS

Para poder descarga de archivos

1 - Instalamos `gsutil` para linea de comandos.

**Ejemplo para MAC**
En nuestro terminal:

1 - Escribe

```sh
curl https://sdk.cloud.google.com | bash
```

2 - Reinicia tu shell:

```sh
exec -l $SHELL
```

3 - Ejecuta `gcloud init` para inicializar el entorno de gcloud:

```sh
gcloud init
```

Creamos un archivo en nuestro proyecto llamado cors.json

```json
[
	{
		"origin": ["*"],
		"method": ["GET"],
		"maxAgeSeconds": 3600
	}
]
```

Ubicados en la carpeta del proyecto desde la terminal escribimos el siguiente codigo pasando el nombre de nuestro bucket de firebase storage.

```sh
gsutil cors set cors.json gs://<your-cloud-storage-bucket>
```
