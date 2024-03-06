function createTaskElement(taskValue, dueDate, priority) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  const completeCheckbox = document.createElement('input');
  completeCheckbox.type = 'checkbox';
  completeCheckbox.addEventListener('change', () => {
    taskText.classList.toggle('complete', completeCheckbox.checked);
    updateLocalStorage();
  });

  const taskText = document.createElement('input');
  taskText.type = 'text';
  taskText.value = taskValue;
  taskText.disabled = true;

  const dueDateText = document.createElement('span');
  dueDateText.textContent = dueDate || 'No due date';
  dueDateText.classList.add('dueDate');

  const priorityText = document.createElement('span');
  priorityText.textContent = priority || 'No priority';
  priorityText.classList.add('priority');

  const editButton = createButton('Edit', () => {
    taskText.disabled = !taskText.disabled;
    editButton.textContent = taskText.disabled ? 'Edit' : 'Save';
    updateLocalStorage();
  });

  const deleteButton = createButton('Delete', () => {
    taskDiv.remove();
    updateLocalStorage();
  });

  taskDiv.appendChild(completeCheckbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(dueDateText);
  taskDiv.appendChild(priorityText);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);

  return taskDiv;
}

function createButton(text, clickHandler) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', clickHandler);
  return button;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDate');
  const priorityInput = document.getElementById('priority');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const taskDiv = createTaskElement(taskInput.value, dueDateInput.value, priorityInput.value || 'No priority');

    taskList.appendChild(taskDiv);
    updateLocalStorage();

    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = '';
  }
}

function updateLocalStorage() {
  const tasks = [];
  const taskDivs = document.querySelectorAll('.task');

  taskDivs.forEach(taskDiv => {
    const completeCheckbox = taskDiv.querySelector('input[type="checkbox"]');
    const taskText = taskDiv.querySelector('input[type="text"]');
    const dueDateText = taskDiv.querySelector('.dueDate');
    const priorityText = taskDiv.querySelector('.priority');

    tasks.push({
      task: taskText.value,
      dueDate: dueDateText.textContent,
      priority: priorityText.textContent,
      complete: completeCheckbox.checked,
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  try {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.forEach(task => {
      const taskDiv = createTaskElement(task.task, task.dueDate, task.priority);
      taskDiv.querySelector('input[type="checkbox"]').checked = task.complete;
      taskList.appendChild(taskDiv);
    });
  } catch (error) {
    console.error('Error loading tasks:', error);
  }
}

loadTasks();
