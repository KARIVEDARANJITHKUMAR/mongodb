const express = require("express");
const {
    getAllVehicles,
    getvehiclesbyId,
    createVehiclesHandlers,
    deleteVehicleById,
    updateVehicleHandler
} = require("../controller/vehicleController");

const VehicleRouter = express.Router()

VehicleRouter.get("/",getAllVehicles);
VehicleRouter.get("/:elementId",getvehiclesbyId);
VehicleRouter.post("/",createVehiclesHandlers);
VehicleRouter.put("/:elementId",updateVehicleHandler);
VehicleRouter.delete("/:elementId",deleteVehicleById);

module.exports = VehicleRouter