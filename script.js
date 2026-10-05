// Store tasks in an in-memory array
let tasks = [];

// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent empty tasks
  if (taskText === "") {
    taskInput.focus();
    return;
  }

  // Add task to array
  tasks.push(taskText);

  // Clear input
  taskInput.value = "";

  // Render updated list
  renderTasks();

  taskInput.focus();
}

// Render tasks from the array
function renderTasks() {
  // Clear existing list
  taskList.innerHTML = "";

  // Update task count
  taskCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;

  // Show empty state if there are no tasks
  if (tasks.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  // Hide empty state
  emptyState.style.display = "none";

  // Create task elements
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
            <div class="task-content">
                <div class="task-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>

                <span class="task-text">
                    ${escapeHTML(task)}
                </span>
            </div>

            <button
                class="delete-btn"
                data-index="${index}"
                aria-label="Delete task"
            >
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

    taskList.appendChild(taskItem);
  });
}

// Event delegation for delete buttons
taskList.addEventListener("click", function (event) {
  const deleteButton = event.target.closest(".delete-btn");

  if (!deleteButton) {
    return;
  }

  const index = Number(deleteButton.dataset.index);

  // Remove task from array
  tasks.splice(index, 1);

  // Re-render list
  renderTasks();
});

// Add button event
addTaskBtn.addEventListener("click", addTask);

// Press Enter to add task
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Prevent HTML injection
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Initial render
renderTasks();
