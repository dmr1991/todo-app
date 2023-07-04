import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";
(() => {
  const btn = document.querySelector("[data-form-btn]");
  const addTodo = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const taskValue = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    const iconTask = document.createElement("div");
    iconTask.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = taskValue;
    iconTask.appendChild(titleTask);
    task.appendChild(iconTask);
    list.appendChild(task);
    task.appendChild(deleteIcon());
  };
  btn.addEventListener("click", addTodo);
})();

