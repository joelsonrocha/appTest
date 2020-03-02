import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/'
});

export const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search'
});

// ?key=AIzaSyBATggqbN572t_vlFyNq8L5_GFiEPhLAmk&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30
