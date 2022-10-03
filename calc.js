//The calc .js file
const express = require('express');
//Require the express package
const bodyParser = require('body-parser');
//Require the body-parser package


const app = express();
//app is a function that represents the express module

app.use(bodyParser.urlencoded({
  extended: true
}));
// The following code is what is required everytime we want to use body-parser
// app.use express works with bodyParser and can use its methods of .text() or .urlencoded()
// bodyParser.urlencoded() --> is what is used when you want to parse data coming in an html form
// {extended:true} what body-parser requires us to declare

app.listen(3000, function() {
  console.log("server started on port 3000")
});

app.get("/about", function(req, res) {
  res.send("This is a simple Calculator file");
});
// app.get is a method provided by express and it allows our server to react when a browser attempts to access the server by making a get request

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
// app.get is a method provided by express and it allows our server to react when a browser attempts to access the server by making a get request



app.post("/", function(req, res) {
  // The app.post handles the POST request, which in this case made in the <form> in the html page
  // console.log(req.body); -> is used to view all all the inputs from the customer or from the POST
  var num_1 = Number(req.body.num1);
  // The num1 is from the name attribute in the .html page. The req.body.num1 is from the body-parser, which is parsing the info
  // Number is used to change the values to integer from string
  var num_2 = Number(req.body.num2);
  // The num2 is from the name attribute in the .html page. The req.body.num1 is from the body-parser, which is parsing the info
  // Number is used to change the values to integer from string
  var addition = num_1 + num_2;
  res.send("The rests from the server are " + addition);
  // res.send is what will be shown after he POST request has been satisfied
});
