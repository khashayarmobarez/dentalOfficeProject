import React from 'react';
import styles from './home elements/Home.module.css'

import SliderLoader from './home elements/Slider';
import ClinicPics from './home elements/ClinicPics';
import Biography from './home elements/Biography';
import Certifications from './home elements/Certifications';
import Insta from './home elements/Insta';
import Posters from './home elements/Posters';



const Home = () => {
    return (
        <div className={styles.container}>
           <SliderLoader />
           <ClinicPics />
           <Biography />
           {/* <h1 className={styles.h1}>certifications</h1> */}
           <Certifications/>
           <Insta />
           <Posters />
        </div>
    );
};

export default Home;