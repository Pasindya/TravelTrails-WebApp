const express = require("express");
const router = express.Router();

// Import model
const Event = require("../Model/EventModel");

// Import controller
const EventController = require("../Controllers/EventControl");

// Routes
router.get("/", EventController.getAllEvents);       // Get all events
router.post("/", EventController.addEvent);          // Add a new event
router.get("/:id", EventController.getEventById);    // Get event by ID
router.put("/:id", EventController.updateEvent);     // Update event by ID
router.delete("/:id", EventController.deleteEvent);  // Delete event by ID

module.exports = router;
