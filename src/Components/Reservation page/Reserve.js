import React, { useState } from 'react';
import axios from 'axios';
import styles from './Reserve.module.css'

const Reserve = () => {

    // state 
    const [formData , setFormData ] = useState({
        name: '',
        number: '',
        description:'',
        picture:'',
    })

    // handle change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        console.log(formData)
      };

    // handle submit 
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Send the form data to the server
        axios
          .post('https://example.com/api/endpoint', formData)
          .then((response) => {
            // Handle the server response if needed
            console.log(response.data);
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
    
        // Reset the form data
        setFormData({
          name: '',
          number: '',
          description: '',
          picture: '',
        });
      };

    return (
        <div className={styles.Container} >

            <div className={styles.Form}>

            <div className={styles.writingsContainer}>
                <h1>دریافت نوبت دندانپزشکی</h1>
            </div>

                <div className={styles.nameNumber}>

                    <div>
                        <h3>نام و نام خانوادگی خود را وارد کنید</h3>
                        <input className={styles.input} type='text' placeholder='بابک زندی' name='name' value={formData.name} onChange={handleChange}/>
                    </div>

                    <div>
                        <h3>شماره خود را وارد کنید</h3>
                        <input className={styles.input} type="text" placeholder='0912 3** *789' name='number' value={formData.number} onChange={handleChange}/>
                    </div>

                </div>

            <div className={styles.description}>
                        <h3>توضیحات</h3>
                        <input className={styles.input} type='text' placeholder='...برای دکتر بنویسید' name='description' value={formData.description} onChange={handleChange}/>
            </div>

            <div className={styles.picUpload}>
                <h3>عکس از دندان</h3>
                <label htmlFor="imageUpload" className={styles.customFileInput}>
                    Choose File
                </label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className={styles.fileInput}
                    name='picture'
                    value={formData.picture}
                    onChange={handleChange}
                />
             </div>

             <div className={styles.confirm}>
                <button type='submit' onClick={handleSubmit}>
                    ثبت
                </button>
             </div>


            </div>
        </div>
    );
};

export default Reserve;