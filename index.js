//Global variable used for unique class names associated with a checkbox and its corresponding list
var counter = 0;

//Listener for the "Submit new task" button
document.getElementById("add-new-item").addEventListener("click", addItem);

//Creates a checkbox and corresponding list identified by unique class names
function addItem() {
  //Creating an input type checkbox and adding it to corresponding classlist as list item
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('list-item-' + counter);
  //Adding a listener for the checkbox to call our strikethrough function
  checkbox.addEventListener("change", strikeThrough);
  //Referencing our text input
  var textInput = document.getElementById('new-task')
  //Creating an list item based off the user input and adding it to corresponding classlist as checkbox
  var toDoItem = document.createElement('li');
  toDoItem.textContent = textInput.value;
  toDoItem.classList.add('list-item-' + counter);
  //Creating our container and assigning our inputs to it
  var toDoContainer = document.querySelector(".incomplete-tasks");
  toDoContainer.appendChild(checkbox);
  toDoContainer.appendChild(toDoItem);

  //Calls counter to iterate a global counter so each list item has a unique class name
  counterFunction()
};

function counterFunction() {
  counter++;
}

/*
  Function that calls when a checkbox is checked
  Grabs the event, and identifies which checkbox it is
  Grabs the correlating list item with the checkbox to strikethrough
  Alternatively, un-strikethroughs the list item if unchecked
*/

function strikeThrough(event) {
  //Assigning the clicked checkbox to a variable
  let checkbox = event.target;
  //Finding the corresponding list item (Grabs class list-item-...)
  let listItem = document.getElementsByClassName(checkbox.classList[0]);

  listItem[1].classList.toggle('strike');

}

//bring list item and checkbox to archive when clicked, when unclicked bring back to 'to-do'