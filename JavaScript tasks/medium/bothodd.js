function areBothOdd(num1, num2){

if(num1 %2)
	if(num2 %2)
	alert("Both odd");
else
	alert("Both not odd");
}
var num1 = prompt("Enter the number 1");
var num2 = prompt("Enter the number 2");
areBothOdd(num1,num2);