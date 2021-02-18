import React from 'react';
import { useState, useEffect } from "react";
import '../RoverPhoto/RoverPhoto.scss'
import { RoverPhoto } from '../RoverPhoto/RoverPhoto';

function Curiosity() {
    const [curiosityPhotoData, setCuriosityPhotoData] = useState(null);
    const [searchDate, setSearchDate] = useState("2012-08-08");
    const [submitDate, setSubmitDate] = useState("2012-08-08");
    useEffect(() => {
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&earth_date=${submitDate}&camera=navcam&api_key=${process.env.REACT_APP_NASA_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setCuriosityPhotoData(data)
            })
    }, [submitDate]);

    function searchForNewDate() {
        setSubmitDate(searchDate)
    }

    if (!curiosityPhotoData) {
        return <div>Waiting for data!</div>
    }

    let curiosityPhoto = curiosityPhotoData.photos.slice(0, 6);
    let photoAvailableBoolean = false;
    let displayDataJsx
    if (curiosityPhoto.length > 0) {
        photoAvailableBoolean = true;
    }

    if (photoAvailableBoolean == true) {
        displayDataJsx = <RoverPhoto photoData={curiosityPhoto} />
    } else {
        displayDataJsx = <div>No photos available for this date. Please choose a different date. Curiosity rover has been on Mars from 2012-08-06 till today. Some dates may not have images</div>
    }

    return (
        <div>
            <h1>Curiosity Rover</h1>
            <label className="rover-date-top-padding">
                Date
                <input className="rover-input-date" type="date" name="searchDate" onChange={e => setSearchDate(e.target.value)} />
                <button className="rover-input-date" onClick={() => searchForNewDate()}>Search</button>
            </label>
            {displayDataJsx}
        </div>
    )
}

export { Curiosity }