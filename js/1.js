


  function addTask() { 
    let task = document.getElementById('taskInput').value;
    let list = document.getElementById("taskList");
    let tasks = list.getElementsByTagName("li");
    if (task !== "") {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent === task) {
          document.getElementById("error_msg").innerHTML = "Task already used, please try again.";
          return;
        }
      }
      document.getElementById("error_msg").innerHTML = "";
      let add = document.createElement("li");
      add.textContent = task;
      list.appendChild(add);
      task = "";
    } else {
      document.getElementById("error_msg").innerHTML = "Please input a task to add.";
    }
  }

  function removeTask() {
    let task = document.getElementById("taskInput").value;
    let list = document.getElementById("taskList");
    let tasks = list.getElementsByTagName("li");
    if (task === "") {
      document.getElementById("error_msg").innerHTML = "Please input a task to remove.";
      return;
    }
    document.getElementById("error_msg").innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].textContent === task) {
        list.removeChild(tasks[i]);
        break;
      }
    }
    task = "";
  }

  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }



  /*stein saks papir */
  let humanScore = 0
let computerScore = 0
 
function play() {
    /*let player = document.getElementById("choice").value;
    */
    let player = "";
    if (document.getElementById("rock").checked) player="rock";
    else if (document.getElementById("paper").checked) player="paper";
    else if (document.getElementById("scissors").checked) player="scissors";
    
    document.getElementById("result").innerHTML = player;
    console.log(player);
    const choices = ["rock", "paper", "scissors"];
    let robot = choices[Math.floor(Math.random() * 3)];
    if (choices[0] != player && choices[1] != player && choices[2] != player) {
        document.getElementById("error_msg2").innerHTML = "Please choose your move";
        return;
    }
    document.getElementById("result").innerHTML = player;
    document.getElementById("error_msg2").innerHTML = "";
    if (player === robot) {
      document.getElementById("result").innerHTML = "Tie!";

    }
    else if (player === "rock" & robot === "scissors") {
      document.getElementById("result").innerHTML = "You won!";
      humanScore++;
    }
    else if (player === "paper" & robot === "rock") {
      document.getElementById("result").innerHTML = "You won!";
      humanScore++;
    }
    else if (player === "scissors" & robot === "paper") {
      document.getElementById("result").innerHTML = "You won!";
      humanScore++;
    }
    else {
      document.getElementById("result").innerHTML = "You lost!";
      computerScore++;
    }
    document.getElementById("pl_score").innerHTML = "Your score: " + humanScore;
    document.getElementById("cmp_score").innerHTML = "Computer score: " + computerScore;
    document.getElementById("comp").innerHTML = robot;
}

 