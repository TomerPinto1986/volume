import "./Stations.scss";
import { useEffect, useState } from 'react';


import {VideoFilter} from './../../cmps/VideoFilter/VideoFilter';
import { stationService } from './../../services/stationService';


const Stations = (props) => {
    const [stations, setStations] = useState([]);
    const [filterBy, setFilterBy] = useState(null)
    // const dispatch = useDispatch()
    useEffect(() => {
        loadStations(filterBy)

    },[])
    
    async function loadStations() {
        //get videosa from api
        const videos = await stationService.videoSearch('naruto');
        console.log(videos);
        setStations(videos);
        //update state
    }

    return (
        <div>
            {/* <VideoFilter/> */}
            <h2>Stations</h2>
        </div>
    );
};

export default Stations;
