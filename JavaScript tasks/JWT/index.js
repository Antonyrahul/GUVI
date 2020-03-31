const express = require('express');
const app = express();
const cors = require('cors')

const bodyparser = require('body-parser');

const mongodbclient = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt =  require("jsonwebtoken");
url = "mongodb://localhost:27017/userDB";
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors())
function authenticate(req, res, next) {
    //console.log(req.header('Authorization'));
   var token = req.headers['Authorization'];
   console.log(token);
    if (token == undefined) {
        res.status('401').json({
            message: "unauthorized"
        });
    } else {

        jwt.verify(token, 'qazwsxedcrfv', function (err, decode) {
            if (decode !== undefined) {
                req.userId = decode.id
                next();
            }
            else {
                res.status(401).json({
                    message: "unauthorized"
                });
            }
        })

        next();

    }
}


app.use(express.static('D:\\node projects\\url_shortner_antony\\public'));

app.get('/', function (req, res) {

    res.sendFile("D:\\node projects\\url_shortner_antony\\homepage.html");
});
app.get('/about', function (req, res) {
    res.sendFile('D:\\node projects\\url_shortner_antony\\form.html')
})
app.get('/register', function (req, res) {
    res.sendFile('D:\\node projects\\url_shortner_antony\\registeruser.html')
})
app.get('/login', function (req, res) {
    res.sendFile('D:\\node projects\\url_shortner_antony\\login.html')
})
app.post('/registeruser', function (req, res) {
    console.log(req.body);
    mongodbclient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("usersDB");
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            if (err) throw err;
            var userData = {
                email: req.body.email,
                name: req.body.name,
                password: hash
            }
            db.collection("users").insertOne(userData, function (err, data) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "saved"
                })
            })
            // Store hash in your password DB.
        });

       // client.close();
    });

})
app.post('/loginuser', function (req, res) {
    console.log(req.body);
    mongodbclient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("usersDB");

            db.collection("users").findOne({email:req.body.email}, function (err, data) {
                if (err) throw err;
                bcrypt.compare(req.body.password, data.password, function(err, result) {
                    if(err) throw err;
                   
                    if(result == true)
                    {
                    console.log("logged in")
                    var jwtToken = jwt.sign({id:data.id},'qazwsxedcrfv')
                    res.status(200).json({
                        message: "saved",
                        token: jwtToken,
                        status :200
                    });
                    

                }
                    else{
                        res.status(401).json({
                            message: "saved"
                        })
                    
                    console.log("wrong creds")
                    }
                });
                
                client.close();
            })
            // Store hash in your password DB.
        


    });

})
app.get('/dashboard', function (req, res) {
    res.sendFile('D:\\node projects\\url_shortner_antony\\dashboard.html')
})
app.post('/dashboardverify',  function (req, res) {
    console.log(req.body.token)
    var token = req.body.token;
   jwt.verify(token,'qazwsxedcrfv',function(err,decode){
       if (err) {res.status(401).json({message:"unauthorised"});}
   console.log(decode);
		if(decode!== undefined){
            console.log("userverified");
            res.json({
                message:"authorised"
            });
        }
        else
        {
            res.status(401).json({
                message:"unauthorised"
            });
        }
    })
            
   /* res.json({
        message: "Protected"
    })*/
   // res.sendFile('D:\\node projects\\url_shortner_antony\\dashboard.html')

});
app.listen(4123, '0.0.0.0', function () {

    console.log("listning");
});
