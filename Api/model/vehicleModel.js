const mongoose = require("mongoose");

const vehicleSchemaRules = {
    brand :{
        type:String,
        required:true,
        maxlength : [40,"Your brand name length is more than 40 characters"]
    },
    vehicleModel:{
        type:String,
        required:true,
        maxlength : [40,"Your vehicleModel name length is more than 40 characters"]
    },
    vehicleRegistrationNumber:{
        type:String,
        required:true,
        maxlength:[10, "Your  vehicleRegistrationNumber length hould not be  more than  10 characters"],
        unique:true
    }
}

const vehicleSchema = new mongoose.Schema(vehicleSchemaRules);
const vehicleModel = mongoose.model("Vehicles_data",vehicleSchema);

module.exports = vehicleModel;