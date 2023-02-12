function bg_Color(){
    var div = document.getElementById("box");
    var bgcolor = document.getElementById("bgcolor").value;
    div.style.backgroundColor = bgcolor;
}

function textColor(){
    var div = document.getElementById("box");
    var tcolor = document.getElementById("tcolor").value;
    div.style.color = tcolor;
}

function textSize(){
    var div = document.getElementById("box");
    var tsize = document.getElementById("tsize").value;
    div.style.fontSize = tsize + "px";
}

function boxWidth(){
    var div = document.getElementById("box");
    var width = document.getElementById("width").value;
    div.style.width = width + "px";
}

function boxHeight(){
    var div = document.getElementById("box");
    var height = document.getElementById("height").value;
    div.style.height = height + "px";
}

function opacity(){
    var div = document.getElementById("box");
    var opacity = document.getElementById("opacity").value;
    div.style.opacity = opacity + "%";
}