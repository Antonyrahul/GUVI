	//countryname = cellval.text;
	
	//modal.style.display = "block";
	
	
	
async function countryflags(){
	var countries = await fetch("https://restcountries.eu/rest/v2/all");
	countrydata = await countries.json();
	console.log(countrydata);
	var table = document.getElementById("myTable");
	for (let i in countrydata){
		var row = table.insertRow();
		var cell0 = row.insertCell(0);
		 cell0.style.width = "1000px";
		 cell0.innerHTML =countrydata[i].capital;
		 cell0.text =countrydata[i].capital;
		 var img = document.createElement('img');
		img.src = countrydata[i].flag;
		img.style.width="150px";
		img.style.height="150px";
		cell0.appendChild(img);
		for (var j = 0; j < table.rows.length; j++){
                    table.rows[i].cells[0].onclick = function () { getval(this); };
		}
		
	}
}
countryflags();
async function getval(cellval)
{
	var apikey = "3586edf49d2d3744cd685bd14f9dc301"
	var country = cellval.text;
	var modal = document.getElementById("myModal");
	var span = document.getElementsByClassName("close")[0];
	var name = document.getElementById("name");
	var temp = document.getElementById("temp");
	var pressure = document.getElementById("pressure");
	var humidity = document.getElementById("humidity");
	var climate = document.getElementById("climate");
	var fullurl = "http://api.openweathermap.org/data/2.5/weather?q="+country+"&units=metric&appid="+apikey;
	var weatherdata = await fetch(fullurl);
	var weatherdatajson = await weatherdata.json();
	//alert(cellval.text);
	modal.style.display = "block";
	
	name.innerHTML = "CITY : "+country;
	temp.innerHTML = "TEMPERATURE : "+weatherdatajson.main.temp+"&#x2103";
	pressure.innerHTML = "PRESSURE : "+weatherdatajson.main.pressure;
	humidity.innerHTML = "HUMIDITY : "+weatherdatajson.main.humidity;
	climate.innerHTML = "CLIMATE : "+weatherdatajson.weather[0].main;
	
	//var span1 = document.getElementById("qwerty");
	//span1.innerHTML = cellval.text;
	
	span.onclick = function() {
  modal.style.display = "none";
}


	
}