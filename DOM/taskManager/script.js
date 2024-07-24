let deleteBtn = document.querySelector(".delete");
let addBtn = document.querySelector(".add");
let allTicketsBtn = document.querySelector(".all");
let inputSearchBar = document.querySelector(".inputsearch");
let searchBtn = document.querySelector(".srchBtn");
let ticketAdder = document.querySelector(".ticketAdder");
let ticketPriorityBox = document.querySelector(".ticketPriority");
let ticketContainer = document.querySelector(".ticketContainer");
let priorityColor = document.querySelector(".priorityColor");
let allBoxes = document.querySelectorAll(".ticketPriority .box");

console.log(allBoxes);

let taskColor = "red";

addBtn.addEventListener("click", function () {
  ticketAdder.classList.toggle("noDisplay");
});

ticketPriorityBox.addEventListener("click", function (event) {
  let clickedBox = event.target;
  if (clickedBox.classList[0] == "box") {
    allBoxes.forEach(function (box) {
      box.classList.remove("border");
    });

    taskColor = clickedBox.classList[1];

    clickedBox.classList.add("border");
  }
});
