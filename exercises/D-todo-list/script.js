function todoList(todos) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  todos.forEach((ele) => {
    let li = document.createElement("li");
    li.textContent = ele.todo;
    ul.appendChild(li);
  });

  //  normal for loop

  // let liClicked = document.querySelectorAll("li");
  // console.log(liClicked);
  // for (let i = 0; i < liClicked.length; i++) {
  //   liClicked[i].addEventListener("click", function () {
  //     if (
  //       liClicked[i].getAttribute("style") === null ||
  //       liClicked[i].getAttribute("style") === ""
  //     ) {
  //       liClicked[i].style.textDecoration = "line-through";
  //     } else {
  //       liClicked[i].style.textDecoration = "";
  //     }
  //   });
  // }

  // array methods

  // document.querySelectorAll("li").forEach((ele) => {
  //   ele.addEventListener("click", function () {
  //     console.log(ele);
  //     if (
  //       ele.getAttribute("style") === null ||
  //       ele.getAttribute("style") === ""
  //     ) {
  //       ele.style.textDecoration = "line-through";
  //     } else {
  //       ele.style.textDecoration = "";
  //     }
  //   });
  // });

  // using event bubbling
  document
    .getElementsByTagName("ul")[0]
    .addEventListener("click", function (event) {
      // console.log(event.target);
      if (event.target && event.target.matches("li")) {
        if (
          event.target.getAttribute("style") === null ||
          event.target.getAttribute("style") === ""
        ) {
          event.target.style.textDecoration = "line-through";
        } else {
          event.target.style.textDecoration = "";
        }
      }
    });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
