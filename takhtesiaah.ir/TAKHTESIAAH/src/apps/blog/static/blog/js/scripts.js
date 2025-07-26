// JavaScript code for audio player and hamburger menu functionality
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const restartBtn = document.getElementById('restart-btn');
const currentTimeSpan = document.getElementById('current-time');
const totalTimeSpan = document.getElementById('total-time');
const seekBar = document.getElementById('seek-bar');
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const menuSpans = document.querySelectorAll(".hamburger-menu span");

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
    // Initialize the total time display
    // Initialize the audio player
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

    // Restart button functionality
    restartBtn.addEventListener('click', function () {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">pause</span> توقف ';
        isPlaying = true;
    });

    // Update current time and total time when the audio is ready
    audioPlayer.addEventListener('canplaythrough', function () {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
        seekBar.max = audioPlayer.duration;
    });

    // Update current time and seek bar as the audio plays
    audioPlayer.addEventListener('timeupdate', function () {
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
        seekBar.value = audioPlayer.currentTime;
    });

    // Update total time when the audio metadata is loaded
    audioPlayer.addEventListener('loadedmetadata', function () {
        totalTimeSpan.textContent = formatTime(audioPlayer.duration);
        seekBar.max = audioPlayer.duration;
    });

    // Seek bar functionality
    seekBar.addEventListener('input', function () {
        audioPlayer.currentTime = seekBar.value;
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    });

    // Update play/pause button when the audio ends
    audioPlayer.addEventListener('ended', function () {
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">play_arrow</span> پخش ';
        isPlaying = false;
    });
}