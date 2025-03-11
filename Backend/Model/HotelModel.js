const mongoose = requier("mongoose");
const Schema = mongoose.Schena;

const HotelSchema = new Schema({
    FirstName:{
        type:String,
        required:true,

    },
    LastName:{
        type:String,
        required:true,

    },
    StreetAddress:{
        type:String,
        required:true,

    },
    StreetAddress2:{
        type:String,
        required:false,

    },
    City:{
        type:String,
        required:true,

    },
    State:{
        type:String,
        required:true,

    },
    PostalCode:{
        type:String,
        required:false,

    },
    Number:{
        type:String,
        required:true,

    },
    Gmail:{
        type:String,
        required:false,

    },
    ArrivalDate:{
        type:Date,
        required:true,

    },
    ArrivalTime:{
        type:TimeRanges,
        required:true,

    },
    DepartureDate:{
        type:Date,
        required:true,

    },
    DepartureTime:{
        type:TimeRanges,
        required:true,

    },
    NumberAdult:{
        type:Number,
        required:true,
    },
    Anydetail:{
        type:String,
        required:false,
    }



    

});

 module.exports = mongoose.model(
    "HotelModel",
    HotelSchema

)