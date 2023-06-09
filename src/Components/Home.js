import React from 'react';
import styles from './home elements/Home.module.css'

import Slider from './home elements/Slider';
import ClinicPics from './home elements/ClinicPics';
import Biography from './home elements/Biography';
import Certifications from './home elements/Certifications';
import Insta from './home elements/Insta';



const Home = () => {
    return (
        <div className={styles.container}>
           <Slider />
           <ClinicPics />
           <Biography />
           <Certifications/>
           <Insta />
        </div>
    );
};

export default Home;