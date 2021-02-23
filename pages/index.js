const secondsHand = document.querySelector('.clock__hand_seconds');
const minutesHand = document.querySelector('.clock__hand_minutes');
const hoursHand = document.querySelector('.clock__hand_hours');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegress = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);
