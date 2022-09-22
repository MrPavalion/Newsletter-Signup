//API KEY
//f3b198f17c84baed3f6f9da0b303b2b4-us17


//id
//87717bee7a

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

// new instance of express
const app = express();

//mailChimp api key
//api key
//Mailchimp list id

//app.use
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname +"/signup.html");
});

app.post("/", function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.mail;
  const data = {
    //the members, status,merge_fields ---comes from mailChimp api
    'members':[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ],
  }
  var jsonData = JSON.stringify(data)

  console.log(firstName, lastName, email);

  // NOTE: The API KEY BELOW HAS BEEN DISABLED ON MAILCHIMP
  //       AS THIS CODE WILL BE PUSHED TO PUBLIC GITHUB

var jsonData = JSON.stringify(data);
const url = "https://us17.api.mailchimp.com/3.0/lists/87717bee7a";

const options = {
  method:"POST",
  auth:""
}


response.on("data",function(data){
  console.log(JSON.parse(data));
  })
})

request.write(jsonData);
request.end();



// app.post("/failure", function (req, res){
//   res.redirect("/");
// });

//to test the app locally in port 3000
// app.listen(process.env.PORT || 3000, function(){
app.listen(process.env.PORT || 3000, function(){
console.log("Server is running in port 3000")
});