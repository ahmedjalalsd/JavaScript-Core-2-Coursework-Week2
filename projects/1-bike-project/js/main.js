/** Part 1 */
let blueBtn = document.getElementById("blueBtn");
let orangeBtn = document.getElementById("orangeBtn");
let greenBtn = document.getElementById("greenBtn");

let jumbotronDiv = document.querySelector(".jumbotron");
let donatABike = document.querySelectorAll(".buttons a");

blueBtn.addEventListener("click", function () {
  //   console.log(donatABike);
  //   console.log(jumbotronDiv);
  jumbotronDiv.style.backgroundColor = "#588fbd";
  donatABike[0].style.backgroundColor = "#ffa500";
  donatABike[1].style.backgroundColor = "white";
  donatABike[1].style.color = "black";
});

orangeBtn.addEventListener("click", function () {
  jumbotronDiv.style.backgroundColor = "#f0ad4e";
  donatABike[0].style.backgroundColor = "#5751fd";
  donatABike[1].style.backgroundColor = "#31b0d5";
  donatABike[1].style.color = "white";
});

greenBtn.addEventListener("click", function () {
  jumbotronDiv.style.backgroundColor = "#87ca8a";
  donatABike[0].style.backgroundColor = "black";
  donatABike[1].style.backgroundColor = "#8c9c08";
});

/** Part 2 */

// let submitBtn = document.querySelector("button[type='submit']");
// submitBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log(event);
// });

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailField = document.getElementById("exampleInputEmail1");
  let nameField = document.getElementById("example-text-input");
  let describeField = document.getElementById("exampleTextarea");
  // console.log(emailField.value);

  let flag1 = false;
  let flag2 = false;
  let flag3 = false;

  if (emailField.value.length <= 0 && !emailField.value.includes("@")) {
    emailField.style.backgroundColor = "red";
    flag1 = false;
  } else {
    flag1 = true;
  }

  if (nameField.value.length <= 0) {
    nameField.style.backgroundColor = "red";
    flag2 = false;
  } else {
    flag2 = true;
  }

  if (describeField.value.length <= 0) {
    describeField.style.backgroundColor = "red";
    flag3 = false;
  } else {
    flag3 = true;
  }

  // console.log(flag);
  if (flag1 && flag2 && flag3) {
    alert("Thank you");
  }
});
