function markCompleted(taskId) {
    const taskElement = document.getElementById(taskId);
    taskElement.classList.toggle('completed');
}
