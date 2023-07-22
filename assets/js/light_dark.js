
const themeToggle = document.getElementById('checkbox');
    const root = document.documentElement;

    // Call the setup function on page load
    document.addEventListener('DOMContentLoaded', setupThemeToggle);

    function setupThemeToggle() {
      // Immediately toggle the theme on page load to match the initial checkbox state
      toggleTheme();

      themeToggle.addEventListener('change', () => {
        toggleTheme();
      });
    }

    function toggleTheme() {
      // Check the current theme
      const isDarkTheme = themeToggle.checked;

      // Toggle the theme by changing the CSS variable values
      // Toggle the theme by changing the CSS variable values
    if (isDarkTheme) {
        root.style.setProperty('--background-color', '#F8F8F8'); /* Light theme background color */
        root.style.setProperty('--main-color', '#000d15'); /* Light theme text color */
      } else {
        root.style.setProperty('--background-color', '#000d15'); /* Dark theme background color */
        root.style.setProperty('--main-color', '#D3D4D7'); /* Dark theme text color */
      }
    }

