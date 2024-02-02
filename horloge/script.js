function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');
    
    const hourDigit1 = document.getElementById('hour-digit-1');
    const hourDigit2 = document.getElementById('hour-digit-2');
    const minuteDigit1 = document.getElementById('minute-digit-1');
    const minuteDigit2 = document.getElementById('minute-digit-2');
    const secondDigit1 = document.getElementById('second-digit-1');
    const secondDigit2 = document.getElementById('second-digit-2');
    const currentTimeElement = document.getElementById('current-time');
    
    //Rotation des Aiguilles de l'Horloge
    const hourRotation = (360/12) * hour + (360/12) * (minute/60);
    const minuteRotation = (360/60) * minute + (360/60) * (second/60);
    const secondRotation = (360/60) * second;

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
    
    //Affichage de l'Heure en Chiffres 
    hourDigit1.textContent = formatDigit(Math.floor(hour / 10));
    hourDigit2.textContent = formatDigit(hour % 10);
    minuteDigit1.textContent = formatDigit(Math.floor(minute / 10));
    minuteDigit2.textContent = formatDigit(minute % 10);
    secondDigit1.textContent = formatDigit(Math.floor(second / 10));
    secondDigit2.textContent = formatDigit(second % 10);

    // Affichage de l'Heure Exacte en Texte
    const formattedTime = `${formatDigit(hour)}:${formatDigit(minute)}:${formatDigit(second)}`;
    currentTimeElement.textContent = formattedTime;
    currentTimeElement.style.color = `rgb(${hourRotation / 3.6}, ${minuteRotation / 6}, ${secondRotation / 6})`;
}

function formatDigit(digit) {
    return digit < 10 ? `0${digit}` : digit;
}

function startClock() {
    setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', startClock);
