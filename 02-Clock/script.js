const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = time.getMinutes();
  const minuteDegrees = (minutes / 60) * 360;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = time.getHours();
  const hourDegrees = (hours / 12) * 360;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
