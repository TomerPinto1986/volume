import React from "react";
import StationPreview from "../StationPreview/StationPreview";

import "./StationList.scss";

const StationList = (props) => {
    // const handleClick = (id) => {
    //     console.log("station ID", id);
    // };
    return (
        <section>
            <h2>Station List</h2>
            <ul className="station-list clean-list">
                {props.stations.map((station) => {
                    return (
                        <StationPreview
                            selectStation={props.selectStation}
                            // selectStation={(id) => props.selectStation}
                            key={station._id}
                            station={station}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default StationList;
