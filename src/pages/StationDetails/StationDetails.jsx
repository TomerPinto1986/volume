import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStationById } from "../../store/actions/stationActions";

import "./StationDetails.scss";

const StationDetails = (props) => {
    const [station, setStation] = useState(null);

    useEffect(() => {
        console.log("station details");
        const stationId = props.match.params.id;
        async function currStation() {
            await props.getStationById(stationId);
            setStation(props.station);
        }
        currStation();
        return setStation(null);
    }, []);

    return (
        <section>
            <h2>Station Details</h2>
            {station && (
                <iframe
                    src={`https://www.youtube.com/embed/${station.songs[0].youtubeId}?autoplay=1`}
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
