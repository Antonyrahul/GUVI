//const fetch = require("node-fetch");
var apikey = "7f2afff39600342362600e39a9624a9c"
var contries = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   //console.log(data);
   var table = document.getElementById("myTable");
	for(var i in data){
    var key = i;
    var val = data[i];
	
	for(var j in val){
        var sub_key = j;
        var sub_val = val[j];

		if(sub_key == "capital" && sub_val !="")
			{
	
			var country = sub_val;
			
			fullurl = "http://api.openweathermap.org/data/2.5/weather?q="+country+"&units=metric&appid="+apikey;
			//https://cors-anywhere.herokuapp.com/
			console.log(fullurl);
			fetch(fullurl)
			.then((response)=>{
		
				return response.json();
				
				//var rest = JSON.stringify(rest1)
				//console.log(rest);
			
			}).then((rest)=>{
				console.log(rest.main.temp);

		var row = table.insertRow();
		
		var cell0 = row.insertCell(0);
		 cell0.style.width = "1000px";
		 cell0.innerHTML =rest.name;

		 var cell1 = row.insertCell(1);
		 cell1.style.width = "1000px";
		 cell1.innerHTML =rest.main.temp;
		


		 var cell2 = row.insertCell(2);
		 cell2.style.width = "1000px";
		 cell2.innerHTML = rest.main.pressure;
		 
		 var cell3 = row.insertCell(3);
		 cell3.style.width = "1000px";
		 cell3.innerHTML = rest.main.humidity;
		 
		 var cell4 = row.insertCell(4);
		 cell4.style.width = "1000px";
		 cell4.innerHTML = rest.weather[0].main;
		
		

			})
			.catch((err)=>{
				console.log(err);
			})
		}
			//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
		}
		
    }
	})
  //})
  //.then((countryname)=>{
	//  console.log(countryname);
	  
  //})