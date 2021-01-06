import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SongList from "../../cmps/SongList/SongList";
import VideoPreview from "../../cmps/VideoPreview/VideoPreview";
import { getStationById } from "../../store/actions/stationActions";

import "./StationDetails.scss";

const StationDetails = (props) => {
    const [songIdx, setSongIdx] = useState(0);
    const [currList, setCurrList] = useState([]);

    useEffect(() => {
        const stationId = props.match.params.id;
        currStation(stationId);
    }, []);

    async function currStation(id) {
        const station = await props.getStationById(id);
        setCurrList(station.songs.slice(1));
    }

    function endSongHandle() {
        setSongIdx(songIdx + 1);
        setCurrList((prevState) => prevState.slice(songIdx + 1));
    }

    return (
        <section>
            <h2>Station Details</h2>
            {props.station && currList.length && (
                <>
                    <VideoPreview
                        endSongHandle={endSongHandle}
                        videoId={props.station.songs[songIdx].youtubeId}
                    />
                    <SongList playlist={currList} />
                </>
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
