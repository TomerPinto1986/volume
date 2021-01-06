import { httpService } from "./httpService"
import axios from 'axios';

export const  stationService = {
    query,
    videoSearch,
    getStationById,
    // save,
    // remove,
};

function query() {
    try{
        const stations = httpService.get('station')
        return stations;
    } catch (err) {
        throw err
    }
}

async function getStationById(id) {
    try{
        const station =httpService.get(`station/${id}`)
        return station;
    } catch(err){
        throw err
    }
}


async function videoSearch(searchTerm) {
    const apiKey = 'AIzaSyAL9hmi8XD2yjr3qrRzuBNP33qgdy5bvss';
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
    const videos = res.data.items.map(video => {
        console.log('video is:',video)
        const { videoId } = video.id
        const { url } = video.snippet.thumbnails.default
        const { title } = video.snippet

        return {
            title,
            videoId,
            thumbnail: url
        }
    })
    return videos
}

// async function videoSearch(searchTerm) {
//     const apiKey = 'AIzaSyAL9hmi8XD2yjr3qrRzuBNP33qgdy5bvss';
//     const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
//     const videos = await res.json();
//     return videos.data.items.map(video => {
//         console.log('video:',video)
//         const { videoId } = video.id
//         const { url } = video.snippet.thumbnails.default
//         const { title } = video.snippet

//         return {
//             title,
//             videoId,
//             thumbnail: url
//         }
//     })
// }




