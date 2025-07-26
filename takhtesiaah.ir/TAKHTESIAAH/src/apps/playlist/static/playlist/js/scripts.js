// انتخاب المنت‌های صوتی (ممکنه وجود نداشته باشن)
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const restartBtn = document.getElementById('restart-btn');
const currentTimeSpan = document.getElementById('current-time');
const totalTimeSpan = document.getElementById('total-time');
const seekBar = document.getElementById('seek-bar');

// انتخاب منوی همبرگری (ممکنه وجود نداشته باشه)
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

let isPlaying = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

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