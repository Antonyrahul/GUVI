var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1';
var images = ["img1.png","img2.png","img3.jpg","img4.png","img5.png","img6.png"];
var img = document.createElement('img');
img.id='imgg';
div.appendChild(img);
imgg.addEventListener("mouseover",mouseOver);

var i=0;
img.src =images[0];
function mouseOver(){
	
		document.getElementById("imgg").src =images[i];
		i= i+1;
		if(i ==5)
			i=0;
}