import React from 'react';
import styles from './Education.module.css'

// context 
import VideoContextProvider from './Contexts/VideoContextProvider';
import Videos from './Videos';


const Education = () => {
    return (
        <VideoContextProvider>
            <div className={styles.container}>
                <Videos />
            </div>
        </VideoContextProvider>
    );
};

export default Education;