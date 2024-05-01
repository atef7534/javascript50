function hide() {
    let container = document.querySelector(".container");
    let div = document.createElement("div");
    div.textContent = "goodbye";
    div.style.fontSize = "40px";
    div.style.fontWeight = "bold";
    container.style.display = 'none';

    document.body.appendChild(div);
    setTimeout(function () {
        div.style.display = 'none';
    }, 3000);
}