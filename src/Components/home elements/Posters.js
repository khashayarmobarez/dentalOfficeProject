import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Posters.module.css';

import post1 from '../../media/pictures/posters/poster1.jpg'
import post2 from '../../media/pictures/posters/poster2.jpg'
import post3 from '../../media/pictures/posters/poster3.jpg'

const Posters = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
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
          <img src={post1} alt="poster" />
        </div>
        <div className={styles.imgComp}>
          <img src={post2} alt="poster" />
        </div>
        <div className={styles.imgComp}>
          <img src={post3} alt="poster" />
        </div>

      </Slider>
    );
};

export default Posters;