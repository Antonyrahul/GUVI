//var div1 = document.getElementById("holder");
//div1.id = 'mydiv1';
//div1.innerText = "175";
var rest = JSON.parse(window.localStorage.getItem('teamdetind'));
var tto = window.localStorage.getItem('totalind');
var balls1 = window.localStorage.getItem('ballsind');
create_table(rest,tto,"myTable",balls1);
var rest1 = JSON.parse(window.localStorage.getItem('teamdetaus'));
var tto1= window.localStorage.getItem('totalaus');
var balls2 = window.localStorage.getItem('ballsaus');
create_table(rest1,tto1,"myTable1",balls2);
console.log(rest);
console.log(tto);
var winner = "";
var diff = 0;
if(parseInt(tto)>parseInt(tto1))
{
winner = "India";
diff = parseInt(tto)-parseInt(tto1)
}
else
{
winner = "Australia";
diff = parseInt(tto1)-parseInt(tto)
}

//document.body.appendChild(div1);
function create_table(rest,tto,tableid,balls)
{
var table =  <HTMLTableElement>document.getElementById(tableid);
for(var i in rest){
    var key = i;
    var val = rest[i];
	var row = table.insertRow();
    for(var j in val){
        var sub_key = j;
        var sub_val = val[j];
		if(sub_key == "Name" )
		{

		 var cell1 = row.insertCell(0);
		 cell1.style.width = "175px";
		 cell1.innerHTML = sub_val;
		}
		if(sub_key == "runs")
			{

		 var cell2 =   row.insertCell(1);
		 cell2.style.width = "175px";
		 cell2.innerHTML = sub_val;
		}
		if(sub_key == "balls")
			{

		 var cell3 = row.insertCell(2);
		 cell3.style.width = "175px";
		 cell3.innerHTML = sub_val;
		}
		if(sub_key == "rate")
			{
		var cell4 = row.insertCell(3);
		 cell4.style.width = "175px";
		 if(cell2.innerHTML == '0 '&& cell3.innerHTML =='0' )
			 cell4.innerHTML = "0";
		 else
		 cell4.innerHTML = (parseInt(cell2.innerHTML)/parseInt(cell3.innerHTML)).toFixed(2);
			}
		
    }

	


}
var row = table.insertRow();
var cell1 = row.insertCell(0);
cell1.style.width = "175px";
cell1.innerHTML = "total";
var cell2 = row.insertCell(1);
cell2.style.width = "175px";
cell2.innerHTML = tto;
var cell3 = row.insertCell(2);
cell3.style.width = "175px";
cell3.innerHTML = balls;
		var cell4 = row.insertCell(3);
         cell4.style.width = "175px";
         if(cell2.innerHTML == '0 '&& cell3.innerHTML =='0' )
			 cell4.innerHTML = "0";
		 else
		 cell4.innerHTML = (parseInt(cell2.innerHTML)/parseInt(cell3.innerHTML)).toFixed(2);
		 
}
var head1 = document.getElementById("header");
head1.style.fontSize = "xx-large";
head1.style.color = "green";
head1.style.paddingLeft = "600px"
//document.body.appendChild(head1);
//head1.id='head1';
head1.innerText = winner+" won the match by: "+diff+" runs";
var mybr = document.createElement('br');
document.body.appendChild(mybr);
const resttemp = rest.map(Item => {
return Item["runs"]});
console.log(resttemp);
var max = Math.max(...resttemp);
console.log(max);
const resttemp1 = rest1.map(Item => {
return Item["runs"]});
console.log(resttemp);
var max1 = Math.max(...resttemp1);
console.log(max1);
console.log(rest[0]["Name"]);
if(max >max1)
{
	var a = resttemp.indexOf(max);
	console.log(a);
	var manofmatch = rest[a]["Name"];
}
else
{
		var a = resttemp1.indexOf(max1);
	var manofmatch = rest1[a]["Name"];
}
var head2 = document.getElementById("header1");
head2.style.fontSize = "xx-large";
head2.style.color = "red";
head2.style.paddingLeft = "600px"

head2.innerText = "\n\nThe man of match is: "+manofmatch;