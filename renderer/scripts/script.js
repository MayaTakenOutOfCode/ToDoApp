const task = document.getElementById("taskToAdd");
const taskList = document.getElementById("tasks");
const btn = document.getElementById('addTaskBtn');


btn.addEventListener('click', () => {
    const li = document.createElement("li");
    li.classList.add("taskListWithTasks");   
    const text = document.createTextNode(task.value);

    const br = document.createElement("br");

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("doneButton");
    doneBtn.style.backgroundColor = "#45e68d";
    doneBtn.style.color = "black"
    doneBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
        li.style.textDecoration = "line-through"
        li.style.color = " #45a68b"
        li.style.fontWeight = "600"
    });

    li.appendChild(text);
    li.appendChild(br);
    li.appendChild(br);
    li.appendChild(doneBtn);
    taskList.appendChild(li);

    task.value = "";
})