const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const optionsButton = document.querySelectorAll('.options button');
const choicesSection = document.querySelector('.choices');
const playerChoiceSpan = document.querySelector('.player-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const resultText = document.querySelector('.result-text');
const resetGameButton = document.querySelector('.reset-game');

let playerPoints = 0;
let playerChoice = "";
let compPoints = 0;
let compChoice = "";

function setGame (){
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = "Choose your card";
    resetGameButton.classList.remove("active");
    resultText.classList.remove('comp');
    resultText.classList.remove('draw');
    resultText.classList.remove('player');
}

window.onload = setGame();

function playerSelect(event){
    optionsButton.forEach((button) => button.classList.remove("active"));
    // console.log(event.target.dataset.option);   //target i tego rzeczy
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");
    resetGameButton.classList.add("active");
    compSelect();
}

const availableCompChoices = ["ROCK", "PAPER", "SCISSORS"];

function compSelect(){
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);    //wybranie randomowego indexa z tablicy
    compChoice = availableCompChoices[randomIndex];
    checkResult();   
}

function checkResult(){
    let winner = '';

    if(playerChoice === "ROCK" & compChoice === "SCISSORS" || playerChoice === "PAPER" && compChoice === "ROCK" || playerChoice === "SCISSORS" && compChoice === "PAPER"){
        winner = "You won!";
        resultText.classList.remove('comp');
        resultText.classList.remove('draw');
        resultText.classList.add('player');
        playerPoints++;
        playerPointsSpan.innerHTML = playerPoints;
    }
    else if(playerChoice === compChoice){
        winner = "DRAW!";
        resultText.classList.remove('player');
        resultText.classList.remove('comp');
        resultText.classList.add('draw');
    }
    else{
        winner = "You lost!"
        resultText.classList.remove('player');
        resultText.classList.remove('draw');
        resultText.classList.add('comp');
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    };

    choicesSection.classList.add("active");
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
    resultText.innerHTML =winner;
}

function resetGame(){
    choicesSection.classList.remove("active");
    optionsButton.forEach((button) => button.classList.remove("active"));
    playerPoints = 0;
    compPoints = 0;
    setGame();
}

optionsButton.forEach((button) => button.addEventListener('click', playerSelect));

resetGameButton.addEventListener('click', resetGame);