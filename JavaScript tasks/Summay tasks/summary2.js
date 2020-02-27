function swap(){temp = div1.innerText; div1.innerText = div2.innerText; div2.innerText = temp;}
var div1 = document.createElement("div");
div1.id = 'mydiv1';
div1.innerText = "I am div1";
document.body.appendChild(div1);
var div2 = document.createElement("div");
div2.id = 'mydiv2';
div2.innerText = "I am div2";
document.body.appendChild(div2);
var x = document.createElement("BUTTON");
x.id = "click"
var t = document.createTextNode("Swap");
x.appendChild(t);
document.body.appendChild(x);
document.getElementById("click").onclick = function(){swap()};
