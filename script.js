function markCompleted(taskId) {
    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        taskElement.classList.toggle('completed'); // Toggle 'completed' class
    } else {
        console.error(`Task with ID "${taskId}" not found.`);
    }
}
