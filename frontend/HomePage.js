import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../components/Map";

const HomePage = () => {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        const fetchStations = async () => {
            const { data } = await axios.get("/api/stations");
            setStations(data);
        };
        fetchStations();
    }, []);

    return (
        <div>
            <h1>Electric Vehicle Charging Stations</h1>
            <Map stations={stations} />
        </div>
    );
};

export default HomePage;
