function createTaskElement(taskValue) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  const taskText = document.createElement('input');
  taskText.type = 'text';
  taskText.value = taskValue;
  taskText.disabled = true;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.onclick = function () {
    taskText.disabled = !taskText.disabled;
    editButton.textContent = taskText.disabled ? 'Edit' : 'Save';
    updateLocalStorage();
  };

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    taskDiv.remove();
    updateLocalStorage();
  };

  const priorityDropdown = document.createElement('select');
  priorityDropdown.id = 'prioritySelect';  // Add an ID for styling
  priorityDropdown.className = 'select-wrapper';



  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.text = 'Choose Priority';
  priorityDropdown.appendChild(defaultOption);

  const options = [
    { value: 'high', text: 'Do Very Soon' },
    { value: 'medium', text: 'Can Wait a Bit' },
    { value: 'low', text: 'Not Too Important' },
  ];

  options.forEach(optionData => {
    const option = document.createElement('option');
    option.value = optionData.value;
    option.text = optionData.text;
    priorityDropdown.appendChild(option);
  });

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);
  taskDiv.appendChild(priorityDropdown);

  return taskDiv;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const taskDiv = createTaskElement(taskInput.value);

    taskList.appendChild(taskDiv);
    updateLocalStorage();

    taskInput.value = '';
  }
}

function updateLocalStorage() {
  const tasks = [];
  const taskDivs = document.querySelectorAll('.task');

  taskDivs.forEach(taskDiv => {
    const taskText = taskDiv.querySelector('input[type="text"]');
    tasks.push(taskText.value);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById('taskList');
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  storedTasks.forEach(task => {
    const taskDiv = createTaskElement(task);
    taskList.appendChild(taskDiv);
  });
}

loadTasks();
