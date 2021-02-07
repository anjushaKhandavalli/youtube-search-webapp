import axios from 'axios';
const KEY = 'AIzaSyBePx-FRH03DefIzIVrDi1L9NHCT7KkWmY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 100,
        key: KEY
    }
})