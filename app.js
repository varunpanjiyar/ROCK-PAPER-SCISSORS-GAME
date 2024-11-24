let userScore=0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
 const msg=  document.querySelector("#msg");

 const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const option = ["rock", "paper" ,"scissor"];
   const ranIdx = Math.floor(Math.random() * 3);
    return option[ranIdx];
};

const drawGame = () =>{
  //  console.log("game was draw");
    msg.innerText = "Game was Draw. play again !";
    msg.style.backgroundColor= "#081b31";
};

const showWinner = (userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       // console.log("you win !")
        msg.innerText = `you win !  Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
          compScorePara.innerText = compScore;
       // console.log("you loose!");
         msg.innerText = `you loose ! ${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor = "red";
    }

    }



const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
 // generate computer choice --modular (way of programing)

 const compChoice = genCompChoice();
 console.log("comp choice = ",compChoice );

 if(userChoice=== compChoice){
    //draw game 
    drawGame();

 } else{
    let userWin = true;
    if(userChoice=== "rock"){
        // scissor , paper

        userWin = compChoice==="paper" ? false : true;

    } else if(userChoice==="paper"){
        // scissor, rock
        userWin =  compChoice==="scissor" ? false : true;
    } else {
        // rock paper
       userWin= compChoice ==="rock" ?false :true;
    }
    showWinner(userWin ,userChoice,compChoice)
 }

};

choices.forEach((choice) => {

    choice.addEventListener("click", ()  => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice)
        

    });
});