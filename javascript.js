const master = document.querySelector(".master");
let subMaster = document.createElement("div");
subMaster.classList = ("master");
master.appendChild(subMaster);
const body = document.querySelector("body");
const random = () => Math.floor(Math.random() * 256);
let opacity = 0;

function populateCol(n) {
  let col = document.createElement("div");
  col.classList.add("column");
  for (i=0;i<n;i++) {
    let div = document.createElement("div")
    div.classList.add("square");
    col.appendChild(div);
  }
  subMaster.appendChild(col)
}

function populateMas(n) {
  for (x=0;x<n;x++) {
    populateCol(n);
  }
}

function rgb() {
  let r = random();
  let g = random();
  let b = random();
  return `rgb(${r}, ${g}, ${b})`;
}

populateMas(16);

let button = document.createElement("button");
button.textContent = "Change grid";
button.style.marginBottom = "5px";
button.onclick = () => {
  let value = prompt("Enter desired grid value:");
  while (value > 100) {
    value = prompt("100 or less please:");
  }
  master.removeChild(subMaster);
  subMaster = document.createElement("div");
  subMaster.classList = ("master");
  master.appendChild(subMaster);
  populateMas(value);
  squares = document.querySelectorAll(".square");
  highlight();
}
body.insertBefore(button, master);

let squares = document.querySelectorAll(".square");
highlight()
function highlight() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.opacity = opacity;
      square.style.backgroundColor = rgb();
      opacity += 0.1;
    })
  })
}

