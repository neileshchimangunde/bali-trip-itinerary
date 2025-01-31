function markCompleted(button) {
    const taskElement = button.parentElement;
    button.classList.toggle("selected");
    taskElement.classList.toggle("completed");

    // Check if all tasks in the day are completed
    const dayElement = taskElement.closest(".day");
    const allTasks = dayElement.querySelectorAll(".task");
    const completedTasks = dayElement.querySelectorAll(".task.completed");

    if (allTasks.length === completedTasks.length) {
        dayElement.classList.add("day-completed");
    } else {
        dayElement.classList.remove("day-completed");
    }
}

function toggleDetails(titleElement) {
    const taskDetails = titleElement.nextElementSibling;
    taskDetails.classList.toggle("show-details");
}
