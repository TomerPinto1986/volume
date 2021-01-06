import React from "react";

import "./StationPreview.scss";

const StationPreview = ({ station, selectStation }) => {
    console.log(station);

    // function handleSelect() {
    //     console.log(station._id);
    //     selectStation(station._id);
    // }

    return (
        <li
            onClick={() => selectStation(station._id)}
            className="station-preview flex column justify-center"
        >
            <img src={station.imgUrl} />
            <h2>{station.name}</h2>
            <span>{station.description}</span>
        </li>
    );
};

export default StationPreview;
