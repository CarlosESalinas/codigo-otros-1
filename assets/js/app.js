// Cambios en la selección de elementos del DOM
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // Se cambió el selector a '.name'
const $blog = document.querySelector('#blog');
const $location = document.querySelector('.location');

// Función para mostrar información del usuario
async function displayUser(username) {
  try {
    $name.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

    // Checar si name, blog y location son no nulos
    $name.textContent = data.name || 'Nombre no disponible';
    $blog.textContent = data.blog || 'Blog no disponible';
    $location.textContent = data.location || 'Location no disponible';
  } catch (error) {
    handleError(error);
  }
}

// Función para manejar errores
function handleError(error) {
  console.log('OH NO!');
  console.log(error);
  $name.textContent = `Algo salió mal: ${error}`;
}

// Llamada de la función con el nombre de usuario
displayUser('stolinski').catch(handleError);
