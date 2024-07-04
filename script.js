let clickCounter = 0;
let color = ["yellow", "green", "red"];

function changeColor(_button) {
    _button.style.backgroundColor = color[clickCounter];
    ++clickCounter;    
    if (clickCounter == 3) {       
        clickCounter = 0;
    }    
}