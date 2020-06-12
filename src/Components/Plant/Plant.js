import React, { useEffect, useState } from 'react';
import './Plant.scss';
import SoilClient from '../../Clients/SoilClient';



export default () => {
    const maximumMoisture = 600;
    const minimumMoisture = 400;

    const [moisture, setMoisture] = useState(400);
    const [moistureLevel, setMoistureLevel] = useState(0);

    useEffect(async () => {
        const soilClient = new SoilClient();

        async function setInitial() {
            const currentMoisture = await soilClient.getLatestMoisture();
            setMoisture(currentMoisture.moisture);
            let normalizedMoisture = ((currentMoisture.moisture - minimumMoisture) / (maximumMoisture - minimumMoisture)) * 100;
            setMoistureLevel(normalizedMoisture);
        };
        setInitial();

        const interval = setInterval(async () => {
            const latestMoisture = await soilClient.getLatestMoisture();
            setMoisture(latestMoisture.moisture);
            let normalizedMoisture = ((latestMoisture.moisture - minimumMoisture) / (maximumMoisture - minimumMoisture)) * 100;
            setMoistureLevel(normalizedMoisture);
        }, 30 * 1000);
        return () => clearInterval(interval);
    }, [])

    return <div className="wrapper">
        <p>Moisture level: {`${moistureLevel}%`}</p>
        <div className="progressBar">
            <div className="progressBarFiller" style={{ width: `${moistureLevel}%` }}></div>
        </div>

    </div>
}