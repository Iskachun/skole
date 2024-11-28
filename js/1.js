


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

 


/*todo list*/
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}