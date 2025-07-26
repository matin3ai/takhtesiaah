const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const restartBtn = document.getElementById('restart-btn');
const currentTimeSpan = document.getElementById('current-time');
const totalTimeSpan = document.getElementById('total-time');
const seekBar = document.getElementById('seek-bar');
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const menuSpans = document.querySelectorAll(".hamburger-menu span");

// Check if the hamburger menu and nav menu exist before adding event listeners
if (hamburgerMenu && navMenu && menuSpans.length === 3) {
    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        menuSpans[0].classList.toggle("rotate-top");
        menuSpans[1].classList.toggle("hide-middle");
        menuSpans[2].classList.toggle("rotate-bottom");
    });
}

// Variable to track if the audio is currently playing
let isPlaying = false;

// Function to format time in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Check if the audio player and buttons exist before adding event listeners
if (audioPlayer && playPauseBtn && restartBtn && currentTimeSpan && totalTimeSpan && seekBar) {

    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> پخش ';
        } else {
            audioPlayer.play();
            playPauseBtn.innerHTML = '<span class="material-symbols-outlined">pause</span> توقف ';
        }
        isPlaying = !isPlaying;
    });

    restartBtn.addEventListener('click', function () {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">pause</span> توقف ';
        isPlaying = true;
    });

    audioPlayer.addEventListener('canplaythrough', function () {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
        seekBar.max = audioPlayer.duration;
    });

    audioPlayer.addEventListener('timeupdate', function () {
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
        seekBar.value = audioPlayer.currentTime;
    });

    audioPlayer.addEventListener('loadedmetadata', function () {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
        seekBar.max = audioPlayer.duration;
    });

    seekBar.addEventListener('input', function () {
        audioPlayer.currentTime = seekBar.value;
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('ended', function () {
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> پخش ';
        isPlaying = false;
    });
}



// Contact Modal Functionality
// Ensure the contact link and modal exist before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");
    const modal = document.getElementById("contact-modal");
    const closeBtn = modal.querySelector(".close-btn");
  
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