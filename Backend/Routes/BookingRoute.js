const express = require("express");
const router = express.Router();

//Insert model
const Booking = require("../Model/BookingModel")

//Insert Controler
const BookingController = require("../Controllers/BookingControl");

router.get("/",BookingController.getAllBookings);

//export
module.exports = router;
