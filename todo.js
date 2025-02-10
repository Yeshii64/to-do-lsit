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

    if(inputValue === ""){
        alert("Please enter a task");
    }
}