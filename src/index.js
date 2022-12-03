document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskWrapper = document.querySelector("#tasks");
  const inputTask = document.querySelector("#new-task-description");

  // creating the button
  const submitButton = document.querySelector("input[type=\"submit]")
  const form = document.querySelector('#create-task-form')

  const validInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };
// adding a task
  const addNewTask = (e) => {
    e.preventDefault();
    getNewTask(); // calling a valid task
  };

  const getNewTask = () => {
    let task = inputTask.value;
    if (validInput(task)) {
      buildNewTask(task);
    }
  };

  const buildNewTask = (taskContent) => {
    let task = document.createElement("li");
    task.textContent = taskContent;
    taskWrapper.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addNewTask);
});


// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // gets the id with the tag tasks
//   let form = document.querySelector("#tasks")
//   //adding submit button
//   form.addEventListener('submit', (e) => {
//     //stops the default action to occur which is refreshing
//       e.preventDefault()
//       //has a callback function with which we get to access the value in which the user inputs, .target helps us to accces the node in which the inot form lies
//       buildToDo(e.target.new_task_description.value)
//       form.reset()
//   })
// });

// function buildToDo(toDo) {
//   // creates a new paragraph to store our values
//   let p = document.createElement('p');
//   let btn = document.createElement('button');
//   document.querySelector("#tasks").appendChild(p);
//   p.appendChild(btn)
//   btn.textContent = "x"
//   btn.addEventListener("click", handleDelete);
  
//   p.textContent = `${toDo}`
 

  
// }

// function handleDelete(e) {
//   e.target.parentNode.remove()
// }