//form and inputs
const newForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
const completedList = document.getElementById("completed-tasks-list");

function createNewTask (taskName) {
  const newTaskItem = document.createElement("li")
  newTaskItem.innerText = taskName 

  //create completed button for Completed Tasks
  const button = document.createElement("button")
  button.innerText = "Completed"
  button.dataset.action = "delete-button"
  newTaskItem.appendChild(button)

  //create button to be used for priority
  const buttonPriority = document.createElement("button")
  buttonPriority.innerText = "Low"
  buttonPriority.dataset.action = "priority"
  newTaskItem.appendChild(buttonPriority)
  
  return newTaskItem;
}

//function to move tasks to completed lists
function moveToCompletedList (taskName) {
  const completedTaskItem = document.createElement("li")
  completedTaskItem.innerText = taskName

   //create add back button 
   const addBackBtn = document.createElement("button")
   addBackBtn.innerText = "Add to To-Do List"
   addBackBtn.dataset.action = "add-back-button"
   completedTaskItem.appendChild(addBackBtn)

  completedList.appendChild(completedTaskItem) 
}

//event listeners
newForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const newTaskName = document.getElementById("new-task-description").value
  const taskItem = createNewTask(newTaskName);
  
  taskList.appendChild(taskItem)
  newForm.reset()
})

taskList.addEventListener("click", function(event) {
  if (event.target.dataset.action === "delete-button") {
    moveToCompletedList (event.target.parentElement.childNodes[0].nodeValue)
    event.target.parentElement.remove()
  } else if (event.target.dataset.action === "priority") {
    if (event.target.innerText === "Low") {
      event.target.innerText = "High"
    } else {event.target.innerText = "Low"}
  }
})

completedList.addEventListener("click", function(event) {
  if (event.target.dataset.action === "add-back-button") {
    const addBackTaskItem = createNewTask(event.target.parentElement.childNodes[0].nodeValue)
    taskList.appendChild(addBackTaskItem)
    event.target.parentElement.remove()
  }
})
