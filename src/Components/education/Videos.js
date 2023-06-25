import React, { useContext, useEffect, useState } from 'react';
import styles from './Videos.module.css'

import Video from './Video';

import { videoContext } from './Contexts/VideoContextProvider'


const VideosLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }, []);
  
    if (isLoading) {
      return (
        <div className={styles.loaderContainer}>
             <div className={styles.threeBody}>
                <div className={styles.threeBodyDot}></div>
                <div className={styles.threeBodyDot}></div>
                <div className={styles.threeBodyDot}></div>
            </div>
        </div>
      );
    }
  
    return <Videos />;
  };

const Videos = () => {

    const videos = useContext(videoContext)

    return (
        <div className={styles.Container}>
          <div className={styles.titleContainer}>
            <h1 >ویدیوهای اموزشی اندودونتیکس (endodontics)</h1>
          </div>
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

export default VideosLoader;