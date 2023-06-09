import React from 'react';
import styles from './Video.module.css'

const Video = () => {
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
                hey
            </div>
        </div>
    );
};

export default Video;