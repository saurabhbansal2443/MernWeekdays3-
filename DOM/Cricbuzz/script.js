let inputbar = document.getElementById("num");
let addBtn = document.getElementById("addbtn");
let colorBar = document.getElementById("color");
let dropdown = document.querySelector("select");
let cont = document.querySelector(".cont");

addBtn.addEventListener("click", function () {
  let n = inputbar.value;
  let color = colorBar.value;
  let shape = dropdown.value;
  //    console.log(  n  , color , shape);

   cont.innerHTML = "";

  for (let i = 1; i <= n; i++) {
    let div = document.createElement("div");

    div.classList.add(shape);

    div.style.backgroundColor = color;

    cont.appendChild(div);
  }
});
