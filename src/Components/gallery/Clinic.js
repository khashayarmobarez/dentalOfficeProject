import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './albums.module.css'

const BASE_URL = 'https://dentalbackend-dr-babak-zandi.apps.ir-thr-ba1.arvanpaas.ir/api/collections/clinic_gallery/records';
const pictureBaseUrl = 'https://dentalbackend-dr-babak-zandi.apps.ir-thr-ba1.arvanpaas.ir/api/files/16miw221ebxyqor/'


const Clinic = () => {
    
    const[pics, setPics] =useState([])
    
    const getPics = async () => {
      try {
        console.log('Fetching videos...');
        const response = await axios.get(`${BASE_URL}`);
        console.log('Response:', response);
        setPics(response.data.items)
      } catch (error) {
        console.error('Error fetching videos:', error);
        throw error;
      }
    };

    useEffect(() => {
        const fetchApi = async() => {
            getPics()
        }

        fetchApi();
}, [])


    return (
        <div className={styles.container}>
            <div className={styles.picsContainer}>
                {
                    pics.map(pic => <img 
                                    className={styles.image}
                                    src={pictureBaseUrl + pic.id + '/' + pic.pictures}
                                    alt='clinic pictures'
                                    key={pic.id} />)
                }
            </div>
        </div>
    );
};

export default Clinic;