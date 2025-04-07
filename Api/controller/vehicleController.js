const vehicleModel = require("../model/vehicleModel");

const  {
    getAllfactory,
    getByIdFactory,
    postFactory,
    deleteFactory,
    updateFactory
} = require("../utility/crudFactory")

const getAllVehicles = getAllfactory(vehicleModel);
const getvehiclesbyId = getByIdFactory(vehicleModel);
const createVehiclesHandlers = postFactory(vehicleModel);
const deleteVehicleById = deleteFactory(vehicleModel);
const updateVehicleHandler = updateFactory(vehicleModel);

module.exports = {
    getAllVehicles,
    getvehiclesbyId,
    createVehiclesHandlers,
    deleteVehicleById,
    updateVehicleHandler
}