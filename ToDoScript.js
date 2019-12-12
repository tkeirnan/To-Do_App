//retrieve items in local storage => [{ text: '', completed: false }]
// create all the li elements based on the objects in the array

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

function createToDoLiElement(todoItemText){
  const todoLi = document.createElement('Li');
  todoLi.className = 'list-group-item';
  todoLi.appendChild(document.createTextNode(todoItemText))

 //add item to local storage
 //here
 
  return todoLi;
}

function createDeleteButton(){
  const deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right mt-1 mb-1 delete';
  
  // Append text node to del button
  deleteBtn.appendChild(document.createTextNode('Delete'));
  return deleteBtn;
}

function createCompletedButton(){
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
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = createToDoLiElement(newItem);

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
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure you wish to delete?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Strikethrough item
function strikeItem(e){
    if(e.target.classList.contains('markCompleted')){
        if(confirm('Are you sure you wish to mark as completed?')){
            var completedBtn = e.currentTarget;
            completedBtn.parentElement.style.textDecoration = "line-through";
        }
    }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}