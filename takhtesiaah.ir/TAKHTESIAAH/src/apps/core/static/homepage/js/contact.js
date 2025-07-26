document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const modal = document.getElementById("contact-modal");
    const closeBtn = modal.querySelector(".close-btn");
    // Check if the contact link and modal exist before adding event listeners
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });