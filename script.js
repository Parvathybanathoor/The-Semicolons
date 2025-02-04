// script.js

let tasks = [];
let totalTasks = 0;
let completedTasks = 0;

function addTask() {
    const taskInput = document.getElementById("newTaskInput");
    const taskName = taskInput.value.trim();

    if (taskName) {
        // Add task to task list
        const taskId = `task-${totalTasks + 1}`;
        tasks.push({ name: taskName, id: taskId, completed: false });

        totalTasks++;
        taskInput.value = ''; // Clear input field

        renderTasks();
        updateProgress();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ''; // Clear current tasks

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const taskLabel = document.createElement("label");
        taskLabel.innerText = task.name;

        const taskCheckbox = document.createElement("input");
        taskCheckbox.type = "checkbox";
        taskCheckbox.id = task.id;
        taskCheckbox.checked = task.completed;
        taskCheckbox.addEventListener("change", () => toggleTaskCompletion(index));

        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(taskCheckbox);
        taskList.appendChild(taskDiv);
    });
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    completedTasks = tasks.filter(task => task.completed).length;
    updateProgress();
}

function updateProgress() {
    const progress = (completedTasks / totalTasks) * 100;
    document.getElementById("progressFill").style.width = `${progress}%`;
    document.getElementById("progressText").innerText = `Progress: ${Math.round(progress)}%`;

    if (completedTasks === totalTasks) {
        document.getElementById("reward").innerText = "Congratulations! You've completed all tasks!";
    } else {
        document.getElementById("reward").innerText = "";
    }
}

function changeBackground(color) {
    document.body.style.backgroundColor = color;
}
