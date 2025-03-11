const express = require("express");
const router = express.Router();

//Insert model
const Hotel = require("../Model/HotelModel")

//Insert Controler
const HotelController = require("../Controllers/HotelControl");

router.get("/",HotelController.getAllHotels);

//export
module.exports = router;
