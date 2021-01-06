import React from "react";

import "./VideoPreview.scss";

const VideoPreview = ({ videoId }) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay"
        ></iframe>
    );
};

export default VideoPreview;
