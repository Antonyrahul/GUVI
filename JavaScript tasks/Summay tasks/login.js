var div1 = document.createElement('div');
div1.id='div1';
document.body.appendChild(div1);
div1.innerHTML='ENTER USERNAME: ';
var user=document.createElement('input');
user.type="text";
div1.appendChild(user);
var div2=document.createElement('div');
div2.id='div2';
document.body.appendChild(div2);
div2.textContent='ENTER PASSWORD: ';
var pass=document.createElement('input');
pass.type="text";
div2.appendChild(pass);

var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Submit';
button.onclick = function(){validate()};
var userpass = 0;
var passpass = 0;
function validate()
{
	for(var i in users){
    var key = i;
    var val = users[i];
	
    
		if(users[i]["name"] == user.value&& users[i]["age"] == pass.value )
			alert("In");
	}
	
}
