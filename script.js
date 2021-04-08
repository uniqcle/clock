setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-minute-hand]');
const secHand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();

    const secondRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondRatio + currentDate.getMinutes())/ 60;
    const hourRatio = (minutesRatio + currentDate.getHours() ) / 12;

    setRotation(secHand, secondRatio);
    setRotation(minHand, minutesRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();