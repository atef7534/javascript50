let select = document.querySelector("select");
let color = document.querySelector("input.color-inp");
let txt = document.querySelector(".txt p");

txt.style.fontWeight = select.value;
txt.style.color = color.value;

select.addEventListener("change", function () {
    txt.style.fontWeight = this.value;
});

color.addEventListener("input", function () {
    txt.style.color = this.value;
});