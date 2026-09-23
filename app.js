const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskList = document.querySelector('#taskList');

let tasks = [];
let taskId = 0;

addTaskButton.addEventListener('click', () => {
  let taskText = taskInput.value.trim();
  if (taskText === '') {
    return; // No se permite añadir tareas vacías
  }

  const newTask = {
    id: taskId++,
    text: taskText,
    completed: false
  }

  tasks.push(newTask);

  console.log(tasks); // Muestra la tarea en la consola

  taskText = ''; // Limpia el input después de añadir la tarea

  renderTasks(); // Renderiza la lista de tareas actualizada
});

function renderTasks() {
  taskList.textContent = ''; // Limpia la lista antes de renderizar
  tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.textContent = task.text;
    taskList.appendChild(taskItem);
  });
}
