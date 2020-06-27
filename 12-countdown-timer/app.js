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

giveaway.innerHTML = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins}am`;

const currentTime = new Date().getTime();
const futureTime = futureDate.getTime();

// Extract days, hours, minutes and secs
const diff = futureTime - currentTime;

// 1 sec = 1000ms
// 1 min = 60 sec
// 1 hour = 60 mins
// 1 day = 24*60*60*1000

// Num of days

const days = Math.floor(diff/(24*60*60*1000));
console.log(diff/(24*60*60*1000));
console.log(days);
const remainder = diff%(24*60*60*1000);
console.log(remainder);
