var button1 = document.createElement('button');
document.body.appendChild(button1);
button1.innerHTML = 'click me';

var button2 = document.createElement('button');
document.body.appendChild(button2);
button2.innerHTML = 'click meww';
button1.onclick = function(){login()};
button2.onclick = function(){register()};

function login()
{
	var div = document.createElement("div");
div.id = 'mydiv';
div.innerText = "hover over me to change colour";
document.body.appendChild(div);
window.location = 'login.html';
}
function register()
{
	var div = document.createElement("div");
div.id = 'mydiv';
div.innerText = "hover over me to change colourrrrrrrrrr";
document.body.appendChild(div);
window.location = 'register.html';
}