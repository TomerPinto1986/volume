import "./Stations.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { VideoFilter } from "./../../cmps/VideoFilter/VideoFilter";
import { loadStations } from "../../store/actions/stationActions";
import StationList from "../../cmps/StationList";

const Stations = (props) => {
    const [stations, setStations] = useState(null);
    const [filterBy, setFilterBy] = useState(null);

    useEffect(() => {
        loadStations(filterBy);
    }, []);
    console.log("props", props);

    async function loadStations() {
        //load stations from DB
        await props.loadStations();
        setStations(props.stations);
        //update state
    }

    const selectStation = (id) => {
        console.log(id, "selcted station id");
        console.log(props, "PROPS");
        props.history.push(`/station/${id}`);
    };

    return (
        <div>
            {/* <VideoFilter/> */}
            <h2>Stations</h2>
            {stations && (
                <StationList
                    selectStation={selectStation}
                    stations={stations}
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
