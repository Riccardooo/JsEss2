//alla creazione del dom
document.addEventListener("DOMContentLoaded", addButton);

var addButton = function(){
    var btn = document.createElement("button");
    btn.innerHTML = "GARPEZ";
    document.getElementById("body1").append(btn);
    btn.addEventListener("click", change)
}

var change=function (){
    console.log("SCISCO");
    document.getElementById('div1').setAttribute("style", "background-color: cyan");
    document.getElementById("span1").innerHTML = "<h1>CYAN SUS</h1>";

}

var span1 = document.getElementById("span1");
console.log("document: ", document);
console.log("span1: ", span1);
var testo = span1.innerHTML;
console.log("testo: ", testo);
var button = document.getElementById("btn1");
button.addEventListener("click", change);

document.addEventListener("DOMContentLoaded", addButton);