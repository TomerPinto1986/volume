import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

import "./VideoPreview.scss";

const VideoPreview = ({ videoId, endSongHandle }) => {
    return (
        <ReactPlayer
            onEnded={endSongHandle}
            url={`https://www.youtube.com/embed/${videoId}`}
            playing={true}
        ></ReactPlayer>
    );
};

export default VideoPreview;
