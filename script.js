let clickCounter = 0

function changeColor(_this) {
    _this.style.backgroundColor = "yellow"
    ++clickCounter
    if(clickCounter == 2) {
        _this.style.backgroundColor = "green"
    }
    if(clickCounter == 3) {
        _this.style.backgroundColor = "red"
        clickCounter = 0
    }    
}