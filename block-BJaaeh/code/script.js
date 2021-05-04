const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const secs = now .getSeconds();
    const secDegrees = ((secs / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg)`
}
setInterval(setDate, 1000)