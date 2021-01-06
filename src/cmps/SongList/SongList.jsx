import React from "react";

import "./SongList.scss";

const SongList = ({ playlist }) => {
    console.log(playlist);
    return (
        <ul>
            {playlist.map((song) => {
                return (
                    <li key={song.id}>
                        <img src={song.imgUrl} alt="" />
                    </li>
                );
            })}
        </ul>
    );
};

export default SongList;
