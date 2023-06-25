import React from 'react';
import styles from './Video.module.css'
// import { Link } from 'react-router-dom';

import sharebtn from '../../media/svg/shareIcon.svg'

const Video = (props) => {

    const {video_name,thumbnail,duration,video_player} = props.videoData;

    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: 'dr.babak zandi website',
            text: {video_name},
            url: {video_player}
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
                    <img src={thumbnail} alt='img1'/>
                    
                    <div className={styles.videoData}>
                        <h3>{video_name}</h3>
                        <h3>{duration}</h3>
                    </div>

                    <div className={styles.btns}>
                        <a href={video_player} target='_blank' rel='noreferrer' >
                            <button className={styles.btn}>پخش</button>
                        </a>

                            <button onClick={handleShare} className={styles.btn}><img src={sharebtn} alt='sharebtn' /></button>

                    </div>
            </div>
        </div>
    );
};

export default Video;