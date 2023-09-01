let currentMode = localStorage.getItem('mode') || 'dark'; // Get the mode from local storage or default to 'dark'

const body = document.querySelector('body');
const Mode = document.querySelector('.Mode');
var icons = document.querySelectorAll('i');

function setDarkMode() {
    body.style.backgroundColor = '#0b1416';
    body.style.color = 'white';
    Mode.style.color = 'white';
    Mode.textContent = 'LightMode';
    icons.forEach(function (icon) {
        icon.style.color = 'white';
    });
}

function setLightMode() {
    body.style.backgroundColor = '#f5fefd';
    body.style.color = 'black';
    Mode.style.color = 'black';
    Mode.textContent = 'DarkMode'
    icons.forEach(function (icon) {
        icon.style.color = 'black';
    });
}

// Set the initial mode based on the stored value
if (currentMode === 'dark') {
    setDarkMode();
} else {
    setLightMode();
}

function changeMode() {
    if (currentMode === 'light') {
        setDarkMode();
        currentMode = 'dark';
    } else {
        setLightMode();
        currentMode = 'light';
    }

    // Store the current mode in local storage
    localStorage.setItem('mode', currentMode);
}

    function underlineItem() {
        var listItem = event.target.closest('li');
    // Check if a <li> was found
    if (listItem) {
        if (event.target.checked) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'gray';
        } else {
            listItem.style.textDecoration = 'none';
            listItem.style.color = 'black';
        }
    }
    
    }