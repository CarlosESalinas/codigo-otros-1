# Cambios Realizados en el Archivo .js

## Selección de Elementos del DOM:

- Se cambió el selector de `$n` a `$name`.
- Se corrigió el selector de `$n` a `document.querySelector('.name')`.

## Manejo de Errores:

- Se agregó un bloque `try-catch` en la función `displayUser` para manejar posibles errores en la solicitud `fetch`.
- En la llamada a `fetch`, se añadió `await` para esperar la respuesta antes de intentar leer el JSON.

## Actualización de la Presentación de Datos:

- Se utilizó el operador de fusión nula (`||`) para proporcionar un valor predeterminado en caso de que `data.name`, `data.blog` o `data.location` sean nulos o indefinidos.

## Actualización de la Presentación de Texto:

- Se actualizó el código que establece el contenido de `$name`, `$blog` y `$location` para mostrar mensajes predeterminados en caso de datos no disponibles.

Estos cambios buscan corregir errores y mejorar la legibilidad y mantenimiento del código en el archivo JavaScript.