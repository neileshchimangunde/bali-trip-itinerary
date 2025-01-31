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

document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task');
    const popup = document.getElementById('event-popup');
    const closeButton = document.querySelector('.close-button');

    tasks.forEach(task => {
        task.addEventListener('click', () => {
            const description = task.getAttribute('data-description') || 'No description available';
            const time = task.getAttribute('data-time') || 'N/A';
            const mapsLink = task.getAttribute('data-maps') || '#';
            const references = task.getAttribute('data-references') || 'No references available';

            document.getElementById('event-description').textContent = `Description: ${description}`;
            document.getElementById('event-time').textContent = `Time: ${time}`;
            document.getElementById('maps-link').href = mapsLink;
            document.getElementById('event-references').textContent = `References: ${references}`;

            popup.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
