import React from 'react';
import styles from './Videos.module.css'

import Video from './Video';

// import { videoContext } from './Contexts/VideoContextProvider'
import { useQuery } from '@apollo/client';
import { GET_DOC_VIDEOS } from '../../graphQl/queries';
import Loading from '../shared/Loading';
  
  
  
 
  
  const Videos = () => {

    const { loading, error, data } = useQuery(GET_DOC_VIDEOS);

    if (loading) return <Loading />;
    
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)
    return (
        <div className={styles.Container}>
          <div className={styles.titleContainer}>
            <h1 >ویدیوهای اموزشی اندودونتیکس (endodontics)</h1>
          </div>
            <div className={styles.VideosContainer} >
                {
                data.doctorVideos.map(video => <Video 
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