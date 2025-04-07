const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const {PORT,DB_USER,DB_PASSWORD} = process.env
const app = express()
app.use(express.json())

const VehicleRouter = require("./route/vehicleRouter")

const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wo8qv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(dbURL).then(function(){
    console.log("Connection Success")
}).catch(e => console.log(e.message))

app.listen(PORT, function(req,res){
    console.log(`Server running at ${PORT}`)
})

app.use(express.json())
app.use("/api/vehicle",VehicleRouter);