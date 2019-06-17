// var userInput = "";
var toDo = new ToDo();

function ToDo() {
  this.taskDetails = [],
  this.currentId = 0
}

ToDo.prototype.addTaskDetail = function(taskDetail) {
  taskDetail.id = this.assignId();
  this.taskDetails.push(taskDetail);
}

ToDo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function TaskDetail(task) {
  this.task = task
  // this.completeBy = completeBy
};

$(function(){

  $("#userTask").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();

    toDo.addTaskDetail(userInput);

    document.getElementById('userInput').value='';

    $("#toDoList").append('<span id=\"li' + (toDo.currentId) + '\"><li>' + toDo.taskDetails[toDo.currentId-1] + '</li></span>');

    $("#li" + (toDo.currentId)).click(function(){
      $(this).addClass("taskComplete");
    });
  });
});
