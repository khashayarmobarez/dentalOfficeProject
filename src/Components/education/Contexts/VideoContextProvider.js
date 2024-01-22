import React, { createContext, useEffect, useState } from 'react';

// API 
import { getVideos } from '../../../services/VideosApi';

// context 
export const videoContext = createContext()

const VideoContextProvider = (props) => {

    const[videos, setVideos] = useState([])

    useEffect(() => {
            const fetchApi = async() => {
                setVideos(await getVideos())
            }

            fetchApi();
    }, [])

    return (
        <videoContext.Provider value={videos}>
            {props.children}
        </videoContext.Provider>
    );
};

export default VideoContextProvider;