const darkToggle = document.getElementById("darkmode-toggle");
const body = document.body;
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

// Load saved preference for dark mode
if (localStorage.getItem("darkmode") === "enabled") {
  body.classList.add("darkmode");
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode on click
darkToggle.addEventListener("click", () => {
  body.classList.toggle("darkmode");

  if (body.classList.contains("darkmode")) {
    darkToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Switch to sun icon
    localStorage.setItem("darkmode", "enabled");
  } else {
    darkToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Switch to moon icon
    localStorage.setItem("darkmode", "disabled");
  }

  // Adding transition for smooth background-color change
  setTimeout(() => {
    body.style.transition = 'background-color 0.3s, color 0.3s';
  }, 10);
});

// Toggle burger menu on click
menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuIcon.classList.toggle("active");
});
