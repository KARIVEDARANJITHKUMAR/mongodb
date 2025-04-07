const express = require("express");
const cookieParser = require("cookie-parser");
// const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const app = express()
app.use(cookieParser())

const promisify = require ("util").promisify
const promisifiedJwtsign = promisify(jwt.sign)
const promisifiedJwtverify = promisify(jwt.verify)

const payload="1234"
const secretkey="i am secret"

app.get("/sign", async function(req,res) {
    try{
        const authToken = await promisifiedJwtsign({data:payload},secretkey,{expiresIn:"1hr",algorithm:"HS256"})
        res.cookie("jwt_token",authToken,{maxAge:10000,httpOnly:true})
        res.status(200).json({
            status:"success",
            authToken
        })
    }catch(e){
        res.status(400).json({
            status:"failure",
            message:e.message
        })
    }    
})

app.get("/verify", async function(req,res) {
    try{
        const token = req.cookies.jwt
        const decodedToken =  await promisifiedJwtverify(token,secretkey);
        res.status(200).json({
            status:"Success",
            decodedToken
        })
    }catch(e){
        res.status(400).json({
           status:'failure',
           message:e.message 
        })
    } 
})

app.listen(3000, function(req,res){
    console.log("Server running at 3000")
})



