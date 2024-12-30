const express = require("express");
const Station = require("../models/Station");
const router = express.Router();

// Get all stations
router.get("/", async (req, res) => {
    const stations = await Station.find();
    res.json(stations);
});

// Add a station
router.post("/", async (req, res) => {
    const { name, location, availability } = req.body;
    const station = new Station({ name, location, availability });
    const createdStation = await station.save();
    res.status(201).json(createdStation);
});

module.exports = router;
