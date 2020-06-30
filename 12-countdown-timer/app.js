const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();

const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0 );

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins}am`;
const futureTime = futureDate.getTime();

getRemainingTime = () => {
  const currentTime = new Date().getTime();
  const diff = futureTime - currentTime;
  // 1sec = 1000ms
  // 1min = 60 sec
  // 1hour = 60 mins
  // 1day = 24hours

  // values in milliseconds

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000

  // Calculate all values

  const daysLeft = Math.floor(diff / oneDay);
  let hoursLeft = Math.floor((diff % oneDay) / oneHour);
  let minutesLeft = Math.floor((diff % oneHour) / oneMinute);
  let secondsLeft = Math.floor((diff % oneMinute) / 1000);

  // Set values array

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];
  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if(diff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expires">sorry, this giveaway has expired</h4>`;
  }
}

// Countdown
let countdown = setInterval(getRemainingTime, 1000);

// Set initial values
getRemainingTime();
