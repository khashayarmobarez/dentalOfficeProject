import React from 'react';
import styles from './ClinicPics.module.css';
import { Link } from 'react-router-dom';

import pic1 from '../../media/pictures/Clinic pics/clinic pic 5.jpeg';


const ClinicPics = () => {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

    return (
        <div className={styles.Container}>

            <div className={styles.picsContainer}>
                <div className={styles.backPic}></div>
                <img src={pic1} alt='clinic'/>
            </div>

            <div className={styles.textsContainer}>
                <h1 lang="fa" className={styles.h1}>خدمات تخصصی ریشه دندان را در محیط حرفه‌ای و راحت تجربه کنید.</h1>
                <p lang='fa'>
                استفاده از تکنیک های نوین و منسجم درمانی، برای بالا بردن کیفیت ارائه خدمات بهره گیری از تجربه و دانش دندانپزشکی برای حصول اطمینان ازدرمان ارائه شده محیطی گرم و آرامش بخش، مناسب تمامی گروه های سنی، برای ایجاد آرامش و از بین بردن استرس قبل و حین درمان.
                </p>
                <div className={styles.callData}>
                   <p lang='fa'>تماس برای نوبت دهی :</p>
                    <a href='tel:02122647394'>021-22647394</a>
                    <a href='tel:02122647395'>021-22647395</a>
                    <a href='tel:02122002177'>021-22002177</a>
                    <button className={styles.btn}>
                        <Link to='/Reserve' style={{color: 'white' , textDecoration: 'none'}} onClick={scrollToTop}>نوبت دهی آنلاین</Link>
                    </button>
                </div>
                <div className={styles.DoctorDirectCall}>
                   <a href='https://ig.me/m/dr.zandi.endo'>
                    <p lang='fa'>ارتباط مستقیم با دکتر</p>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ClinicPics;