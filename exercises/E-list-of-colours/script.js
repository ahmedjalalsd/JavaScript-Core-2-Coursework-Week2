function listOfColours(colours) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let selectEl = document.createElement("select");
  let parEl = document.createElement("p");

  contentEl.appendChild(selectEl);

  colours.forEach((colour) => {
    let optionEl = document.createElement("option");
    optionEl.textContent = colour;
    selectEl.appendChild(optionEl);
  });

  document
    .getElementsByTagName("select")[0]
    .addEventListener("click", function (evt) {
      parEl.textContent = "You have selected: " + evt.target.value;
      parEl.style.color = evt.target.value;
      contentEl.appendChild(parEl);
      console.log(evt.target.value);
    });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
