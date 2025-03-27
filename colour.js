//this file is to change the colour of the background (with the button in the menu.html file)
//maybe in the future i can implement an api?
function changeColor(){
    let validColours = ["#33ff39", "#33fffc", "#ff5233"];
    let currentColour = 1;
    document.body.style.backgroundColor = validColours;
    currentColour++;
    console.log("changed colour");   
}