const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const htmlEl = document.documentElement;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  toggle.innerText = `${
    htmlEl.classList.contains("dark") ? "Light" : "Dark"
  } mode`;
});

const setTime = () => {
  const time = new Date();
  const date = time.getDate();
  const day = time.getDay();
  const month = time.getMonth();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const hourDegree = (hour % 12) * 30 + minute / 2;
  const minuteDegree = minute * 6;
  const secondDegree = second * 6;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDegree}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDegree}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDegree}deg)`;
  timeEl.innerText = `${hour}:${minute < 10 ? `0${minute}` : minute}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

setTime();
setInterval(setTime, 1000);
