function addTask() {
    let taskList = document.querySelector(".task-list");
    let task = document.createElement("li");
    let input = document.querySelector(".task");
    if (input.value === "") {
        return;
    }
    task.innerHTML = input.value;
    input.value = "";
    task.innerHTML += "<span onclick='remove(this)'>&#10062</span>";
    task.setAttribute("onclick", "done(this)");
    taskList.appendChild(task);
}
function remove(e) {
    var parent = e.parentElement;
    parent.remove();
}
function done(e) {
    if (e.dataset.done === "false") {
        e.style.textDecoration = "line-through";
        e.setAttribute("data-done", "true");
        e.style.color = "#ddd";
    } else {
        e.style.textDecoration = "none";
        e.setAttribute("data-done", "false");
        e.style.color = "#333";
    }
} 