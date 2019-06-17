var toDo = new ToDo();

//business logic for ToDo which stores TaskDetail within array taskDetails and gives unique ID for each submit
function ToDo() {
  this.taskDetails = [],
  // this.id = [],
  this.currentId = 0
}

//on form submit, pushes user input to taskDetails array in toDo object and increments currentId value
ToDo.prototype.addTaskDetail = function(taskDetail) {
  taskDetail.id = this.assignId();
  // this.id.push(id);
  // this.assignId();
  this.taskDetails.push(taskDetail);
}

//increments currentId value
ToDo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//business logic for TaskDetail constructor
function TaskDetail(task) {
  this.task = task
  // this.completeBy = completeBy
};

//function that removes any tasks the user has identified as completed (.taskComplete class)
var removeComplete = function(){
  $(".taskComplete").text("");
}


$(function(){
  $("#userTask").submit(function(event){
    event.preventDefault();
    document.addEventListener("reset", removeComplete); //adds event listener for button linked to removeComplete function

    var userInput = $("#userInput").val();

    toDo.addTaskDetail(userInput); //calls addTaskDetail prototype method on toDo object and gives an argument of userInput

    document.getElementById('userInput').value=''; //resets form field after user submit

    $("#toDoList").append('<span id=\"li' + (toDo.currentId) + '\"><li>' + toDo.taskDetails[toDo.currentId-1] + '</li></span>');

    $("#li" + (toDo.currentId)).click(function(){
      $(this).addClass("taskComplete"); //adds .taskComplete class to the specific li user has clicked
    });
  });
});
