const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.send("Hello World from express js server");
});

app.get("/about", function(req, res){
  res.send("I am a student of information technology");
});

app.get("/contact", function(req, res){
  res.send("Contact Me :- divyabasatwar02@gmail.com");
});

app.get("/calculator", function(req, res){
  res.sendFile(__dirname+"/index.html");
  //console.log(__dirname);
});

app.post("/calculator", function(req, res){
  console.log(req.body);

  let v1 = Number(req.body.value1);
  let v2 = Number(req.body.value2);

  let sum = v1+v2;

  res.send("Sum of the two numbers is "+sum);
});


app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiIndex.html");
  //console.log(__dirname);
});

app.post("/bmicalculator", function(req, res){

  //for bmi calculator
  let w = Number(req.body.value3)
  let h = Number(req.body.value4)

  let bmiIndex = w/(h*h);

  res.send("Your BMI Index is "+bmiIndex);
});


app.listen(3000, function(req, res){
  console.log("Server is running on port 3000....");
});
