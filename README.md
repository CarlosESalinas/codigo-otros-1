# Cambios en el codigo-otros-1

## Cambios Realizados en el Archivo .js

### Selección de Elementos del DOM:

- Se cambió el selector de `$n` a `$name`.
- Se corrigió el selector de `$n` a `document.querySelector('.name')`.

### Manejo de Errores:

- Se agregó un bloque `try-catch` en la función `displayUser` para manejar posibles errores en la solicitud `fetch`.
- En la llamada a `fetch`, se añadió `await` para esperar la respuesta antes de intentar leer el JSON.

### Actualización de la Presentación de Datos:

- Se utilizó el operador de fusión nula (`||`) para proporcionar un valor predeterminado en caso de que `data.name`, `data.blog` o `data.location` sean nulos o indefinidos.

### Actualización de la Presentación de Texto:

- Se actualizó el código que establece el contenido de `$name`, `$blog` y `$location` para mostrar mensajes predeterminados en caso de datos no disponibles.

Estos cambios buscan corregir errores y mejorar la legibilidad y mantenimiento del código en el archivo JavaScript.

### Cambios realizados en el archivo .html 

- Se actualizaron los cambios en las rutas del los archivos index.html y app.js 
- Se agregó una etiqueta `<p>` con el `id` blog.  

--- 

# Cambios en el codigo-otros-2

## Cambios realizado en el archivo formulario.js

### Selección del Formulario:
   - **Original:** `var formulario = document.querySelector("#form")`
   - **Actualizado:** `var formulario = document.querySelector("form");`
   - **Descripción:** Se corrigió el selector para buscar el elemento `form` en lugar de `#form`.

### Manejo del Evento `onsubmit`:
   - **Original:** `e.prevent();`
   - **Actualizado:** `e.preventDefault();`
   - **Descripción:** Se corrigió el método `prevent` a `preventDefault` para evitar la acción predeterminada del formulario.

### Nombres de Variables Conflictivas:
   - **Original:** Variables `n` y `e` se utilizan para representar elementos del formulario y luego para almacenar valores (`nombre` y `edad`).
   - **Actualizado:** Se cambiaron los nombres de las variables a `nombre` y `edad` para evitar conflictos y mejorar la legibilidad.

### Manejo de Clases:
   - **Original:** `n.classList.add("error")` y `e.classList.add("error")`
   - **Actualizado:** `nombre.classList.add("error")` y `edad.classList.add("error")`
   - **Descripción:** Se corrigieron los nombres de las variables al aplicar clases de error.

### Creación de Elementos:
   - **Original:** `elementoLista.classList.added("elemento-lista")`
   - **Actualizado:** `elementoLista.classList.add("elemento-lista");`
   - **Descripción:** Se corrigió el método `added` a `add` al agregar una clase a `elementoLista`.

## Cambios realizado en el archivo formulario.html


### Ruta del Script:

- Versión con Errores: `<script src="../formulario.js"></script>`
- Versión sin Errores: `<script src="./formulario.js"></script>`
- Descripción: Se corrigió la ruta del script para apuntar correctamente al archivo formulario.js.

### Contenedor de Lista de Invitados:

- **Versión sin Errores**: Se agregó un contenedor con el ID `lista-de-invitados`para mostrar la lista de invitados.