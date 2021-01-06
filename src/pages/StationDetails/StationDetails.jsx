import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import VideoPreview from "../../cmps/VideoPreview/VideoPreview";
import { getStationById } from "../../store/actions/stationActions";

import "./StationDetails.scss";

const StationDetails = (props) => {
    // const [playlist, setPlaylist] = useState([])
    const [songIdx, setSongIdx] = useState(0);

    useEffect(() => {
        const stationId = props.match.params.id;
        currStation(stationId);
    }, []);

    async function currStation(id) {
        await props.getStationById(id);
        // setPlaylist(props.station.songs)
    }

    return (
        <section>
            <h2>Station Details</h2>
            {props.station && (
                <VideoPreview videoId={props.station.songs[songIdx]} />
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
