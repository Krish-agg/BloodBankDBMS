
const mysql = require('mysql2');
const express=require("express");
const app=express();
require("dotenv").config();
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bloodbankdb',
    password:process.env.SQL_PASSWORD,
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to MySQL database!");
});

app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM staff";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs",{count});
        });
    }
    catch(err){
        console.log(err);
        res.send("Some error with database");
    }
});

app.listen("8080",()=>{
    console.log("server is listening..");
});



