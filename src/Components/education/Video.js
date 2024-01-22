import React from 'react';
import styles from './Video.module.css'
// import { Link } from 'react-router-dom';

import sharebtn from '../../media/svg/shareIcon.svg'

const Video = (props) => {

    const {videoName,thumbnail,duration,video} = props.videoData;

    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: 'dr.babak zandi website',
            text: {videoName},
            url: {video }
          })
            .then(() => console.log('Link shared successfully.'))
            .catch((error) => console.error('Error sharing link:', error));
        } else {
          console.log('Web Share API is not supported on this browser.');
        }
      };

    return (
        <div className={styles.card}>
            <div className={styles.card__content}>
                    <img src={thumbnail.url} alt='img1'/>
                    
                    <div className={styles.videoData}>
                        <h3>{videoName}</h3>
                        <h3>{duration}</h3>
                    </div>

                    <div className={styles.btns}>
                        <a href={video.url} target='_blank' rel='noreferrer' >
                            <button className={styles.btn}>پخش</button>
                        </a>

                            <button onClick={handleShare} className={styles.btn}><img src={sharebtn} alt='sharebtn' /></button>

                    </div>
            </div>
        </div>
    );
};

export default Video;