let correct;
let seconds = 120;
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
    clearInterval(checkInterval);
    let percentage = Math.round(correctAnswer / (incorrectAnswer + correctAnswer) * 100);
    let resultForAnswers;
    if (percentage >= 75) {
        resultForAnswers = "gerazanc"
    }
    // else if (){

    // }
    getElement("alertaccuracy").innerHTML = `duq cucaberel eq ${resultForAnswers} ardyunq `;
}

let checkInterval = setInterval(check, 50);
main();
timer();