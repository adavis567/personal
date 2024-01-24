function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';

      const taskText = document.createElement('input');
      taskText.type = 'text';
      taskText.value = taskInput.value;
      taskText.disabled = true;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function () {
        taskText.disabled = !taskText.disabled;
        editButton.textContent = taskText.disabled ? 'Edit' : 'Save';
      };

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        taskDiv.remove();
        updateLocalStorage();
      };

      taskDiv.appendChild(taskText);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteButton);

      taskList.appendChild(taskDiv);
      updateLocalStorage();

      taskInput.value = ''; // Clear the input field
    }
  }

  // Function to update local storage with tasks
  function updateLocalStorage() {
    const tasks = [];
    const taskDivs = document.querySelectorAll('.task');

    taskDivs.forEach(taskDiv => {
      const taskText = taskDiv.querySelector('input[type="text"]');
      tasks.push(taskText.value);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to load tasks from local storage
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    storedTasks.forEach(task => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';

      const taskText = document.createElement('input');
      taskText.type = 'text';
      taskText.value = task;
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

      taskDiv.appendChild(taskText);
      taskDiv.appendChild(editButton);
      taskDiv.appendChild(deleteButton);

      taskList.appendChild(taskDiv);
    });
  }

  // Load tasks on page load
  loadTasks();a