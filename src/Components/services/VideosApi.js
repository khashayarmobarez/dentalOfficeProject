import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products?limit=8';    

const getVideos = async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data;
}

export {getVideos};