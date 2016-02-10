//Problem: User interaction does not provide desired results.
//SolutionL Add interactivity so the user can manage tasks.
var addButton = document.getElementById("add");
var taskInput = document.getElementById("new-task"); //#new-task
var incompleteTask = document.getElementById("incomplete-tasks");
var completedTasks = document.getElementById("completed-tasks");

//Create the li item
function createNewTask(taskString) {
  //Create a new list item
  var listItem = document.createElement("li");
  //Create an input checkbox
  var checkbox = document.createElement("input");//checkbox
  //Create an input label
  var label = document.createElement("label");
  //Create an input text
  var editInput = document.createElement("input");
  //Create an input button with class edit
  var editButton = document.createElement("button");
  //Create an input button with class delete
  var deleteButton = document.createElement("button");
  //Each of these elements needs modifying.
  
  //Each of these elements needs appending.
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}
//Add a new task
function addTask() {
  console.log("Add task...");
  //Create a new list item with the text from the #new-task
  var listItem = createNewTask();
  //Append listItem to the incomplete-tasks list
  incompleteTask.appendChild(listItem);
}

addButton.onclick = addTask;

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
  //select taskListItem children
  var checkbox = taskListItem.querySelector("input[type='checkbox']");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  //bind checkboxEventHandler to checkbox
  checkbox.onchange = checkboxEventHandler;
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
      //bind event to list item's children (taskIncompleted)
      bindEventTasks(completedTasks.children[i], taskIncompleted);
    }
