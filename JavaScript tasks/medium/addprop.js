function addProperty(obj,key) {
	obj[key] = "true"
	alert(obj[key]);
}
var obj = {};

addProperty(obj,"myProperty");