document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskModal = document.getElementById("taskModal");
  const closeModal = taskModal.querySelector(".close");
  const saveTaskBtn = document.getElementById("saveTaskBtn");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");

  addTaskBtn.onclick = () => {
      taskModal.style.display = "block";
  };

  closeModal.onclick = () => {
      taskModal.style.display = "none";
      clearInputs();
  };

  window.onclick = (event) => {
      if (event.target === taskModal) {
          taskModal.style.display = "none";
          clearInputs();
      }
  };

  saveTaskBtn.onclick = () => {
      const title = taskTitle.value.trim();
      const description = taskDescription.value.trim();

      if (title) {
          const task = document.createElement("div");
          task.className = "task";
          task.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
          taskList.appendChild(task);
          taskModal.style.display = "none";
          clearInputs();
      } else {
          alert("Task title cannot be empty!");
      }
  };

  function clearInputs() {
      taskTitle.value = "";
      taskDescription.value = "";
  }
});
