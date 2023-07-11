let correct;
let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;
function getElement(id) {
    return document.getElementById(id);
}
function getRandomCountry() {
    return models[Math.round(Math.random() * (models.length - 1))];
}
function main() {
    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let coun = getRandomCountry();
        if (options.indexOf(coun) === -1) {
            options.push(coun);
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    getElement("flag").src = correct.model;
}
function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds === 5) getElement("time").style.color = "#ff0000";
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectAnswer++;
    }
    main();
}
function finish() {
    let resultForAnswers;
    clearInterval(checkInterval);
    getElement("alert").style.display = "block";
    getElement("card").style.display = "none";
    getElement("alertscore").innerHTML = correctAnswer;
    let percentage = Math.round(correctAnswer / (incorrectAnswer + correctAnswer) * 100);
    if (isNaN(percentage)) {
        resultForAnswers = Nothing;
    }
    else {
        if (percentage >= 75 && percentage < 95) {
            resultForAnswers = "Good"
        }
        else if (percentage >= 95) {
            resultForAnswers = "Excellent"
        }
        else if (percentage >= 15) {
            resultForAnswers = "Bad"
        }
        else{
            resultForAnswers = "Very Bad"
        }
    }
    getElement("alertscore1").innerHTML = `You have shown ${resultForAnswers} Result `;
}
function refresh(){
    location = location
}
let checkInterval = setInterval(check, 50);
main();
timer();