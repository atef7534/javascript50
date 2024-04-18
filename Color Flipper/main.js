// start color flipper challenge [easy]
let colorNameSpan = document.querySelector("span.color-name");
let landing = document.querySelector(".landing");
let inputQuery = document.querySelector("button.query");

inputQuery.addEventListener("click", function () {
    let r = Number.parseInt(Math.random() * 255);
    let g = Number.parseInt(Math.random() * 255);
    let b = Number.parseInt(Math.random() * 255);
    console.log(r);
    landing.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    colorNameSpan.textContent = landing.style.backgroundColor;
});
