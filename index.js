import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const todos=[];
app.get("/",(req,res)=>{
res.render("index.ejs",{todos:todos});

});
app.post("/submit",(req,res,next)=>{
const todo=req.body["todo"];
todos.push(todo);
res.redirect("/");
// next();
});
app.listen(port,()=>{
console.log(`The server is running on ${port}`);
});