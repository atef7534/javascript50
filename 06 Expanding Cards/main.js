let panel = document.querySelectorAll(".panel");
function clearActive() {
    panel.forEach(function(e) {
        e.classList.remove("active");
    })
}
panel.forEach(function(p) {
    p.addEventListener("click", function() {
        clearActive();
        p.classList.add("active");
    });
});