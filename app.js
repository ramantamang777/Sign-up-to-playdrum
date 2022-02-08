const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { status } = require('express/lib/response');
const https = require('https');
const { application } = require('express');

const app = express();

app.use(express.static("public"));

// app.get('/' ,function(req,res){
//    res.sendFile(__dirname + '/public/index.html');
// }); 



app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req,res){
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailName;

    let data = {
        members : [
            {
            email_address: email,
            status: "subscribed",
            merge_fields : {
                FNAME: firstName,
                LNAME : lastName
            }
            }
      ]
    }
    let jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/1cdb55d894";

    const option = {
        method:"POST",
        auth: "ramanTamang:ec32efb60da31c54331c43e829dcfe8c-us14"
    }

    const request = https.request(url, option, function(response){

        if(response.statusCode === 200)
        {
            res.sendFile(__dirname + '/public/index1.html');
        }
        else{
            res.sendFile(__dirname + '/public/failure.html');
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server is running in port 3000!');
});

//APIKEY
//ec32efb60da31c54331c43e829dcfe8c-us14

//listId
//1cdb55d894