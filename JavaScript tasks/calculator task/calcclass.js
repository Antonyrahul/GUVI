var table = document.getElementById("myTable");
var row = table.insertRow();
var cell = row.insertCell(0);
inputa = document.createElement('input');
inputa.id = "disp"
cell.type = "input";
cell.value = "1";
cell.colSpan = "4"
cell.appendChild(inputa);
vall =  "";
var row = table.insertRow();
for (var i =0; i<=15; i++)
{
	var j =i;
if(i %4 ==0)
{
	var row = table.insertRow();
}
if (i == 10)
{
	j = "+"
}
if (i == 11)
{
	j = "-"
}
if (i == 12)
{
	j = "*"
}
if (i == 13)
{
	j = "/"
}
if (i == 14)
{
	j = "c"
}
if (i == 15)
{
	j = "="
}
var cell1 = row.insertCell();
var btn1 = document.createElement('button');
btn1.innerHTML = j.toString();
btn1.addEventListener("click",reply_click);
cell1.type = "button";
cell1.value = j.toString();
btn1.id = "val"+j.toString();
btn1.value = j.toString();
console.log(btn1.id);
cell1.appendChild(btn1);
}
function reply_click()
{	
	valid = event.srcElement.id;
	if(valid == "val="){
		//vallarr = vall.split("*");
		obj = new calculator(vall)
		if(vall.includes("+"))
		vall = obj.add();
		else if(vall.includes("-"))
		vall = obj.sub();
		else if(vall.includes("*"))
			vall = obj.mul();
		else if(vall.includes("/"))
			vall = obj.div();
			
	}
	else{
	vall += event.srcElement.value;
	if(valid == "valc")
		vall = "";
	}
    document.getElementById("disp").value = vall
	inputa.innerHTML = vall;
}
class calculator{
	constructor (vall)
	{
	this.vall = vall;
	}
	
add(vallarr)
{
	vallarr = this.vall.split("+");
	return  parseInt(vallarr[0])+parseInt(vallarr[1]);
	   
}
mul(vallarr)
{
	vallarr = this.vall.split("*");
	return parseInt(vallarr[0])*parseInt(vallarr[1]);
}
sub(vallarr)
{
	vallarr = this.vall.split("-");
	return parseInt(vallarr[0])-parseInt(vallarr[1]);
}
div(vallarr)
{
	vallarr = this.vall.split("/");
	return parseInt(vallarr[0])/parseInt(vallarr[1]);
}
}
