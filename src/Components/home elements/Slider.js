import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import styles from './Slider.module.css';

// images 
import pic1 from '../../media/pictures/Clinic pics/clinic pic 1 cropped.jpg';
import pic2 from '../../media/pictures/Clinic pics/clinic pic 2.jpg';
import pic3 from '../../media/pictures/Clinic pics/clinic pic 3.jpg'


const slider = () => {
    return (
        <div className={styles.sliderContainer}>

            <div className={styles.OnPicWriting}>
                <h1>دكتر بابك زندى</h1>
                <br/>
                <h1>درمان های تخصصی ریشه دندان</h1>
                <h1>خدمات تخصصی ایمپلنت</h1>
            </div>

            < Carousel showThumbs={false} 
            autoPlay={true}
            interval={3000}
            showArrows={true}
            infiniteLoop={true}>

                <div className={styles.imageContainer} >
                    <img src={pic1} alt='pic1' />
                </div>

                <div className={styles.imageContainer}>
                    <img src={pic3} alt='pic3'/>
                </div>

                <div className={styles.imageContainer}>
                    <img src={pic2} alt='pic2'/>
                </div>

            </ Carousel >
        </div>
    );
};

export default slider;