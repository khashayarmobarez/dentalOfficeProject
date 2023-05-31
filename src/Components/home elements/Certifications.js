



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Certifications.module.css';

import cert1 from '../../media/pictures/certifications/cert 1.jpg'
import cert2 from '../../media/pictures/certifications/cert 2.jpg'
import cert3 from '../../media/pictures/certifications/cert 3.jpg'
import cert4 from '../../media/pictures/certifications/certification 4.jpg'
import cert5 from '../../media/pictures/certifications/5.jpg'
import cert6 from '../../media/pictures/certifications/6.jpg'
import cert7 from '../../media/pictures/certifications/7.jpg'
import cert8 from '../../media/pictures/certifications/8.jpg'
import cert9 from '../../media/pictures/certifications/9.jpg'
import cert10 from '../../media/pictures/certifications/10.jpg'
import cert11 from '../../media/pictures/certifications/11.jpg'
import cert12 from '../../media/pictures/certifications/certificate 1.jpg'
import cert13 from '../../media/pictures/certifications/certificate 2.jpg'
import cert14 from '../../media/pictures/certifications/certificate 6.jpg'
import cert15 from '../../media/pictures/certifications/certificate 8.jpg'
import cert16 from '../../media/pictures/certifications/end 1.jpg'
import cert17 from '../../media/pictures/certifications/end 2.jpg'
import cert18 from '../../media/pictures/certifications/end 3.jpg'

const Certifications = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  


  return (

      <Slider className={styles.slider} {...settings}>

        <div className={styles.imgComp}>
          <img src={cert1} alt="pic1" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert2} alt="pic2" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert3} alt="pic3" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert4} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert5} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert6} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert7} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert8} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert9} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert10} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert11} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert12} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert13} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert14} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert15} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert16} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert17} alt="certification" />
        </div>

        <div className={styles.imgComp}>
          <img src={cert18} alt="certification" />
        </div>

      </Slider>
  );
};

export default Certifications;