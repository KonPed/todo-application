//Problem: User interaction does not provide desired results.
//SolutionL Add interactivity so the user can manage tasks.
var addButton = document.getElementsByTagName("button")[0];
var taskInput = document.getElementById("new-task"); //#new-task
var incompleteTask = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
//Add a new task
var addTask = function() {
  console.log("Add task...");
  //When the button is pressed
  //Create a new list item with the text from the #new-task
  //Create an input checkbox
  //Create an input label
  //Create an input text
  //Create an input button with class edit
  //Create an input button with class delete
  //Each of these elements, needs modified and appended.
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  //When the edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else switch to .editMode
      //input value bocomes the label's text
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  //When the delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task Complete...");
  //When the checkbox is checked
    //Append the task list to the completed-tasks
}

//Mark a task as incomplete
var taskIncompleted = function() {
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list to the incomplete-tasks
}
