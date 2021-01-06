import "./Stations.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { VideoFilter } from "./../../cmps/VideoFilter/VideoFilter";
import { loadStations } from "../../store/actions/stationActions";
import StationList from "../../cmps/StationList";

const Stations = (props) => {
    const [filterBy, setFilterBy] = useState(null);

    useEffect(() => {
        loadStations(filterBy);
    }, []);

    async function loadStations() {
        //load stations from DB
        await props.loadStations();
        //update state
    }

    const selectStation = (id) => {
        props.history.push(`/station/${id}`);
    };

    return (
        <div className="stations-container">
            {/* <VideoFilter/> */}
            <h2>Stations</h2>
            {props.stations && (
                <StationList
                    selectStation={selectStation}
                    stations={props.stations}
                />
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        stations: state.stationReducer.stations,
        user: state.userReducer.user,
    };
};

const mapDispatchToProps = {
    loadStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
