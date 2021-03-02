const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));




 app.get("/",function(req,res){
   res.sendfile(__dirname + "/index.html");
 });


app.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = (num1+ num2);

  res.send(String(result));
});


app.get("/bmicalculator",function(req,res){
  res.sendfile(__dirname + "/bmiCalculator.html");
});


app.post("/bmicalculator", function(req,res){
  var num1 = parseFloat(req.body.height);
  var num2 = parseFloat(req.body.weight);
  var bmi = num2 /(num1* num1);

  res.send("your Bmi is " + String(bmi));
});

app.listen(3000, function(){
  console.log("server started  on port 3000");
});
