document.addEventListener("DOMContentLoaded", () => {
    // Cache elements using getElementById and querySelector
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const taskForm = document.getElementById("taskForm");
    const errorMessage = document.getElementById("errorMessage");

    // Form submission
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskValue = taskInput.value.trim();

        // Validation
        if (taskValue.length < 3) {
            errorMessage.classList.remove("hidden");
            return;
        }
        errorMessage.classList.add("hidden");

        // Create new task item using createElement and DocumentFragment
        const fragment = document.createDocumentFragment();
        const newTask = document.createElement("li");

        newTask.innerHTML = `
            <span>${taskValue}</span>
            <button class="delete">Delete</button>
        `;

        // Append new task
        fragment.appendChild(newTask);
        taskList.appendChild(fragment);

        // Add event listeners
        newTask.addEventListener("click", toggleComplete);
        newTask.querySelector(".delete").addEventListener("click", deleteTask);

        // Clear input
        taskInput.value = "";
    }

    function toggleComplete(event) {
        event.target.parentNode.classList.toggle("completed");
    }

    function deleteTask(event) {
        event.target.parentNode.remove();
    }

    // BOM Example: Alert when user leaves the page
    window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
        event.returnValue = "Are you sure you want to leave? Your tasks will not be saved.";
    });

    // BOM Example: Display screen width
    function displayScreenWidth() {
        alert(`Your screen width is: ${window.innerWidth}px`);
    }

    // Display width when user clicks anywhere
    document.body.addEventListener("click", displayScreenWidth, { once: true });
});
