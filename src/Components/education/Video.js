import React from 'react';
import styles from './Video.module.css'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Video = (props) => {

    const {video_name,thumbnail,duration,video_player} = props.videoData;


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
                        <Link to='/soon'>
                            <button className={styles.btn}>توضیحات</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Video;