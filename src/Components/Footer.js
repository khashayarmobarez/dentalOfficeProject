import React from 'react';
import styles from './Footer.module.css'

// svg 
import instagram from '../media/svg/instagram_icon.svg'
import map from '../media/svg/map-icon.svg'
import waze from '../media/svg/waze_icon.svg'
import telegram from '../media/svg/telegram_icon.svg'



const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.socialMedia}>
                <img src={instagram} alt='insta logo' />
                <img src={map} alt='map logo' />
                <img src={waze} alt='waze logo' />
                <img src={telegram} alt='telegram logo' />
             </div>

            <div className={styles.simpleLine}></div>

            <div className={styles.clinicData}>
                <p lang="fa">دندانپزشکی دکتر زندی</p>
                <p lang="fa">تهران - شریعتی - روبروی خیابان کلاهدوز<br/> (دولت) - خیابان امامزاده - پلاک 1 - طبقه دوم</p>
                <p>dr.b.zandi@gmail.com</p>
                <p>021-22002177</p>
                <p className={styles.developer}>webApp made by <a href='https://www.linkedin.com/in/khashayarmobarez/' target='_blank' rel='noreferrer'>khashayarMB</a></p>
            </div>
        </div>
    );
};

export default Footer;