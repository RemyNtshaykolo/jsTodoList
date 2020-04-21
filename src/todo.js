// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterBtn = document.querySelector(".filter-todo");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck)
filterBtn.addEventListener("click", filterTodo)

// Functions
function addTodo(event) {
    // Prevent event from submiting
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "<i class='fas fa-check'> </i>";
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Delete button

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fas fa-trash-alt'> </i>";
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Append to ul

    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck(event) {
    const item = event.target;
    console.log(item);


    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })


    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }

}

function filterTodo(event) {

    const todos = todoList.childNodes;


    todos.forEach(function (todo) {

        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    console.log(todo);

                    todo.style.display = "none";
                }
        }
    });

}