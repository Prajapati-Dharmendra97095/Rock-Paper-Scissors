// Rock Paper Scissors Game:-
let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#computer-score");

const gencomputerchoice = () => {
  const options = ["Dharmendra", "Suraj", "Niraj"];
  const randomidx = Math.floor(Math.random() * 3);
  return options[randomidx];
};
const Draw = () => {
  //   console.log("Game was Draw.");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userchoice, computerchoice) => {
  if (userWin) {
    userscore++;
    userscorepara.innerText = userscore;
    // console.log("You Win!");
    msg.innerText = `You Win! Your ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    computerscorepara.innerText = computerscore;
    // console.log("You lose");
    msg.innerText = `You lost ${computerchoice} beats Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  //   console.log("User choice =", userchoice);
  const computerchoice = gencomputerchoice();
  //   console.log("Computer choice =", computerchoice);
  if (userchoice === computerchoice) {
    Draw();
  } else {
    let userWin = true;
    if (userchoice === "Dharmendra") {
      userWin = computerchoice === "Suraj" ? false : true;
    } else if (userchoice === "Suraj") {
      userWin = computerchoice === "Niraj" ? false : true;
    } else {
      userWin = computerchoice === "Niraj" ? false : true;
    }
    showWinner(userWin, userchoice, computerchoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
