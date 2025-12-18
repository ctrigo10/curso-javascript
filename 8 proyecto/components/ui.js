export class UI {
  constructor(tastManager) {
    this.taskManager = tastManager;
    this.editId = null;

    // Elementos de la UI (referencia a los elementos del DOM)
    this.input = document.getElementById('taskInput');
    this.button = document.getElementById('addBtn');
    this.list = document.getElementById('taskList');

    // Eventos
    this.button.addEventListener('click', () => this.addOrSave());
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.addOrSave();
    });

    this.render();
  }

  // Renderizar Tareas
  render() {
    this.list.innerHTML = '';

    this.taskManager.getAll().forEach((task) => {
      const li = document.createElement('li');
      li.className =
        'list-group-item d-flex justify-content-between align-item-center';

      // contenido del <li> con texto y bótones
      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button class="btn btn-warning btn-sm">Editar</button>
          <button class="btn btn-danger btn-sm">Eliminar</button>
        </div>
      `;

      // Eventos de los botones Editar y Eliminar
      li.querySelector('.btn-warning').onclick = () => this.startEdit(task.id);
      li.querySelector('.btn-danger').onclick = () => this.deleteTask(task.id);

      // Añadir al <li> a la lista
      this.list.appendChild(li);
    });
  }

  startEdit(id) {
    const task = this.taskManager.getOne(id);
    this.input.value = task.text;
    this.input.focus();
    this.editId = task.id;
    this.button.textContent = 'Guardar cambios';
  }

  addOrSave() {
    const text = this.input.value.trim();
    if (!text) return alert('Escribe una tarea');

    if (this.editId) {
      // Estamos editando
      this.taskManager.update(this.editId, text);
      this.editId = null;
      this.button.textContent = 'Agregar Tarea';
    } else this.taskManager.add(text);

    this.input.value = '';
    this.render();
  }

  deleteTask(id) {
    this.taskManager.remove(id);
    this.render();
  }
}
