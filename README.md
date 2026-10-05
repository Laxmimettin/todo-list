# ✨ TaskFlow – Simple To-Do List

TaskFlow is a modern and responsive **in-memory To-Do List application** built using **HTML5, CSS3, and JavaScript**.

The application allows users to add and delete tasks dynamically. Tasks are stored in a JavaScript array and rendered on the webpage using DOM manipulation. Since there is no persistence, tasks are removed when the page is refreshed.
## 🚀 Features

* ➕ Add new tasks
* 🗑️ Delete individual tasks
* 📋 Dynamic task list rendering
* 🔢 Live task counter
* ⌨️ Press **Enter** to add a task
* 🚫 Prevents empty tasks
* ⚡ Event delegation for delete buttons
* 🎨 Modern and attractive UI
* 📱 Fully responsive design
* 💾 In-memory data storage
* 🔒 Basic HTML escaping for user-entered content

## 🛠️ Technologies Used

| Technology   | Purpose                                |
| ------------ | -------------------------------------- |
| HTML5        | Page structure                         |
| CSS3         | Styling and responsive UI              |
| JavaScript   | Application logic and DOM manipulation |
| Font Awesome | Icons                                  |
| Google Fonts | Typography                             |


## 📂 Project Structure

todo-list/
│
├── index.html
├── style.css
└── script.js

### `index.html`

Contains the structure of the application, including:

* Task input field
* Add Task button
* Task counter
* Task list container
* Empty-state message

### `style.css`

Contains:

* Modern UI design
* Responsive layout
* Card styling
* Hover effects
* Animations
* Mobile responsiveness
* Background effects

### `script.js`

Contains:

* Task array
* Add task functionality
* Delete task functionality
* DOM rendering
* Event delegation
* Task counter
* Input validation

## 🧠 How It Works

The application stores tasks in a JavaScript array.

let tasks = [];


When the user enters a task and clicks **Add Task**, the task is added to the array.

tasks.push(taskText);

The task list is then re-rendered on the webpage.
renderTasks();

When the user clicks the delete button, the corresponding task is removed from the array.

tasks.splice(index, 1);

The list is rendered again to reflect the updated data.

## 📌 Event Delegation

Instead of adding a separate click event listener to every delete button, the project uses **event delegation**.

taskList.addEventListener("click", function (event) {
    const deleteButton = event.target.closest(".delete-btn");

    if (!deleteButton) {
        return;
    }

    const index = Number(deleteButton.dataset.index);

    tasks.splice(index, 1);

    renderTasks();
});
This approach makes the code simpler and works efficiently with dynamically created task elements.
## 💾 Data Storage

This project uses **in-memory storage**.

Tasks are stored temporarily in:

let tasks = [];

There is no:

* `localStorage`
* Database
* Backend
* API
* User authentication

Therefore, **all tasks disappear after refreshing or closing the browser page**.

## 🎨 UI Highlights

The interface includes:

* Modern glass-style card
* Rounded corners
* Soft shadows
* Interactive buttons
* Task numbering
* Empty task state
* Responsive mobile layout
* Smooth hover animations
* Clean typography

## ▶️ How to Run

### 1. Download or clone the project

git clone https://github.com/your-username/todo-list.git

### 2. Open the project folder

todo-list/

### 3. Open `index.html`

You can simply double-click `index.html` to open the application in your browser.

Alternatively, use **VS Code Live Server**.

## 🧪 Example Usage

1. Enter a task in the input field.

Complete JavaScript practice

2. Click **Add Task**.

3. The task appears in the list.

4. Add more tasks.

5. Click the 🗑️ delete button to remove a task.

## 📚 Concepts Practiced

This project helps practice important JavaScript concepts:

* Arrays
* `push()`
* `splice()`
* Functions
* DOM manipulation
* `createElement()`
* `innerHTML`
* Event listeners
* Event delegation
* `dataset`
* Input validation
* Template literals
* Conditional statements
* Array iteration using `forEach()`

## 🎯 Learning Objective

The main objective of this project is to understand how JavaScript can manage application data using an array and dynamically update the webpage using DOM manipulation.

It demonstrates the basic flow:

User Input
    ↓
JavaScript Array
    ↓
DOM Rendering
    ↓
User Interaction
    ↓
Array Update
    ↓
Re-render UI

## 🔮 Future Enhancements

The project can be extended with:

* ✅ Mark tasks as completed
* ✏️ Edit existing tasks
* 💾 LocalStorage persistence
* 🔍 Search tasks
* 🏷️ Task categories
* 📅 Due dates
* ⭐ Task priorities
* 🌙 Dark mode
* 🔔 Notifications
* 📊 Task completion statistics
* 🔐 User authentication
* ☁️ Database storage
