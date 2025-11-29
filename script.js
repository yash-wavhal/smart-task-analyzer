// Select DOM elements
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

// Handle form submit
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("taskDueDate").value;
    const priority = document.getElementById("taskPriority").value;
    const time = parseInt(document.getElementById("taskTime").value);

    if (!name || !dueDate || !priority || !time) return;

    const taskDate = new Date(dueDate);

    if (taskDate < new Date()) {
        alert("Enter a valid future date!");
        return;
    }

    const task = {
        id: Date.now(),
        name,
        dueDate,
        priority,
        time,
        score: calculateScore(dueDate, priority, time)
    };

    tasks.push(task);
    renderTasks();

    taskForm.reset();
});

// Scoring Algorithm
function calculateScore(dueDate, priority, time) {
    let score = 0;
    const currentDate = new Date();
    const taskDate = new Date(dueDate);

    // Urgency score (max 40)
    const diffDays = Math.ceil((taskDate - currentDate) / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) {
        score += 40; // overdue / due today = highest priority
    } else if (diffDays <= 3) {
        score += 30;
    } else if (diffDays <= 7) {
        score += 20;
    } else {
        score += 10;
    }

    // Priority score
    const priorityScores = {
        High: 10,
        Medium: 5,
        Low: 2
    };
    score += priorityScores[priority];

    // Effort score (less time = higher score)
    if (time <= 2) score += 20;
    else if (time <= 5) score += 10;
    else score += 5;

    return score;
}

// Render Tasks to UI
function renderTasks() {
    // Sort tasks by score descending
    tasks.sort((a, b) => b.score - a.score);

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const card = document.createElement("div");

        let priorityClass = "";
        if (task.priority === "High") priorityClass = "high-priority";
        else if (task.priority === "Medium") priorityClass = "medium-priority";
        else priorityClass = "low-priority";

        card.className = `task-card ${priorityClass}`;

        card.innerHTML = `
        <div>
            <h3>${task.name}</h3>
            <small><strong>Due: </strong>${task.dueDate} | </small>
            <small><strong>Priority: </strong>${task.priority} | </small>
            <small>Score: <strong>${task.score}</strong></small>
        </div>
        <div class="task-actions">
            <button class="complete-btn" onclick="completeTask(${task.id})">✔</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">✖</button>
        </div>
    `;

        taskList.appendChild(card);
    });
}

// Mark task completed
function completeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Delete task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}