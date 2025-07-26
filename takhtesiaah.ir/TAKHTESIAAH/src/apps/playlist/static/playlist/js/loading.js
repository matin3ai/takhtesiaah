document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
  
    if (loadingScreen) {
      // با کمی تأخیر، صفحه لودینگ رو به آرامی محو می‌کنه
      setTimeout(() => {
        loadingScreen.style.transition = "opacity 0.5s ease";
        loadingScreen.style.opacity = "0";
  
        // بعد از محو شدن، کامل حذف میشه
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 500);
      }, 300); // زمان انتظار اولیه (مثلاً 300ms)
    }
  });