import axios from "axios";

const BASE_URL = 'https://dentalbackend-dr-babak-zandi.apps.ir-thr-ba1.arvanpaas.ir/api/collections/videos/records';

const getVideos = async () => {
  try {
    console.log('Fetching videos...');
    const response = await axios.get(`${BASE_URL}`);
    console.log('Response:', response);
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export { getVideos };

// https://fakestoreapi.com/products?limit=4 
// https://dentalbackend-dr-babak-zandi.apps.ir-thr-ba1.arvanpaas.ir/api/collections/videos/records 