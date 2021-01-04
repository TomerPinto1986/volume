// import axios from  'axios'

// async function videoSearch(searchTerm) {
//     const apiKey = 'AIzaSyAL9hmi8XD2yjr3qrRzuBNP33qgdy5bvss';
//     const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&videoEmbeddable=true&type=video&key=${apiKey}&q=${searchTerm}`);
//     const videos = res.data.items.map(video => {
//         const { videoId } = video.id
//         const { url } = video.snippet.thumbnails.default
//         const { title } = video.snippet

//         return {
//             title,
//             videoId,
//             thumbnail: url
//         }
//     })
//     return videos
// }


// export const utilService = {
//     videoSearch
// }