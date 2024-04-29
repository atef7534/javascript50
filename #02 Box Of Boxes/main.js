let container = document.querySelector(".container");

let colors = ["green", "blue"];
let length = colors.length;

for (let i = 0; i < 528; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    let colorIndex = Number.parseInt(Math.random() * length);
    let colorIndex2 = Number.parseInt(Math.random() * length);
    div.onmouseenter = function () {
        div.style.boxShadow = `2px 2px 4px ${colors[colorIndex]}, -2px -2px 4px ${colors[colorIndex2]}`;
        setTimeout(function () {
            div.style.boxShadow = "0 0 0 white";
        }, 3000);
    }
    container.appendChild(div);
}