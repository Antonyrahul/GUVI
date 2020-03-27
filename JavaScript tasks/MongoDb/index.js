const express = require('express');
const app = express();
const cors = require('cors')

const bodyparser = require('body-parser');

const mongodbclient = require('mongodb');
url = "mongodb://localhost:27017/userDB";
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));
app.use(cors())


app.use(express.static('D:\\node projects\\url_shortner_antony\\public'));

app.get('/',function(req,res){

    res.sendFile("D:\\node projects\\url_shortner_antony\\homepage.html");
});
app.get('/about',function(req,res){
    res.sendFile('D:\\node projects\\url_shortner_antony\\form.html')
})
app.get('/register',function(req,res){
    res.sendFile('D:\\node projects\\url_shortner_antony\\registeruser.html')
})
app.post('/registeruser',function(req,res){
    console.log(req.body);
    mongodbclient.connect(url,function(err,client){
        if(err) throw err;
        var db = client.db("usersDB");
        db.collection("users").insertMany(req.body,function(err,data){
            if(err) throw err;
            client.close();
            res.json({
                message:"saved"
            })
        })
    });
    res.json({
        message: "SUCCESS"
    })
})
app.listen(4123,'0.0.0.0',function()
{

    console.log("listning");
});
