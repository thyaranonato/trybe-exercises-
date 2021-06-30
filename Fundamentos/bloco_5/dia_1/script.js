let header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

let emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "salmon";

let emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "purple";
}

let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "yellow";

let noEmergencyTasksHeaders = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "black";
}

let footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
