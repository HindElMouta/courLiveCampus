function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const hourRotation = (hour + minute / 60) * 360 / 12;
    const minuteRotation = (minute + second / 60) * 360 / 60;
    const secondRotation = second * 360 / 60;

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
    currentTimeElement.textContent = `${formatDigit(hour)}:${formatDigit(minute)}:${formatDigit(second)}`;

}

function startClock() {
    setInterval(updateClock, 1000);
}

function formatDigit(digit) {
    return digit < 10 ? `0${digit}` : digit;
}

document.addEventListener('DOMContentLoaded', startClock);
