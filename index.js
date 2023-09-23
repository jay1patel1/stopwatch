let updateTime = document.querySelector('#print');
let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');

let seconds = 0;
let minutes = 0;
const startTimer = function () {
    if (seconds < 59) {
        seconds = seconds + 1;
    } else if (seconds === 59) {
        seconds = 0;
        minutes = minutes + 1;
    }
    function converter (number) {
        return number.toString().padStart(2, '0');
    }

    let outputTime = `${converter(minutes)}:${converter(seconds)}`;
    // console.log(outputTime);
    updateTime.innerHTML = outputTime;
}

let intervalFunction;
const timerStart = function () {
    intervalFunction = setInterval(startTimer, 1000);
}
const timeStop = function () {
    clearTimeout(intervalFunction);
    seconds = 0;
    minutes = 0;
}

startButton.addEventListener('click',timerStart);
stopButton.addEventListener('click',timeStop);

let a = Math.floor(Math.random() * hexCodeContainer.length);