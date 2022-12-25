import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from "./Loading.module.css";

export default function Loading() {
    let isLoading = useSelector(state => state.LoadingReducer.isLoading);
    return (
        isLoading ? <div className="fixed text-white  text-4xl z-20 top-0 left-0 flex justify-center items-center" style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
            {/* <div className='bg-black'> */}
            {/* <img src="/images/banner/vnpay.jpg" style={{ width: "300px" }} className="" /> */}
            {/* <img src="/images/gif/black_loading.gif" /> */}
            <div className={styles.loading}></div>
            {/* <img src="https://gifimage.net/wp-content/uploads/2018/10/black-background-loading-gif-4.gif" style={{ width: "300px" }} /> */}
            {/* </div> */}
        </div> : <Fragment></Fragment>
    )
}
