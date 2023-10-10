import React, { useState } from 'react';
import axios from 'axios';
import styles from './Reserve.module.css'
import { ToastContainer,toast } from 'react-toastify'

const Reserve = () => {

    // state 
    const [formData , setFormData ] = useState({
        full_name: '',
        phone_number: '',
        description:  '',
        client_picture:'',
    })

    // handle change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    // handle submit 
      const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
    
        // Send the form data to the server
        axios
          .post('https://dentalbackend-dr-babak-zandi.apps.ir-thr-ba1.arvanpaas.ir/api/collections/reservation/records', formData)
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
    
        // Reset the form data
        setFormData({
          full_name: "",
        phone_number: '',
        description:  "",
        client_picture:"",
        });
      };

    return (
        <div className={styles.Container} >

            <div className={styles.Form}>

            {/* soon to work card */}
            {/* <div className={styles.card}>
                <h1>این بخش فعلا غیر فعال می باشد.<br/>برای رزرو وقت با شماره ی زیر تماس بگیرید:</h1>
                <a href='tel:02122647394'>021-22647394</a>
                <a href='tel:02122647395'>021-22647395</a>
                <a href='tel:02122002177'>021-22002177</a>
            </div> */}

            <div className={styles.writingsContainer}>
                <h1 lang='fa'>دریافت نوبت دندانپزشکی</h1>
            </div>

                <div className={styles.nameNumber}>

                    <div>
                        <h3>نام و نام خانوادگی خود را وارد کنید</h3>
                        <input className={styles.input} type='text' placeholder='بابک زندی' name='full_name' value={formData.full_name} onChange={handleChange}/>
                    </div>

                    <div>
                        <h3>شماره خود را وارد کنید</h3>
                        <input className={styles.input} type="text" placeholder='0912 3** *789' name='phone_number' value={formData.phone_number} onChange={handleChange}/>
                    </div>

                </div>

            <div className={styles.description}>
                        <h3>توضیحات</h3>
                        <input className={styles.input} type='text' placeholder='...برای دکتر بنویسید' name='description' value={formData.description} onChange={handleChange}/>
            </div>

            <div className={styles.explanation}>
              <p>
                تا 24 ساعت اینده با شما برای تعیین وقت تماس گرفته می شود
              </p>
            </div>

            {/* <div className={styles.picUpload}>
                <h3>عکس از دندان</h3>
                <label htmlFor="imageUpload" className={styles.customFileInput}>
                    Choose File
                </label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className={styles.fileInput}
                    name='client_picture'
                    value={formData.client_picture}
                    onChange={handleChange}
                />
             </div> */}

             <div className={styles.confirm}>
                <button className={styles.button} type='submit' onClick={handleSubmit}>
                    ثبت
                </button>
             </div>


            </div>
        </div>
    );
};

export default Reserve;