import React from 'react';
import styles from './Video.module.css'
// import { Link } from 'react-router-dom';

const Video = (props) => {

    const {image} = props.videoData;

    return (
        <div className={styles.card}>
            <div className={styles.tools}>
                <div className={styles.circle}>
                <span className={`${styles.red} ${styles.box}`}></span>
                </div>
                <div className={styles.circle}>
                <span className={`${styles.green} ${styles.box}`}></span>
                </div>
                <div className={styles.circle}>
                <span className={`${styles.yellow} ${styles.box}`}></span>
                </div>
            </div>
            <div className={styles.card__content}>
                {/* <Link to={/products/${productData.id }> */}
                    <img src={image} alt='images'/>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Video;