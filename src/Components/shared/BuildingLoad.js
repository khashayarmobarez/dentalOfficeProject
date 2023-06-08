import React from 'react';
import styles from './BuildingLoad.module.css'

const BuildingLoad = () => {
    return (
        <div className={styles.container}>

            <h2>به زودی...</h2>
            <div className={styles.LoaderContainer}>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
                <div className={styles.loader}></div>
            </div>

        </div>
    );
};

export default BuildingLoad;