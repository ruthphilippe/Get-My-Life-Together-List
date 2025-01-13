// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = ''; // Clear the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; // Font Awesome trash icon
        deleteButton.onclick = () => {
            deleteTask(index);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to add a task
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = ''; // Clear the input
        saveTasks();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for the add task button
addTaskButton.addEventListener('click', addTask);

// Render tasks on page load
renderTasks();