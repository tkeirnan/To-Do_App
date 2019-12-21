// //*ANDYS HELP*

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

function createToDoLiElement(toDoItemText) {
  const todoLi = document.createElement('Li');
  todoLi.className = 'list-group-item';
  todoLi.appendChild(document.createTextNode(toDoItemText));

  return todoLi;
}

function createDeleteButton() {
  const deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right mt-1 mb-1 delete';

  // Append text node to del button
  deleteBtn.appendChild(document.createTextNode('Delete'));
  return deleteBtn;
}

function createCompletedButton() {
  // Create completed button element
  var completedBtn = document.createElement('button');

  // Add classes to completed button
  completedBtn.className = 'btn btn-success btn-sm float-right mt-1 mr-2 mb-1 markCompleted';

  // Append text node to completed button
  completedBtn.appendChild(document.createTextNode('Mark Completed'));
  completedBtn.addEventListener('click', strikeItem);

  return completedBtn;
}

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = createToDoLiElement(newItem);

  // retrieve items array in local storage and store in variable *ANDYS HELP*;
  let savedToDos = localStorage.getItem('todo-items');
  console.log('right after retrieving: ', savedToDos);
  if (savedToDos === null) {
    savedToDos = [];
  } else {
    savedToDos = JSON.parse(savedToDos);
  }
  console.log(savedToDos);

  // add the new todo item information to items array *ANDYS HELP*
  savedToDos.push(newItem);
  console.log(savedToDos);

  // update local storage with the new items array ANDYS HELP
  localStorage.setItem('todo-items', JSON.stringify(savedToDos));

  // Create del button element
  var deleteBtn = createDeleteButton();

  // Create completed button element
  var completedBtn = createCompletedButton();

  // Append button to li
  li.appendChild(deleteBtn);

  //Append second button to li
  li.appendChild(completedBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input box
  document.getElementById('item').value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you wish to delete?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      //localStorage.removeItem("todo-items"); // delete everything in local storage for that key
      let savedToDos = localStorage.getItem("todo-items");
      console.log("right after retrieving: ", savedToDos);
      if (savedToDos === null) {
        savedToDos = [];
      } else {
        savedToDos = JSON.parse(savedToDos);
      }
      console.log(e.target.previousSibling.textContent);
      
      var index = savedToDos.indexOf(e.target.previousSibling.textContent);
      savedToDos.splice(index, 1);
      console.log(savedToDos);
      // search for the matching todoitem
      // remove todoitem from the array
      // update localstorage with new array
      localStorage.setItem('todo-items', JSON.stringify(savedToDos));
    }
  }
}

// Strikethrough item
function strikeItem(e) {
  if (e.target.classList.contains('markCompleted')) {
    if (confirm('Are you sure you wish to mark as completed?')) {
      var completedBtn = e.currentTarget;
      completedBtn.parentElement.style.textDecoration = "line-through";
    }
  }
}


let savedToDos = localStorage.getItem('todo-items');
console.log('right after retrieving: ', savedToDos);
if (savedToDos === null) {
  savedToDos = [];
} else {
  savedToDos = JSON.parse(savedToDos);
}
console.log(savedToDos);

for (let i = 0; i < savedToDos.length; i++) {
  const toDoText = savedToDos[i];

  //update the DOM
  //by adding a new li for each toDo
  // Create new li element
  var li = createToDoLiElement(toDoText);

  // Create del button element
  var deleteBtn = createDeleteButton();

  // Create completed button element
  var completedBtn = createCompletedButton();

  // Append button to li
  li.appendChild(deleteBtn);

  //Append second button to li
  li.appendChild(completedBtn);

  // Append li to list
  itemList.appendChild(li);

}