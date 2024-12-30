const mongoose = require("mongoose");

const stationSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    availability: { type: Boolean, default: true },
});

module.exports = mongoose.model("Station", stationSchema);
