import React from 'react';
import styles from './Reserve.module.css'

const Reserve = () => {
    return (
        <div className={styles.Container} >

            <div className={styles.Form}>

            <div className={styles.writingsContainer}>
                <h1>دریافت نوبت دندانپزشکی</h1>
            </div>

                <div className={styles.nameNumber}>

                    <div>
                        <h3>شماره خود را وارد کنید</h3>
                        <input className={styles.input} type="text" placeholder='0912 345 6789'/>
                    </div>

                    <div>
                        <h3>نام و نام خانوادگی خود را وارد کنید</h3>
                        <input className={styles.input} type='text' placeholder='بابک زندی'/>
                    </div>

                </div>

            <div className={styles.description}>
                        <h3>توضیحات</h3>
                        <input className={styles.input} type='text' placeholder='...برای دکتر بنویسید'/>
            </div>



            </div>
        </div>
    );
};

export default Reserve;