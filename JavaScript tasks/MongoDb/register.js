

var users = [];
function appenduser(){

    var userData={
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        age: document.getElementById("password").value

    }
    users.push((userData));
    console.log(users)
    document.getElementById('registerform').reset();
}

function adduser() {
    //console.log("clicked");
    /*var userData = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value

    }*/
    //  console.log(userData)
    //193.161.193.99:51492
    console.log(users)

    fetch('http://localhost:4123/registeruser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
    })
    .then(function(userData){console.log(userData);
    })
    .catch(function (err) {
        console.error(err)
    })
}
