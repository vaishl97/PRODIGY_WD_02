let timer;
let startTime;
let elapsedTime = 0;
let lapTimes = [];

const timeDisplay = document.querySelector('.time-display');
const lapList = document.getElementById('lap-times');

function formatTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    lapList.innerHTML = '';
    lapTimes = [];
}

function lapTimer() {
    lapTimes.push(formatTime(elapsedTime));
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapTimes.length}: ${lapTimes[lapTimes.length - 1]}`;
    lapList.prepend(lapItem);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);

