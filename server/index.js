
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
    database: process.env.DATABASE_NAME,
    password:process.env.SQL_PASSWORD,
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected to MySQL database!");
});

app.use(express.json());

app.get("/form1",(req,res)=>{
    let q="SELECT * FROM Donor";

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form2/:noofmonths",(req,res)=>{
    console.log("Inside form2");
    let {noofmonths}=req.params;
    console.log(req);
    let q=`SELECT * FROM Donation WHERE Donation_Date >= DATE_SUB(CURDATE(), INTERVAL ${noofmonths} MONTH)`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form3",(req,res)=>{
    let q="SELECT Blood_Type, SUM(Quantity) AS units_available FROM BloodSample GROUP BY Blood_Type";

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            
            res.send(result);
            console.log(result);
            
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form4/:bloodType",(req,res)=>{
   
    let {bloodType}=req.params;
 
    let q=`SELECT * FROM Donor WHERE Blood_Type = '${bloodType}'`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form5/:noofyears",(req,res)=>{
   
    let {noofyears}=req.params;

    let q=`SELECT * FROM Request WHERE Request_Date >= DATE_SUB(CURDATE(), INTERVAL ${noofyears} YEAR)`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form6/:noofTimes",(req,res)=>{
   
    let {noofTimes}=req.params;

    let q=`SELECT Donor_ID, COUNT(*) AS donation_count FROM Donation GROUP BY Donor_ID HAVING donation_count >= ${noofTimes}`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.post("/form7",(req,res)=>{
    console.log("Inside form2");
    let {id,role}=req.body;
    console.log(id);
    console.log(role);
    let q=`UPDATE Staff SET Role = "${role}" WHERE Staff_ID = ${id}`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.post("/form8",(req,res)=>{
    console.log("Inside form2");
    let {request_id,quantity}=req.body;
    console.log(request_id);
    console.log(quantity);
    
    let q=`UPDATE Request SET Quantity_Required = ${quantity} WHERE Request_ID = ${request_id};`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.post("/form9",(req,res)=>{
    console.log("Inside form2");
    let {bloodType, quantity}=req.body;
    
    
    let q=`INSERT INTO Request (Recipient_ID, Bank_ID, Blood_Type, Quantity_Required, Request_Date)
VALUES (3, 5, "${bloodType}", ${quantity}, CURRENT_DATE());`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.post("/form10",(req,res)=>{
    console.log("Inside form2");
    let {firstname, lastname, role, bankid}=req.body;
    
    
    let q=`INSERT INTO Staff (First_Name, Last_Name, Role, Bank_ID)
VALUES ( "${firstname}", "${lastname}", "${role}", ${bankid});`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            //let count=result[0]["count(*)"];
            res.send(result);
            console.log(result);
            //res.render("home.ejs",{count});
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.post("/form11",(req,res)=>{
    let {id}=req.body;
    
    
    let q=`DELETE FROM Request
WHERE Request_ID = ${id};`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form12/:bloodgroup",(req,res)=>{
    let {bloodgroup}=req.params;
    console.log(req);
    let q=`SELECT DISTINCT bb.* FROM BloodBank bb
JOIN BloodSample bs ON bb.Bank_ID = bs.Bank_ID
WHERE bs.Blood_Type = "${bloodgroup}";`;

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});


app.get("/form13",(req,res)=>{
    let q="SELECT * FROM Request ORDER BY Request_Date;";

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form14",(req,res)=>{
    let q="SELECT Bank_ID, Blood_Type, SUM(Quantity_Required) AS total_requested FROM Request GROUP BY Bank_ID, Blood_Type;";

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form20/:staffid",(req,res)=>{
    let {staffid}=req.params;
    console.log(req);
    let q= `SELECT * FROM BloodSample WHERE Staff_ID = ${staffid};`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
        });
    }
    catch(err){
        res.send("Some error with database");
        console.log(err);
    }
});

app.get("/form19/:donorid",(req,res)=>{
    let {donorid}=req.params;
    console.log(req);
    let q= `SELECT * FROM Donation WHERE Donor_ID = ${donorid};`

    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.send(result);
            console.log(result);
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



