//Global variable used for unique class names associated with a checkbox and its corresponding list
var counter = 0;

//Listener for the "Submit new task" button
document.getElementById("add-new-item").addEventListener("click", addItem);

//Creates a checkbox and corresponding list identified by unique class names
function addItem() {
  //Creates an input type checkbox and adding it to corresponding classlist as list item (- 1) with unique id
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('list-item-' + counter);

  //Adds a listener for the checkbox to call our strikethrough function
  checkbox.addEventListener("change", strikeThrough);

  //References the text input
  var textInput = document.getElementById('new-task')

  //Creates an list item based off the user input and adding it to corresponding classlist as checkbox (+ 1) with unique id
  var toDoItem = document.createElement('li');
  toDoItem.textContent = textInput.value;
  toDoItem.classList.add('list-item-' + (counter + 1));

  //Creates the To-Do list container and assigning our inputs to it
  var toDoContainer = document.querySelector(".incomplete-tasks");
  toDoContainer.appendChild(checkbox);
  toDoContainer.appendChild(toDoItem);

  //Iterates the global variable counter so each list item has a unique class name
  counter += 2;

  // Clears input field after adding task
  textInput.value = "";
};
//Function to iterate our counter by 2 at

/*
  Function that calls when a checkbox is checked
  Grabs the event, and identifies which checkbox it is
  Grabs the correlating list item with the checkbox to strikethrough
  Alternatively, un-strikethroughs the list item if unchecked
  Then appends it to the corresponding container for user display
*/
function strikeThrough(event) {
  //Assigns the clicked checkbox to a variable
  let checkbox = event.target;
  //Finds the classname denoting the checkbox
  let classString = checkbox.classList[0];
  //Slices the counter element denoting the id for the checkbox
  let newClassString = classString.slice(10);
  //Converts the id into a number and adds one to reach the corresponding list
  let newStringAsNum = Number(newClassString) + 1;
  //Adds our newStringAsNum to the ".list-item-..." string finalizing the list's id
  let indexClass = ".list-item-" + newStringAsNum;
  //Finds the corresponding list item (Grabs class list-item-...)
  let listItem = document.querySelector(indexClass);
  //References the Completed container for appending later
  let completedContainer = document.querySelector(".completed-tasks");
  //References the To-Do container for appending later
  let toDoContainer = document.querySelector(".incomplete-tasks");
  //Toggles strikethrough on the list element
  listItem.classList.toggle('strike');
  //Checks if the checkbox has been selected, if so appends it to the Completed section of the page
  if (checkbox.checked) {
    completedContainer.appendChild(checkbox);
    completedContainer.appendChild(listItem);
    //Checks if the checkbox has been unselected, and moves it back to the To-Do list
  } else {
    toDoContainer.appendChild(checkbox);
    toDoContainer.appendChild(listItem);

  }
}