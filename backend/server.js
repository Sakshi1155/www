const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const stationRoutes = require("./routes/stationRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/stations", stationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));