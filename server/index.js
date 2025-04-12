
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
const cors = require('cors');
app.use(cors());
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
    let q="SELECT Bank_ID, Blood_Type, SUM(Quantity_Required) AS total_requested FROM Request GROUP BY Bank_ID, Blood_Type";

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send("Hello World!");
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.listen("8080",()=>{
    console.log("server is listening..");
});



