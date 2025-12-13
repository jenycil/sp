// --- Scroll to Top Functionality ---
const scrollTopBtn = document.getElementById('scrollTop');

// Show or hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {  // Detect scroll position with window.scrollY
    scrollTopBtn.style.display = 'block';  // Show button
  } else {
    scrollTopBtn.style.display = 'none';   // Hide button
  }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- Dark Mode Toggle Functionality ---
const toggleDarkMode = () => {
  // Toggle the 'darkmode' class on the body
  document.body.classList.toggle('darkmode');

  // Save dark mode preference to localStorage
  const isDarkMode = document.body.classList.contains('darkmode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Add event listener for dark mode button
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', toggleDarkMode);
}

// --- Dark Mode Persistence (via LocalStorage) ---
window.addEventListener('DOMContentLoaded', () => {
  // Check if dark mode was previously enabled in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('darkmode');  // Enable dark mode on page load
  }
});

// --- Smooth Scrolling for All Links ---
document.documentElement.style.scrollBehavior = 'smooth';  // Enable smooth scrolling globally for all anchor links

