function shoppingList(arrayOfPeople) {
  // Write your code here...
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  // for (let i = 0; i < arrayOfPeople.length; i++) {
  //   let li = document.createElement("li");
  //   li.textContent = arrayOfPeople[i];
  //   ul.appendChild(li);
  // }

  arrayOfPeople.forEach((person) => {
    let li = document.createElement("li");
    li.textContent = person;
    ul.appendChild(li);
  });
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
