var mini = true;
function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        this.mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "85px";
        document.getElementById("main").style.marginLeft = "85px";
        this.mini = true;
    }
}


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
