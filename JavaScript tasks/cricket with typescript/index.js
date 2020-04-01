var team2 = [{ Name: "John", runs: 0, balls: 0, rate: 0 }, { Name: "adam", runs: 0, balls: 0, rate: 0 }, { Name: "jacob", runs: 0, balls: 0, rate: 0 }, { Name: "mark", runs: 0, balls: 0, rate: 0 }, { Name: "jaden", runs: 0, balls: 0, rate: 0 }, { Name: "ebi the don", runs: 0, balls: 0, rate: 0 }, { Name: "matt", runs: 0, balls: 0, rate: 0 }, { Name: "horse", runs: 0, balls: 0, rate: 0 }, { Name: "qwety", runs: 0, balls: 0, rate: 0 }, { Name: "asus", runs: 0, balls: 0, rate: 0 }];
var team1 = [{ Name: "rohith", runs: 0, balls: 0, rate: 0 }, { Name: "virat", runs: 0, balls: 0, rate: 0 }, { Name: "Rahul", runs: 0, balls: 0, rate: 0 }, { Name: "Jadeja", runs: 0, balls: 0, rate: 0 }, { Name: "Dhoni", runs: 0, balls: 0, rate: 0 }, { Name: "Shewag", runs: 0, balls: 0, rate: 0 }, { Name: "Ganguly", runs: 0, balls: 0, rate: 0 }, { Name: "Sachin", runs: 0, balls: 0, rate: 0 }, { Name: "Yuvraj", runs: 0, balls: 0, rate: 0 }, { Name: "raina", runs: 0, balls: 0, rate: 0 }];
var div1 = document.createElement("div");
div1.id = 'mydiv1';
div1.style.fontSize = "xx-large";
div1.style.color = "green";
div1.style.paddingLeft = "600px";
div1.innerText = "India is playing";
document.body.appendChild(div1);
var balls = 0;
var totrun1 = 0;
var totrun2 = 0;
var count = 0;
var count1 = 0;
var i = 0;
var i1 = 0;
var result = 0;
var retval = 0;
var alertshown = 0;
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
img.id = 'imgg';
img.src = "bowling.gif";
img.style.width = "200px";
img.style.height = "150px";
img.style.paddingLeft = "5px";
div2.appendChild(img);
var img1 = document.createElement('img');
img1.id = 'imgg1';
img1.src = "batting.gif";
img1.style.width = "200px";
img1.style.height = "150px";
img1.style.paddingLeft = "1000px";
div2.appendChild(img1);
//export {};
function bowl() {
    var run = Math.floor(Math.random() * 7);
    if (retval != 12 && retval != 13) {
        var obj = new team1class(run, team1);
        result = obj.scoreboard1();
    }
    else if (retval == 12) {
        if (alertshown == 0)
            alert("India has finished batting");
        alertshown = 1;
        //console.log(JSON.parse(window.localStorage.getItem('user')));
        div1.innerText = "Australia is playing";
        var obj1 = new team1class(run, team2);
        var result1 = obj1.scoreboard1();
    }
    else {
        document.getElementById("butt").disabled = true;
        alert("Both team have finished batting");
        window.location.href = "result.html";
    }
}
var team1class = /** @class */ (function () {
    function team1class(run, team1) {
        this.run = run;
        this.team1 = team1;
    }
    team1class.prototype.scoreboard1 = function () {
        if (i > 9) {
            i = 0;
            //count =0;
            //totrun1 = 0;
            if (this.team1[0]["Name"] == "rohith")
                retval = 12;
            else
                retval = 13;
            return retval;
        }
        console.log(this.team1[i]["Name"]);
        console.log(this.run);
        if (this.run == 0) {
            if (this.team1[i]["Name"] == "raina") {
                this.store(team1, totrun1, count);
                retval = 12;
                i = 0;
                count = 0;
                totrun1 = 0;
                return retval;
            }
            else if (this.team1[i]["Name"] == "asus") {
                retval = 13;
                this.store(team1, totrun1, count);
                return retval;
            }
        }
        if (count == 36) {
            this.store(team1, totrun1, count);
            if (this.team1[0]["Name"] == "rohith") {
                i = 0;
                count = 0;
                totrun1 = 0;
                retval = 12;
            }
            else if (this.team1[0]["Name"] == "John")
                retval = 13;
            return retval;
        }
        this.team1[i]["runs"] += this.run;
        this.team1[i]["balls"] += 1;
        count += 1;
        totrun1 = this.run + totrun1;
        var str = "balls: " + count + "\ntotal run : " + totrun1 + "\nplayer     :   " + this.team1[i]["Name"] + "\nplayer runs : " + this.team1[i]["runs"] + "\ncurrent run :" + this.run + "\nPlayer balls: " + this.team1[i]["balls"];
        console.log(this.team1[0]);
        div3.innerText = str;
        if (this.run == 0 || count == 6 || count == 12 || count == 18 || count == 24 || count == 30) {
            //playerrun =0;
            i += 1;
        }
        //return retval;
    };
    team1class.prototype.store = function (team1, totrun1, count) {
        i = 0;
        var str1 = "teamdet";
        var str2 = "total";
        var str3 = "balls";
        if (this.team1[0]["Name"] == "rohith") {
            str1 += 'ind';
            str2 += 'ind';
            str3 += 'ind';
        }
        else {
            str1 += 'aus';
            str2 += 'aus';
            str3 += 'aus';
        }
        console.log(str1);
        console.log(str2);
        window.localStorage.setItem(str1, JSON.stringify(this.team1));
        window.localStorage.setItem(str2, totrun1);
        window.localStorage.setItem(str3, count);
        totrun1 = 0;
        count = 0;
    };
    return team1class;
}());
