function markCompleted(taskId) {
    const taskElement = document.getElementById(taskId);
    const button = taskElement.querySelector("button");
    button.classList.toggle("selected");
    taskElement.classList.toggle("completed");
}

function markDayCompleted(dayId) {
    const dayElement = document.querySelector(`#${dayId}`);
    if (dayElement) {
        const tasks = dayElement.querySelectorAll('.task');
        tasks.forEach(task => {
            task.classList.add('completed');
            task.querySelector("button").classList.add("selected");
        });
    }
}
