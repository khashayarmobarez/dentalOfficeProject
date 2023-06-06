import React from 'react';
import styles from './Insta.module.css';

import iphone from '../../media/PNGs/iphone.png'
import ipad from '../../media/PNGs/ipadPro.png'
import iphPic from '../../media/pictures/InstaGram/phoneVersion.jpg'
import ipadPic from '../../media/pictures/InstaGram/tabletVersion.png'

import instagram from '../../media/svg/Instagram-Wordmark-Logo.wine.svg'


const Insta = () => {

    

    return (
        <div className={styles.container}>

          <div className={styles.instaContainer}>
              <a href="https://www.instagram.com/dr.b.zandi/" target='_blank' rel='noreferrer'>
                <img src={iphone} className={styles.iphone} alt="instagram" />
              </a>
              <a href="https://www.instagram.com/dr.b.zandi/" target='_blank' rel='noreferrer'>
                <img src={ipad} className={styles.ipad} alt="instagram" />
              </a>
                <img src={iphPic} className={styles.iphoneInsta} alt="instagram" />
                <img src={ipadPic} className={styles.ipadInsta} alt="instagram" />
                <img src={instagram} className={styles.instagramLogo} alt="social" />
          </div>

      <div className={styles.locationContainer}>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d809.2499119695782!2d51.435530269596526!3d35.77538499828483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1685359638618!5m2!1sen!2sus"
          height="450"
          title="Location Map"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a href='https://goo.gl/maps/mQj69Unz77tFbbis5' target='_blank' rel='noreferrer'>open on the map</a>
      </div>
        </div>
    );
};

export default Insta;