const master = document.querySelector(".master");
//const column = document.createElement("div");
//column.classList.add("column");
//
//const square = document.createElement("div");
//column.classList.add("square");

function populateCol(n) {
  let col = document.createElement("div");
  col.classList.add("column");
  for (i=0;i<n;i++) {
    let div = document.createElement("div")
    div.classList.add("square");
    col.appendChild(div);
  }
  master.appendChild(col)
}

function populateMas(n) {
  for (x=0;x<n;x++) {
    populateCol(n);
  }
}

populateMas(16);

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "blue";
  })
})


