var isActive = false;
var windowElement = document.getElementById('window-menu');

function MenuOpen() {
    isActive = !isActive;
    windowElement.style.display = isActive ? "block" : "none";
}

function MenuClose() {
    isActive = !isActive;
    windowElement.style.display = isActive ? "block" : "none";
}
