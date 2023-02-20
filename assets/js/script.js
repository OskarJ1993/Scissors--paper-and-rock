const pScoreCountEL = document.getElementById("player-score");
const cCountEL = document.getElementById("computer-score");
const cMoveImageEl = document.getElementById("computer-move-img");
const moveResult = document.getElementById("move-result");
const whoWinsRound = document.getElementById("who-wins");
const characterCards = document.getElementsByClassName("character-card");

let playerScore = 0;
let computerScore = 0;

/**
 * Listning to click Rock, papper or scissors from user
 */

for (let characterCard of characterCards) {
  characterCard.addEventListener("click", function (event) {
    let clickedCard = event.currentTarget;
    let character = clickedCard.dataset.character;
    return winGene(character);
  });
}

/**
 * Function that makes computer choose rock, scissors or paper.
 */

function compGenerete() {
  let compChoice = Math.floor(Math.random() * 3);
  let smallScreen = window.matchMedia("(max-width: 350px)");
  let middleSmallScreen = window.matchMedia("(max-width: 500px)");
  let middleScreen = window.matchMedia("(max-width: 950px)");
  if (compChoice === 0) {
    moveResult.textContent = "Computer Is Choosing Rock!";
    cMoveImageEl.src = "assets/images/rock.jpg";
 


    return "Rock";
  } else if (compChoice === 1) {
    moveResult.textContent = "Computer Is Choosing Scissors!";
    cMoveImageEl.src = "assets/images/scissors.jpg";

  
    return "Scissors";
  } else {
    moveResult.textContent = "Computer Is Choosing Papper!";
    cMoveImageEl.src = "assets/images/papper.jpg";

    return "Paper";
  }


}

/**
 * Function that decides with a if/else who winns.
 * Adding who wins to the scoreboard and variables.
 */

function winGene(event) {
  let whoWin = compGenerete();
  let whoWins = event + whoWin;

  if (
    whoWins === "ScissorsScissors" ||
    whoWins === "PaperPaper" ||
    whoWins === "RockRock"
  ) {
    whoWinsRound.textContent = "It Is A Draw!";
  } else if (
    whoWins === "RockScissors" ||
    whoWins === "PaperRock" ||
    whoWins === "ScissorsPaper"
  ) {
    whoWinsRound.textContent = "You Win!";
    playerScore++;
  } else if (
    whoWins === "RockPapper" ||
    whoWins === "ScissorsRock" ||
    whoWins === "PaperScissors"
  ) {
    whoWinsRound.textContent = "You Lose!";
    computerScore++;
  }

  pScoreCountEL.textContent = playerScore;
  cCountEL.textContent = computerScore;
}
