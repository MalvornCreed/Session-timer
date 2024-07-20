const breakText = document.getElementById("break-time");
const sessionText = document.getElementById("session-time");
const breakUp = document.getElementById("break-up");
const breakDown = document.getElementById("break-down");
const sessionUp = document.getElementById("session-up");
const sessionDown = document.getElementById("session-down");
const sessionAmount = document.getElementById("session-amount");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

breakText.textContent = "5";
sessionText.textContent = "25";
sessionAmount.textContent = `${sessionText.textContent}:00`;

let intervalId;
let timeLeft;
let isPaused = true;

breakUp.addEventListener("click", () => {
    breakText.textContent = parseInt(breakText.textContent) + 1;
});
breakDown.addEventListener("click", () => {
    if (parseInt(breakText.textContent) > 1) {
        breakText.textContent = parseInt(breakText.textContent) - 1;
    }
});
sessionUp.addEventListener("click", () => {
    sessionText.textContent = parseInt(sessionText.textContent) + 1;
    updateTimerDisplay();
});
sessionDown.addEventListener("click", () => {
    if (parseInt(sessionText.textContent) > 1) {
        sessionText.textContent = parseInt(sessionText.textContent) - 1;
        updateTimerDisplay();
    }
});

playButton.addEventListener("click", () => {
    if (isPaused) {
        isPaused = false;
        startTimer();
    }
});
pauseButton.addEventListener("click", () => {
    isPaused = true;
    clearInterval(intervalId);
});
resetButton.addEventListener("click", () => {
    isPaused = true;
    clearInterval(intervalId);
    sessionText.textContent = "25";
    breakText.textContent = "5";
    updateTimerDisplay();
});

function updateTimerDisplay() {
    timeLeft = parseInt(sessionText.textContent) * 60;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    sessionAmount.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    timeLeft = timeLeft || parseInt(sessionText.textContent) * 60;

    intervalId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            isPaused = true;
            // Optionally, you can add functionality to start the break timer here
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            sessionAmount.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

updateTimerDisplay();