import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Slider.module.css';

// images 
import pic1 from '../../media/pictures/pic1.jpg';
import pic2 from '../../media/pictures/pic2.jpg';


const slider = () => {
    return (
        <div className={styles.sliderContainer}>
            < Carousel showThumbs={false} 
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
                <div className={styles.imageContainer} >
                    <img src={pic1} alt='pic1' />
                </div>
                <div className={styles.imageContainer}>
                    <img src={pic2} alt='pic2'/>
                </div>
            </ Carousel >
        </div>
    );
};

export default slider;