const Event = require("../Model/EventModel");

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        if (!events.length) {
            return res.status(404).json({ message: "Events not found" });
        }
        return res.status(200).json({ events });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Add a new event
const addEvent = async (req, res) => {
    const { FirstName, LastName, City, Number, Gmail, NumberAdult, Date, Time, Location, EventCategory } = req.body;

    try {
        const newEvent = new Event({ FirstName, LastName, City, Number, Gmail, NumberAdult, Date, Time, Location, EventCategory });
        await newEvent.save();
        return res.status(201).json({ event: newEvent });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Unable to add event" });
    }
};

// Get event by ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        return res.status(200).json({ event });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Update event details
const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ message: "Unable to update event" });
        }
        return res.status(200).json({ event: updatedEvent });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete event
const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Unable to delete event" });
        }
        return res.status(200).json({ message: "Event deleted successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

// Export controllers
module.exports = {
    getAllEvents,
    addEvent,
    getEventById,
    updateEvent,
    deleteEvent
};
