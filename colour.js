//this file is to change the colour of the background (with the button in the menu.html file)
//maybe in the future i can implement an api?


let colorPlace = 0;
function changeColor(){
    const validColours = ['#1ecbe1','#e0341f','#befc03','#4706f9'];
    document.body.style.backgroundColor = validColours[colorPlace];
    colorPlace = (colorPlace + 1) % validColours.length;

}