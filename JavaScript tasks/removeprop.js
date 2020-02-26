function removeProperty(obj,key) {
	delete obj[key];
	alert(obj[key]);
}
var obj = {name:"rahul"};

removeProperty(obj,"name");