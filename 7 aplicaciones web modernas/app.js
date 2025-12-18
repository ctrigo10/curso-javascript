//
// 1. OBTENER ELEMENTOS DEL DOM
//

// getElementById SOLO puede buscar por id y es m'as r'apido
// Devuelve directamente el elemento o null
const titulo = document.getElementById('titulo');

// querySelector permite buscar usando selectores CSS, #id, .clase, tag
// Es m'as flexible, pero un poquito mas lento (aunque casi no se nota)
const inputTexto = document.querySelector('#inputTexto');

// Tambi'en usamo querySelector para botones y css
const btnCambiarTitulo = document.querySelector('#btnCambiarTitulo');
const btnAgregarItem = document.querySelector('#btnAgregarItem');
const btnCargarApi = document.querySelector('#btnCargarApi');

// Obtener lista
const lista = document.querySelector('#lista');

//
// 2. EVENTO PARA CAMBIAR EL T'ITULO
//

// addEventListener te permite escuchar qu'e ocurre en un elemento
// En este caso, escuchamos cuando se hace click en el b'oton
btnCambiarTitulo.addEventListener('click', () => {
  // .value obtiene lo que escribi'o  el usaurio en el input
  const texto = inputTexto.value.trim();
  if (texto === '') {
    alert('Escribe algo primero!');
    return; // Detiene la funci'on
  }

  // textContent cambia SOLO el texto interno del elemento
  // (innerHTML tambi'en puede usarse, pero permite HTML y puede ser inseguro)
  titulo.textContent = texto;

  // classLint.toggle agregar o quita una clase autom'aticamente
  // Si no la tiene la agrega. Si ya la tiene la quita
  titulo.classList.toggle('resaltado');
});

//
// 3. EVENTO PARA AGREGAR ELEMENTOS DIM'AMICOS A LA LISTA
//

btnAgregarItem.addEventListener('click', () => {
  const texto = inputTexto.value.trim();
  if (texto === '') {
    alert('Escribe algo primero!');
    return; // Detiene la funci'on
  }

  // document.createElement crear un nuevo elemento HTML
  const li = document.createElement('li');

  // Le ponemos texto como contenido
  li.textContent = texto;

  // Crear un b'oton dentro del <li>
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = 'X';

  // Modificar su estilo directamente CSS
  btnEliminar.style.marginLeft = '10px';
  btnEliminar.style.color = 'red';

  // Evento del bot'on elminar
  // cuando se hace click, removemos el elemento entero <li>
  btnEliminar.addEventListener('click', () => {
    li.remove(); // Eliminar completamente el <li> del DOM
  });

  // Insertamos el bot'on dentro del <li>
  li.appendChild(btnEliminar);

  // Insertamos el <li> dentro de la lista <ul>
  lista.appendChild(li);

  // Limpiamos el input
  inputTexto.value = '';
});

//
// 4. CARGAR ELEMENTOS DESDE API (GET + Fetch)
//

btnCargarApi.addEventListener('click', () => {
  lista.innerHTML = '';
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

  fetch(url)
    .then((resp) => {
      if (!resp.ok) throw new Error('Error en la API');
      // convertimos la respuesta en json
      return resp.json();
    })
    .then((data) => {
      // Recorremos los datos y agregamos en el DOM
      data.forEach((post) => {
        const li = document.createElement('li');
        li.textContent = post.title;
        lista.appendChild(li);
      });
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
});
