import React from 'react';
import styles from './Biography.module.css'

import DoctorPicture from '../../media/pictures/Doctor PIctures/Doc pic 1.jpg'

const Biography = () => {
    return ( 
        <div className={styles.Container}>

            <div className={styles.DoctorPics}>
                <img src={DoctorPicture} alt='docpic' />
            </div>

            <div className={styles.description}>
                <h1 lang='fa'>دكتر بابك زندى</h1>
                <p lang="fa">
                اندودنتيست<br/> 
فارغ التحصيل دوره عمومى سال ١٣٧٠ <br/>
دوره تخصصى و بورد تخصصى سال ١٣٧٦<br/>
از دانشكده دندانپزشكى شهيد بهشتى<br/>
مدرس و استاديار بخش اندودنتيكس دانشكده دندانپزشكى شهيد بهشتى از ١٣٨٢ تا كنون <br/>
استاديار بخش اندودنتيكس دانشكده دندانپزشكى اهواز ١٣٧٦-١٣٧٩<br/>
رئيس هيئت مديره انجمن دندانپزشكى استان خوزستان ١٣٧٧-١٣٧٩<br/>
قائم مقام علمى كنگره ٥٤ انجمن دندانپزشكى ايران <br/>
مشاور عالى رياست كنگره ٥٥ انجمن دندانپزشكى ايران <br/>
دبير اجرايى دهمين كنگره انجمن اندودنتيستهاى ايران ١٣٨٦<br/>
مسئول اجرايى پنلهاى علمى كنگره ٥١ انجمن دندانپزشكى ايران<br/>
مسئول برنامه هاى عملى كنگره ٤٤ انجمن دندانپزشكى ايران <br/>
مسئول اجرايى پنلهاى  علمى كنگره ٤٦ انجمن دندانپزشكى ايران <br/>
دبير علمى مجله دندانپزشكان جوان ١٣٨٦-١٣٩٦ <br/>
داراى مدرك مديريت كلينيك<br/>
 MBA Healthcare ١٣٩٨<br/>
                </p>
            </div>
        </div>
    );
};

export default Biography;