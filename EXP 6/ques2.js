var car = null;
var timer = null;
car = document.getElementById('car');

function move(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left= parseInt(car.style.left) + 40 + "px";
    timer = setTimeout(move,200)
    x = parseInt(car.style.left)
    if(x >= 1440){
        document.getElementById("dangermsg").innerHTML = "DANGER";
        dangermsg.style.display = "block";
        clearTimeout(timer);
    }
}
function stop(){
    clearTimeout(timer);
}

function reset(){
    car = document.getElementById('car')
    car.style.position = "relative";
    car.style.left ="0px";
    dangermsg.style.display = "none";
}