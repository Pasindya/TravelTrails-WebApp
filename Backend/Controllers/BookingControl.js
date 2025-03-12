const Hotel = require("../Model/BookingModel");

const getAllBookings = async (req, res, next) =>{

    let Bookings;
    try{
        bookings = await Booking.find();
    }catch (err) {
        console.log(err);
    }

    //notfound
    if(!Bookings){
        return res.status(404).json({message:"Booking not found"})
    }
    //Display all bookings
    return res.status(200).json({bookings});
};

//data insert
const addBookings  = async (req, res, next) =>{
    
}

exports.getAllBookings = getAllBookings;