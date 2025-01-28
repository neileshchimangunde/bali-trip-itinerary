function markCompleted(taskId) {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        taskElement.classList.toggle('completed');
    } else {
        console.error(`Task with ID "${taskId}" not found.`);
    }
}

function markDayCompleted(dayId) {
    const dayElement = document.querySelector(`#${dayId}`);
    if (dayElement) {
        const tasks = dayElement.querySelectorAll('.task');
        tasks.forEach(task => task.classList.add('completed'));
    } else {
        console.error(`Day with ID "${dayId}" not found.`);
    }
}
