//go to the todo list page
function menuRedirect(){
    window.location.href = "todo.html";
}

//returning to the menu page
function returnMenuPage(){
    window.location.href="menu.html";
}

//creating a check symbol when the user clicks on the task
var myList = document.getElementsByTagName("ul");
var i;
for(i = 0; i < myList.length; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//making the close button actually close the task
function addCloseFunction(){
    var close = document.getElementsByClassName("close");
    for( var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


//creating the task function
function addTask(){
    const input = document.getElementById("task");
    const inputValue = input.value;
    var ul = document.getElementById("task_list"); //getting the ul element
    var li = document.createElement("li"); //creating the li element
    var Y = document.createTextNode(inputValue);
    li.appendChild(Y) //adding what the user entered to the li element

    if(inputValue === ""){   //input validation
        alert("Please enter a task");
    }else{
        document.getElementById("task_list").appendChild(li);
        }

    document.getElementById("task").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //creates a text node with the x symbol
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    addCloseFunction(); //calling the close function
}

addCloseFunction();

