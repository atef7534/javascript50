function addOne(e) {
    let element = e.children[0];
    element.textContent = Number.parseInt(element.textContent) + 1;
}
function reset() {
    let counter = document.querySelector(".cnt");
    counter.textContent = 0;
}