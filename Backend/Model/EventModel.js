const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require('shortid'); // Import shortid

const EventSchema = new Schema({
    _id: {
        type: String,
        default: function () {
            return 'EVT-' + shortid.generate(); // Prefix + unique ID
        }
    },
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Number: {
        type: String,
        required: true,
    },
    Gmail: {
        type: String,
        required: true,
    },
    NumberAdult: {
        type: Number,
        required: true,
    },
    Date: {
        type: String, // Dropdown selection for specific event dates
        enum: ["2025-03-15", "2025-04-01", "2025-05-10"], // Example dates, add more as needed
        required: true,
    },
    Time: {
        type: String, // Dropdown selection for time slots
        enum: ["10:00 AM", "02:00 PM", "06:00 PM"], // Example time slots, add more as needed
        required: true,
    },
    Location: {
        type: String, // Dropdown selection for event locations
        enum: ["Colombo", "Kandy", "Galle", "Ella", "Sigiriya"], // Example locations, add more as needed
        required: true,
    },
    EventCategory: {
        type: String, // Dropdown selection for event categories
        enum: ["Cultural Show", "Adventure Tour", "Beach Party", "Wildlife Safari"], // Example categories
        required: true,
    },
});

module.exports = mongoose.model("Event", EventSchema);