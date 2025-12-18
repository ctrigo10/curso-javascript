# Arquitectura cliente servidor

## Método

GET - Obtener datos
- Get /users listar
- Get /users/:id obtener uno específico

POST - Crear datos
- Post /users (body)

PUT - Editar datos
- Put /users/:id (body)

PATCH - Editar datos
- Put /users/:id (body)

DELETE - eliminar datos
- Delete /users/:id

## DOM
obtener del dom un objeto
```js
document.getElementById('titulo').innerText = 'Nuevo título';
```

Crear elementos dinámicamente
```js
const li = document.createElement('li');
li.textContent = 'Nuevo elemento';
documento.querySelector('ul').appendChild('li')
```

Manejador de eventos
```js
// 1. Obtener la referencia del botón
const boton = document.querySelector('#miBoton');

// 2. Adjuntar el "escuchador" de eventos
botton.addEventListener('click', function(evento) {
  // cuando el usuario haga click, se ejecuta este código
  console.log('Botón presionado');
  // El objeto "evento" contiene información sobre el evento
  eveto.target.textContext = 'Gracias'
})
```