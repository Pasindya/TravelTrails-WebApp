const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/BookingRoute")

const app = express();

//Middleware
app.use("/bookings",router);

//database connection
mongoose.connect("mongodb+srv://travel:1234@cluster0.nitw6zk.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));