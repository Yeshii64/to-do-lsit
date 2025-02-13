let localStoragedata = localStorage.getItem("task_list");
//go to the todo list page
function menuRedirect(){
    window.location.href = "todo.html";
}

//returning to the menu page
function returnMenuPage(){
    window.location.href="menu.html";
}


//creating the task function
function addTask(){
    const input = document.getElementById("task");
    const inputValue = input.value;
    var ul = document.getElementById("task_list"); //getting the ul element
    var li = document.createElement("li"); //creating the li element
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode) //adding what the user entered to the li element

    if(inputValue === ""){   //input validation
        alert("Please enter a task");
    }else{
        ul.appendChild(li);
        }

    input.value=""; //clearing the input field
    

    localStorage.setItem("task_list", JSON.stringify(task_list)); //storing the task in local storage

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //creates a text node with the x symbol
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    addCloseFunction(); //calling the close function  
    updateLocalStorage(); //updating the local storage
}

//making the close button actually close the task
function addCloseFunction(){
    var close = document.getElementsByClassName("close");
    for( var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
            updateLocalStorage();
        }
    }
}

function updateLocalStorage(){
  var ul= document.getElementById("task_list");
  localStorage.setItem("task_list", ul.innerHTML);
}

window.onload = function(){
    if(localStoragedata != null){
        var ul = document.getElementById("task_list");
        ul.innerHTML = localStoragedata;
        addCloseFunction();
    }
}


