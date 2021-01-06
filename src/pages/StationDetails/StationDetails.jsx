import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStationById } from "../../store/actions/stationActions";

import "./StationDetails.scss";

const StationDetails = (props) => {

    useEffect(() => {
        console.log("station details");
        const stationId = props.match.params.id;
        console.log('id?:',stationId);
        currStation(stationId);
       
    }, []);
    

    async function currStation(stationId) {
        await props.getStationById(stationId);
    }

    return (
        <section>
            <h2>Station Details</h2>
            {props.station && (
                <iframe
                    src={`https://www.youtube.com/embed/${props.station.songs[0].youtubeId}?autoplay=1`}
                    allow="autoplay"
                ></iframe>
            )}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        station: state.stationReducer.station,
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    getStationById,
};

export default connect(mapStateToProps, mapDispatchToProps)(StationDetails);
