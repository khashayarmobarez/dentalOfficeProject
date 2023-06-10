import React, { useContext } from 'react';
import styles from './Videos.module.css'

import Video from './Video';

import { videoContext } from './Contexts/VideoContextProvider'


const Videos = () => {

    const videos = useContext(videoContext)

    return (
        <div className={styles.Container}>
            <div className={styles.VideosContainer} >
                {
                videos.map(video => <Video 
                                        className={styles.video}
                                        key={video.id}
                                        videoData={video}
                                        />)
                                                }
            </div>
        </div>
    );
};

export default Videos;