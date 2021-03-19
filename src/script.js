const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

//Switch Mode Styles

//Switch Theme Dynamically
function switchTheme(event) {
  event.target.value
    ? document.documentElement.setAttribute("data-theme", "dark")
    : document.documentElement.setAttribute("data-theme", "light");
}

// Event Toggle Listener
toggleSwitch.addEventListener("change", switchTheme);

//Need to add full switch theme functionality
