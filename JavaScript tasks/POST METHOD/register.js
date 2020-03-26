


function adduser() {
    //console.log("clicked");
    var userData = {
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        age: document.getElementById("age").value

    }
    //  console.log(userData)

    fetch('http://193.161.193.99:51492/registeruser', {
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
