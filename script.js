// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTop');

// Show or hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle('darkmode');
};

// Add event listener for dark mode button (if you have a button for this)
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
  darkModeBtn.addEventListener('click', toggleDarkMode);
}
