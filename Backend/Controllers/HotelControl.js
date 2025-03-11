const Hotel = require("../Model/HotelModel");

const getAllHotels = async (req, res, next) =>{

    let Hotels;
    try{
        hotels = await Hotel.find();
    }catch (err) {
        console.log(err);
    }

    //notfound
    if(!hotels){
        return res.status(404).json({message:"Booking not found"})
    }
    //Display all bookings
    return res.status(200).json({hotels});
};

exports.getAllHotels = getAllHotels;