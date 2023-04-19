# TaskMaster: ReadMe

TaskMaster is a simple web application for managing your daily tasks. You can create a to-do list, add new tasks, mark them as completed, and view a list of completed tasks. The application uses JavaScript and HTML to create and manipulate the task list.

How to Use TaskMaster:
1.Clone or download the repository and open the index.html file in a web browser.
2.You will see two containers: a "To Do List" container and a "Completed Tasks" container.
3.To add a new task, enter a task name into the input field located below the "To Do List" container and click the "Submit new task" button. This will add a new checkbox and a list item to the "To Do List" container.
4.To mark a task as completed, check the corresponding checkbox. The task will be moved to the "Completed Tasks" container.
5.To unmark a task as completed, uncheck the corresponding checkbox. The task will be moved back to the "To Do List" container.


How the Code Works:
The application consists of two JavaScript functions: saveListToLocalStorage() and loadListFromLocalStorage() to save and load the "To Do List" items. The first function saves the current list of tasks to local storage, while the second function loads the list from local storage.

The global variable counter is used to ensure that each checkbox and corresponding list item has a unique class name.

The addItem() function creates a new checkbox and corresponding list item with unique class names. It also adds an event listener to the checkbox to call the strikeThrough() function when the checkbox is checked.

The strikeThrough() function is called when a checkbox is checked or unchecked. It finds the corresponding list item based on the unique class name and moves the item to the appropriate container (either the "To Do List" container or the "Completed Tasks" container). The function also toggles the "strike" class to add or remove a strikethrough effect to the list item.

Finally, the DOMContentLoaded event listener loads the list of tasks from local storage when the page is loaded, and calls the addItem() function for each task in the list.