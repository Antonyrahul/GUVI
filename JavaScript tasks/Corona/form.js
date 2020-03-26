function processs()
{
    var fever = document.getElementById("fever");
    var cough = document.getElementById("cough");
    var sneeze = document.getElementById("sneeze");
    var sore = document.getElementById("sore");
    var fatigue = document.getElementById("fatigue");
    var myalgia = document.getElementById("myalgia");
    var breathe = document.getElementById("breathe");
    var travely = document.getElementById("travely");
    var traveln = document.getElementById("traveln");
    var suspecty = document.getElementById("suspecty");
    var suspectn = document.getElementById("suspectn");
    var agey = document.getElementById("agey");
    var agen = document.getElementById("agen");
    var countries = document.getElementById("countries");
    var subje = document.getElementById("subject")
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var symptomdays = document.getElementById("symptomdays").value;
    var image = document.getElementById("image");
    var coronarisk = document.getElementById("coronarisk");
    var risktext = document.getElementById("risktext");
    

    var form = document.getElementById('form1');


var score = 0

    if(fever.checked)
        if(cough.checked)
        {
            var sympto= document.querySelectorAll('input[type="checkbox"]:checked').length
            if(sympto>4)
                    if(travely.checked || suspecty.checked)
                        if(agey.checked)
                            if(symptomdays>7)
                                score =9;
                            else if(symptomdays>=5&&symptomdays<=7)
                                score =7;
                            else
                                score =5;
            if(sympto<=3)
                score =4;

        }
        else
        {
            score =3
        }
        else
        {
            score = 0
        }


                        //alert("corona");
                        
                      //  alert(score);


                        modal.style.display = "block";
                            var scorestr = score.toString();
                           // alert(scorestr)
                        risktext.innerHTML = "CORONA RISK :"+score*10+"%"
                            coronarisk.setAttribute('value', score);
                        image.src = "precautions.jpg"
                        
                        span.onclick = function() {
                            modal.style.display = "none";
                          }
                          


}

/*var btn = document.getElementById("adduser");
if(btn)
btn.addEventListener("click",adduser,false);*/


