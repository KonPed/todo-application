//Problem: User interaction does not provide desired results.
//SolutionL Add interactivity so the user can manage tasks.
var addButton = document.getElementById("add");
var taskInput = document.getElementById("new-task"); //#new-task
var incompleteTask = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");
//Add a new task
function addTask() {
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
function editTask() {
  console.log("Edit task...");
  //When the edit button is pressed
    //if the class of the parent is .editMode
      //Switch from .editMode
      //label text become the input's value
    //else switch to .editMode
      //input value bocomes the label's text
}

//Delete an existing task
function deleteTask() {
  console.log("Delete task...");
  //When the delete button is pressed
    //Remove the parent list item from the ul
}

//Mark a task as complete
function taskCompleted() {
  console.log("Task Complete...");
  //When the checkbox is checked
    //Append the task list to the completed-tasks
}

//Mark a task as incomplete
function taskIncompleted() {
  console.log("Task incomplete...");
  //When the checkbox is unchecked
    //Append the task list to the incomplete-tasks
}

function bindEventTasks(taskListItem, checkboxEventHandler) {
  console.log("Bind list item events");
  //select it's children
  //bind editTask to edit button
  //bind deleteTask to delete button
  //bind checkboxEventHandler to checkbox
}

//Cycle over incompleteTask ul li items
  //for each list item
  for (var i = 0; i < incompleteTask.children.length; i++) {
    //bind event to list item's children (taskCompleted)
    bindEventTasks(incompleteTask.children[i], taskCompleted);
  }

//Cycle over completedTasks ul li items
    //for each list item
    for (var i = 0; i < completedTasks.children.length; i++) {
      bindEventTasks(completedTasks.children[i], taskIncompleted);
    }
      //bind event to list item's children (taskIncompleted)
