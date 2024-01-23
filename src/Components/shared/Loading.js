import React from 'react';
import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.loader}`}></div>
        </div>
    );
};

export default Loading;