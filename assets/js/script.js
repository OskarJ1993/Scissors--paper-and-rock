let player_score_count_EL = document.getElementById("player-score");
let computer_score_count_EL = document.getElementById("computer-score");
let chooseRock_EL = document.getElementById("rock-img");
let choosePapper_EL = document.getElementById("papper-img");
let chooseScissors_EL = document.getElementById("scissors-img");
let computerMoveImage_el = document.getElementById("computer-move-img")
let moveResult = document.getElementById("move-result");
let whoWinsRound = document.getElementById("who-wins");


let playerScore = 0;
let computerScore = 0;


/**
 * Function that makes computer choose rock, scissors or paper.
 */

function compGenerete() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        moveResult.textContent = "Computer Is Choosing Rock";
        computerMoveImage_el.src = "../assets/images/rock.jpg";

        return "Rock";

    } else if (compChoice === 1) {
        moveResult.textContent = "Computer Is Choosing Scissors";
        computerMoveImage_el.src = "../assets/images/scissors.jpg";
        return "Scissors";
    } else {
        moveResult.textContent = "Computer Is Choosing Papper";
        computerMoveImage_el.src = "../assets/images/papper.jpg";
        return "Papper";
    }
}


    /**
     * Function that decides with a if/else who winns. 
     * Adding who wins to the scoreboard and variables.
     */

function whoWins(event) {
    let whoWin = compGenerete();
    let whoWins = event + whoWin;

    if (whoWins === "ScissorsScissors" | whoWins === "PapperPapper" | whoWins === "RockRock") {
        whoWinsRound.innerText = "It Is A Draw";
    } else if (whoWins === "RockScissors" | whoWins === "PapperRock" | whoWins === "ScissorsPapper") {
        whoWinsRound.innerText = "You Win!"
        playerScore ++;
    } else if (whoWins === "RockPapper" | whoWins === "ScissorsRock" | whoWins === "PapperScissors") {
        whoWinsRound.innerText = "You Lose!"
        computerScore++;
    }

    player_score_count_EL.textContent = playerScore;
    computer_score_count_EL.textContent = computerScore;
}

 /**
  * Listning to click Rock, papper or scissors from user
  */

chooseScissors_EL.addEventListener("click", function(){
     return whoWins("Scissors");
}) 

choosePapper_EL.addEventListener("click", function() {
    return whoWins("Papper")
   
})

chooseRock_EL.addEventListener("click", function() {
    return whoWins("Rock")
    
})

