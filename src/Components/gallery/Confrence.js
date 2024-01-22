// import axios from 'axios';
import React from 'react';
import styles from './albums.module.css'
import { useQuery } from '@apollo/client';
import { GET_CONFRENCE_PICS } from '../../graphQl/queries';




const Confrence = () => {

    const { loading, error, data } = useQuery(GET_CONFRENCE_PICS);

    
    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error: {error.message}</p>;


    console.log(data); 

    return (
        <div className={styles.container}>
            <div className={styles.picsContainer}>
                {
                    data.confrencePics.map(pic => <img
                                    className={styles.image} 
                                    src={pic.confrencePic.url}
                                    alt='confrence pictures'
                                    key={pic.confrencePic.id} />)
                }
            </div>
        </div>
    );
};

export default Confrence;

//     const[pics, setPics] =useState([])
    
//     const getPics = async () => {
//       try {
//         console.log('Fetching videos...');
//         const response = await axios.get(`${BASE_URL}`);
//         console.log('Response:', response);
//         setPics(response.data.items)
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//         throw error;
//       }
//     };

//     useEffect(() => {
//         const fetchApi = async() => {
//             getPics()
//         }

//         fetchApi();
// }, [])