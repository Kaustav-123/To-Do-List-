// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = taskText;
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
  }
}

// Add task when the "Add" button is clicked
addButton.addEventListener("click", addTask);

// Add task when the Enter key is pressed
taskInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});