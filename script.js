// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else {
    // Default theme if no saved preference
    htmlElement.setAttribute('data-theme', 'light');
}

// Show/Hide icons based on the current theme
function updateIconVisibility() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Initial icon visibility update
updateIconVisibility();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon visibility after theme change
    updateIconVisibility();
    
    // Typing animation reset on theme change
    const info = document.querySelector('.info p');
    if (info) {
        info.style.animation = 'none';
        void info.offsetWidth; // Trigger reflow to reset animation
        info.style.animation = null; // Restore animation
    }
});
