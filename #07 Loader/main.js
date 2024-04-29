function stopRotate() {
    let loader = document.querySelector(".loader");
    loader.style.animationPlayState = "paused";
}
function continueRotate() {
    let loader = document.querySelector(".loader");
    loader.style.animationPlayState = "running";
}
function changeColor(e) {
    let loader = document.querySelector(".loader");
    loader.style.borderTopColor = e.value;
}