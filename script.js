// Dark mode toggle
const darkToggle = document.getElementById("darkmode-toggle");
const body = document.body;

// Load saved preference
if (localStorage.getItem("darkmode") === "enabled") {
  body.classList.add("darkmode");
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode on click
darkToggle.addEventListener("click", () => {
  body.classList.toggle("darkmode");

  if (body.classList.contains("darkmode")) {
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>'; // switch to sun icon
    localStorage.setItem("darkmode", "enabled");
  } else {
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>'; // switch to moon icon
    localStorage.setItem("darkmode", "disabled");
  }
});
