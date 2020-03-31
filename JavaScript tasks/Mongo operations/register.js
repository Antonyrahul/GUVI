

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

function deleteuser() {
    console.log("clicked");
    var userData = {
        email: document.getElementById("email").value,


    }
      console.log(userData)
    //193.161.193.99:51492
    //console.log(users)

    fetch('http://localhost:4123/deleteuser', {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(function(userData){console.log(userData);
    })
    .catch(function (err) {
        console.error(err)
    })
}

function adduser() {
    console.log("clicked");
    var userData = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        password: document.getElementById("password").value

    }
      console.log(userData)
    //193.161.193.99:51492
    //console.log(users)

    fetch('http://localhost:4123/registeruser', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(function(userData){console.log(userData);
    })
    .catch(function (err) {
        console.error(err)
    })
}


function updateuser() {
    console.log("clicked");
    var userData = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        password: document.getElementById("password").value

    }
      console.log(userData)
    //193.161.193.99:51492
    //console.log(users)

    fetch('http://localhost:4123/updateuser', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(function(userData){console.log(userData);
    })
    .catch(function (err) {
        console.error(err)
    })
}