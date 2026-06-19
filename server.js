const express=require("express");
const app=express();
const port=process.env.port ||6700;

//To tell app,where static files --html/css/js are 
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("App running on http://localhost:"+port)
});