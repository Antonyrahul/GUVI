

/*var users = [];
function appenduser(){

    var userData={
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        age: document.getElementById("password").value

    }
    users.push((userData));
    console.log(users)
    document.getElementById('registerform').reset();
}*/

//import { response } from "express";



function checkuser() {
   // console.log("clicked");
    var userData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value

    }
      console.log(userData)
    //193.161.193.99:51492
    //console.log(users)

    fetch('http://localhost:4123/loginuser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(function(res){
            res.json()
            
            .then(function(userdat){console.log(userdat.token)
                console.log(userdat.status)

                alert("logged in")
        
                window.localStorage.setItem('jwtToken', userdat.token);
                window.location = "/dashboard"
              // return res.redirect('/UserHomePage');

            })
           // if(userData.status==200)
    
        
    })
    
    .catch(function (err) {
        console.error(err)
    })
}
