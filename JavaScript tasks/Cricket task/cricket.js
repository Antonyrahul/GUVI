var team2 = [{Name: "John",runs: 0,balls :0,rate :0},{Name: "adam",runs: 0,balls :0,rate :0},{Name: "jacob",runs: 0,balls :0,rate :0},{Name: "mark",runs: 0,balls :0,rate :0},{Name: "jaden",runs: 0,balls :0,rate :0},{Name: "ebi the don",runs: 0,balls :0,rate :0},{Name: "matt",runs: 0,balls :0,rate :0},{Name: "horse",runs: 0,balls :0,rate :0},{Name: "qwety",runs: 0,balls :0,rate :0},{Name: "asus",runs: 0,balls :0,rate :0}];
var team1 = [{Name: "rohith",runs: 0,balls :0,rate :0},{Name: "virat",runs: 0,balls :0,rate :0},{Name: "Rahul",runs: 0,balls :0,rate :0},{Name: "Jadeja",runs: 0,balls :0,rate :0},{Name: "Dhoni",runs: 0,balls :0,rate :0},{Name: "Shewag",runs: 0,balls :0,rate :0},{Name: "Ganguly",runs: 0,balls :0,rate :0},{Name: "Sachin",runs: 0,balls :0,rate :0},{Name: "Yuvraj",runs: 0,balls :0,rate :0},{Name: "raina",runs: 0,balls :0,rate :0}];
var div1 = document.createElement("div");
div1.id = 'mydiv1';
div1.style.fontSize = "xx-large";
div1.style.color = "green";
div1.style.paddingLeft = "600px"
div1.innerText = "India is playing";
document.body.appendChild(div1);
balls = 0;
totrun1 =0;
totrun2 = 0;
count = 0;
count1 = 0;
i =0;
i1  = 0;
result = 0;
retval = 0;

var div2 = document.createElement("div");
div2.id = 'mydiv2';
//div2.innerText = "India is playing";
document.body.appendChild(div2);
var div3 = document.createElement("div");
div3.id = 'mydiv1';
div3.style.fontSize = "x-large";
div3.style.color = "magenta";
//div3.innerText = "India is playing";
document.body.appendChild(div3);
var img = document.createElement('img');
img.id='imgg';
img.src = "bowling.gif"
img.style.width="200px";
img.style.height="150px";
img.style.paddingLeft = "5px";
div2.appendChild(img);
var img1 = document.createElement('img');
img1.id='imgg1';
img1.src = "batting.gif"
img1.style.width="200px";
img1.style.height="150px";
img1.style.paddingLeft = "1000px";
div2.appendChild(img1);

/*var button1 = document.createElement('button');
document.body.appendChild(button1);
button1.innerHTML = 'Bowl';
button1.id = "button1"*/
//var button1 = document.getElementById("butta");
//button1.addEventListener("click", bowl);
function bowl()
{
	
	//playerrun = 0;
	var run = Math.floor(Math.random() * 7);
	if(retval!=12&&retval!=13)
	{
	obj = new team1class(run);
	result = obj.scoreboard1();
	}
	else if(retval==12)
	{
		console.log(JSON.parse(window.localStorage.getItem('user')));
	div1.innerText = "Australia is playing";
	obj1 = new team2class(run);
	var result1 = obj1.scoreboard2();
	}
	else
		window.location = "result.html"
	
	
}	

class team1class
{
	constructor(run)
	{
		this.run = run;
	}
	scoreboard1()
	{
		if(i>9)
		{
			retval = 12;
		return retval;
		}
		console.log(team1[i]["Name"]);
			console.log(this.run);
		if(team1[i]["Name"] == "raina" && this.run == 0)
		{	
			retval = 12;
			window.localStorage.setItem('user', JSON.stringify(team1));
			window.localStorage.setItem('indtotal', totrun1);
			window.localStorage.setItem('indballs', count);
			return retval;
		}
			if (count == 36)
	{
		retval = 12;
		window.localStorage.setItem('user', JSON.stringify(team1));
		window.localStorage.setItem('indtotal', totrun1);
		window.localStorage.setItem('indballs', count);
		return retval
	}


	//console.log(team1[i]["Name"]);
	//console.log(this.run);

	//currentPlayer = team1[i]["Name"];
    team1[i]["runs"] += this.run;
	team1[i]["balls"]+=1
	count+=1;
	totrun1 = this.run + totrun1
	var str = "balls: "+count+ "\ntotal run : "+totrun1+"\nplayer     :   "+team1[i]["Name"]+"\nplayer runs : "+team1[i]["runs"]+"\ncurrent run :"+this.run+"\nPlayer balls: "+team1[i]["balls"];
	console.log(team1[0])
	div3.innerText = str; 
			if (this.run ==0 || count ==6 || count ==12 || count ==18 || count ==24 || count ==30 )
	{
		//playerrun =0;
		i+=1;
	}
	//return retval;
	}
}

class team2class
{
	constructor(run)
	{
		this.run = run;
	}
	scoreboard2()
	{
		if(i1>9)
		{
			retval = 13;
			return retval;
		}
		console.log(team2[i1]["Name"]);
			console.log(this.run);
		if(team2[i1]["Name"] == "asus" && this.run == 0)
		{	
			retval = 13;
			window.localStorage.setItem('user1', JSON.stringify(team2));
			window.localStorage.setItem('austotal', totrun2);
			window.localStorage.setItem('ausballs', count1);
			return retval;
		}
			if (count1 == 36)
	{
		retval = 13;
		window.localStorage.setItem('user1', JSON.stringify(team2));
		window.localStorage.setItem('austotal', totrun2);
		window.localStorage.setItem('ausballs', count1);
		return retval
	}
		
	

	//console.log(team1[i]["Name"]);
	//console.log(this.run);

	//currentPlayer = team1[i]["Name"];
    team2[i1]["runs"] += this.run;
	team2[i1]["balls"]+=1
	count1+=1;
	totrun2 = this.run + totrun2
	var str = "balls: "+count1+ "\ntotal run : "+totrun2+"\nplayer     :   "+team2[i1]["Name"]+"\nplayer runs : "+team2[i1]["runs"]+"\ncurrent run :"+this.run+"\nPlayer balls: "+team2[i1]["balls"];
	console.log(team2[0])
	div3.innerText = str; 
			if (this.run ==0 || count1 ==6 || count1 ==12 || count1 ==18 || count1 ==24 || count1 ==30 )
	{
		//playerrun =0;
		i1+=1;
	}
	//return retval;
	}
}


