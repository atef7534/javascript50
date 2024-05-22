let sidebar = document.getElementById("sidebar");
sidebar.style.left = -sidebar.offsetWidth + "px";
function showAndHideElement() {
    let show = sidebar.dataset.show;
    if (show === "true") {
        sidebar.style.left = `${-sidebar.offsetWidth}px`;
        sidebar.setAttribute("data-show", "false");
    } else {
        sidebar.style.left = "0";
        sidebar.setAttribute("data-show", "true");
    }
}
