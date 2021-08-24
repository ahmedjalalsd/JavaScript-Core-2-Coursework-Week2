function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  // to delete duplicate
  list.replaceChildren([]);

  todos.forEach((todo) => {
    // console.log(todo);
    let todoEl = document.createElement("li");
    let spanEl = document.createElement("span");
    let checkIconEl = document.createElement("i");
    let trashIconEl = document.createElement("i");

    // adding classess
    todoEl.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    spanEl.classList.add("badge", "bg-primary", "rounded-pill");
    checkIconEl.classList.add("fa", "fa-check");
    trashIconEl.className = "fa fa-trash";

    checkIconEl.setAttribute("aria-hidden", true);
    trashIconEl.setAttribute("aria-hidden", true);

    todoEl.textContent = todo.task;

    list.appendChild(todoEl);
    todoEl.appendChild(spanEl);
    spanEl.appendChild(checkIconEl);
    spanEl.appendChild(trashIconEl);

    checkIconEl.addEventListener("click", function () {
      if (todoEl.style.textDecoration === "") {
        todoEl.style.textDecoration = "line-through";
        todo.completed = true;
      } else {
        todoEl.style.textDecoration = "";
        todo.completed = false;
      }
    });

    trashIconEl.addEventListener("click", function () {
      todoEl.remove();
    });
  });

  // let deleteAllBtn = document.createElement("button");
  // deleteAllBtn.textContent = "Delete Completed Tasks";
  // deleteAllBtn.className = "btn btn-danger mb-3";
  // document.querySelector(".card").appendChild(deleteAllBtn);
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputField = document.getElementById("todoInput");
  let newTodoItem = {
    task: inputField.value,
    completed: false,
  };
  todos.push(newTodoItem);
  populateTodoList(todos);
  inputField.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  let lis = document.querySelectorAll("#todo-list li");
  lis.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}
