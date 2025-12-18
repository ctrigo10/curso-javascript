// Clase que se encarga de manejar los datos de las tareas
//const sTasks = 'tasks'
export class TaskManager {
  // Constructor inicializa las tareas y carga las tareas guardadas
  constructor() {
    this.tasks = []; //Array que fuarda las taeas en memoria
    this.load(); // Carga las tareas
  }

  // Cargas lar tareas guardadas del localStorage
  load() {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : []
  }

  // Guardar las tareas actuales en localStorage
  save() {
    const tasks = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasks);
  }

  // Agregar una nueva tarea
  add(text) {
    const newTask = {
      id: Date.now(),
      text,
    };
    this.tasks.push(newTask);
    this.save();
  }

  // Actualizar una tarea
  update(id, text) {
    const task = this.tasks.find((t) => t.id === id); // Buscar tarea
    if (task) {
      task.text = text;
      this.save();
    }
  }

  // Eliminar tarea
  remove(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.save();
  }

  getAll() {
    return this.tasks;
  }

  getOne(id) {
    return this.tasks.find((t) => t.id === id); // Buscar tarea
  }
}
