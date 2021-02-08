import axios from 'axios';
const KEY = 'Enter your Api Key here';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 100,
        key: KEY
    }
})