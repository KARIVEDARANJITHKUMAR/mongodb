const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const cookieParser = require("cookie-parser")
const {PORT,DB_USER,DB_PASSWORD} = process.env

const app = express()
app.use(cookieParser())

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wo8qv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


mongoose.connect(dbURL).then(function(){
    console.log("connection success")
}).catch(e => console.log(e.message))

app.listen(PORT, function(){
    console.log(`Server running at ${PORT}`)
})

app.get("/",  function(req,res) {
    res.cookie("jwt_token","home",{
        maxAge:100000,
        httpOnly:true
    })
    res.status(200).json({
        message:"Thank you for the visit"
    })
})

app.get("/products",function(req,res) {
    let msgStr=""
    if(req.cookies.jwt_token){
        msgStr=`You have already visitied the ${req.cookies.jwt_token}`
    }
    res.status(200).json({
      message:`thank you for accessing the product route ${msgStr}`  
    })
    })

app.get("/clearCookies", function(req,res){
    res.clearCookie("jwt_token",{path:"/"})
    res.status(200).json({
        message:"I have cleared your cookie"
    })
})