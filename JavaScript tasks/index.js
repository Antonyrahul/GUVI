const express = require('express');
const app = express();
const cors = require('cors')

const bodyparser = require('body-parser');

const mongodb = require('mongodb');
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
    res.json({
        message: "SUCCESS"
    })
})
app.listen(4123,'0.0.0.0',function()
{

    console.log("listning");
});
