
function markCompleted(button) {
    const taskElement = button.parentElement;
    taskElement.classList.toggle("completed");
    button.classList.toggle("selected");

    checkDayCompletion(taskElement.closest('.day'));
}

function checkDayCompletion(dayElement) {
    const tasks = dayElement.querySelectorAll('.task');
    const allCompleted = Array.from(tasks).every(task => task.classList.contains('completed'));

    if (allCompleted) {
        dayElement.classList.add("day-completed");
    } else {
        dayElement.classList.remove("day-completed");
    }
}
