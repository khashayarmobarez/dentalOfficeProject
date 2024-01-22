// import axios from 'axios';
import React from 'react';
import styles from './albums.module.css'

// graphql 
import { useQuery } from '@apollo/client';
import { GET_DENTAL_OFFICE_PICS } from '../../graphQl/queries';


const Clinic = () => {

    const { loading, error, data } = useQuery(GET_DENTAL_OFFICE_PICS);

    
    
    
    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error: {error.message}</p>;
    
    // Check if data is undefined
    if (!data || !data.dentalOfficePics) {
        return <p>No data available</p>;
    }

    console.log(data); 
    
    return (
        <div className={styles.container}>
            <div className={styles.picsContainer}>
                {
                    data.dentalOfficePics.map(pic => <img 
                                    className={styles.image}
                                    src={pic.officePic.url}
                                    alt='clinic pictures'
                                    key={pic.officePic.id} />)
                }
            </div>
        </div>
    );
};

export default Clinic;