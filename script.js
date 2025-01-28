// Mark an event as completed
function markCompleted(taskId) {
    var task = document.getElementById(taskId);
    var button = task.querySelector("button");
    
    // Add the 'completed' class for task highlighting
    task.classList.add("completed");
    
    // Change button style when completed
    button.classList.add("completed");
}

// Mark the whole day as completed
function markDayCompleted(dayId) {
    var day = document.getElementById(dayId);
    
    // Get all tasks of the day
    var tasks = day.querySelectorAll(".task");
    
    tasks.forEach(function(task) {
        task.classList.add("completed");  // Mark each task as completed
        var button = task.querySelector("button");
        button.classList.add("completed"); // Mark button as completed
    });
    
    // Disable the 'Day Completed' button after completion
    var dayButton = day.querySelector("button");
    dayButton.classList.add("completed");
    dayButton.disabled = true;
}
