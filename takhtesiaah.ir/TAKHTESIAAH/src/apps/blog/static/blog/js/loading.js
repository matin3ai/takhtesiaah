document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
      // Check if the loading screen exists
    if (loadingScreen) {
      // Hide the loading screen after a delay
      // Adjust the delay as needed (3000ms = 3 seconds)
      setTimeout(() => {
        loadingScreen.style.transition = "opacity 0.5s ease";
        loadingScreen.style.opacity = "0";
        // Wait for the transition to finish before removing the element
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 500);// Adjust this to match the transition duration
      }, 300); // Adjust the delay as needed
    }
  });