let demo = document.getElementById("demo");

function getDate() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    if (milliseconds < 10) {
        milliseconds = `00${milliseconds}`;
    } else if (milliseconds < 100) {
        milliseconds = `0${milliseconds}`;
    } else if (milliseconds == 1000) {
        milliseconds = '000';
    }
    let clock = `${hours}:${minutes}:${seconds}:${milliseconds}`
    demo.innerText = clock;
}
setInterval(getDate, 100);
