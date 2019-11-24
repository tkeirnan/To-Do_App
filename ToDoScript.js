// IIFE

console.log(document.getElementById("newToDoObject"));

    // Turn new toDoItem HTML code into a toDoObject

    function createToDo() {
        var newToDoObject = document.getElementById("newToDoObject");
        

        if (newToDoObject.style.display === "none") {
            newToDoObject.style.display = "block";
        } else {
            newToDoObject.style.display = "none";
        }     

    };

    var itemInput = document.querySelector('input[type="text"]');
    var form = document.querySelector('form');

    itemInput.addEventListener('keydown', runEvent);

    function runEvent(e){
        console.log('Event Type: '+e.type);
        document.getElementById('output').innerText = e.target.value;
    };


    // hide toDoObject by default

    // send input text to toDoObject

    // enterButton reveals a new toDoObject with text

    // completedButton strikes text in object (.disabled)

    // deleteButton deletes toDoObject




  

