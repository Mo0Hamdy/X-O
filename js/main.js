let divs = document.querySelectorAll(".row div");
let result = document.querySelector(".result");
let reset = document.querySelector("button");
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let divState = false;
let counter = 0;
let xarr = [];
let oarr = [];
let highlight = [];
let standard_array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

divs.forEach((div, index) => {
  div.addEventListener("click", function () {
    if (!divState && counter < 9) {
      counter++;
      if (x.classList.contains("active")) {
        divs[index].innerHTML = `<i class="fa-solid fa-x" style="color:#00aaff"></i>`;
        xarr[index] = index + 1;
        x.classList.toggle("active");
        o.classList.toggle("active");
        if (compare(xarr)) {
          divState = true;
          result.style.cssText = `visibility:visible;`;
          result.innerHTML = `player<span style="color:#00aaff;padding:5px;font-weight:bold;">X</span>is the winner`;
          coloring();
        }
        if (counter === 9 || divState) {
          o.classList.remove("active");
        }
      } else if (o.classList.contains("active")) {
        divs[index].innerHTML = `<i class="fa-solid fa-o" style="color:#ff4081"></i>`;
        oarr[index] = index + 1;
        x.classList.toggle("active");
        o.classList.toggle("active");
        if (compare(oarr)) {
          divState = true;
          result.style.cssText = `visibility:visible;`;
          result.innerHTML = `player<span style="color:#ff4081;padding:5px;font-weight:bold;">O</span>is the winner`;
          coloring();
        }
        if (counter === 9 || divState) {
          x.classList.remove("active");
        }
      }
    }
    if (counter === 9 && !divState) {
      result.style.cssText = `visibility:visible;`;
      result.textContent = "no winner";
    }
  });
});

function compare(arr) {
  for (let i = 0; i < standard_array.length; i++) {
    let count = 0;
    highlight = [];
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === standard_array[i][j]) {
          count++;
          highlight.push(arr[k]);
        }
      }
    }
    if (count === 3) {
      return highlight;
    }
  }
}

reset.addEventListener("click", function () {
  counter = 0;
  divState = false;
  xarr = [];
  oarr = [];
  for (let i = 0; i < divs.length; i++) {
    divs[i].innerHTML = ``;
  }
  x.classList.add("active");
  o.classList.remove("active");
  result.textContent = "";
  result.style.cssText = `visibility:hidden;transition:0s`;
  for (let i = 0; i < 3; i++) {
    divs[highlight[i] - 1].style.cssText = `background-color:#333333;`;
  }
});

function coloring() {
  for (let i = 0; i < 3; i++) {
    divs[highlight[i] - 1].style.cssText = `background-color:#111;`;
  }
}
