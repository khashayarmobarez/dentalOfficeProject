



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

const Certifications = () => {



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

      </Slider>
  );
};

export default Certifications;