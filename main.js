const models = [
  {
    "car": "m5.jpg",
    "name": "BMW M5 F90"
  },
  {
    "car": "m5.jpg",
    "name": "BMW M5 F90"
  },
]






let seconds = 15;
let correctAnswer = 0;
let incorrectAnswer = 0;
function getElement(id) {
  return document.getElementById(id);
}
function timer() {
  setTimeout(finish, seconds * 1000);
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 3) getElement("time").style.color = "#ff0000";
  }, 1000);
}


timer();