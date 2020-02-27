function mouseOver(){document.getElementById("mydiv").style.backgroundColor='red';}
function mouseOut(){document.getElementById("mydiv").style.backgroundColor='white';}
var div = document.createElement("div");
div.id = 'mydiv';
div.innerText = "hover over me to change colour";
document.body.appendChild(div);
document.getElementById("mydiv").addEventListener("mouseover", mouseOver);
document.getElementById("mydiv").addEventListener("mouseout", mouseOut)