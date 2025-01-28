function markCompleted(taskId) {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        taskElement.classList.toggle('completed');
    } else {
        console.error(`Task with ID "${taskId}" not found.`);
    }
}
