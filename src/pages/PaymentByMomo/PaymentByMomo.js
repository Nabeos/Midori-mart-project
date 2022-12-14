import React from 'react'
import styles from './PaymentByMomo.module.css';
import { BarcodeOutlined, ArrowLeftOutlined, CreditCardOutlined, WalletOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { history } from '../../App';
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';

export default function PaymentByMomo() {
    let user = JSON.parse(localStorage.getItem(USER));
    console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
                color: 'black'
            }}
            spin
        />
    );

    const handleReturnToPaymentMethodPage = () => {
        history.push("/payment/1000");
    }

    return (
        (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
            <div style={{ width: '75%', margin: '0 auto' }}>
                <div className='flex flex-col'>
                    <div className='flex justify-between mb-3 h-12'>
                        <div>

                        </div>
                        <div className='flex'>
                            <div className='flex items-center mr-2'>
                                <img src="https://payment.momo.vn/gw_payment/faces/javax.faces.resource/images/hotline.svg" className='mr-2' style={{ width: '40px' }} />
                                <span>1900 54 54 41</span>
                            </div>
                            <div className='flex items-center'>
                                <img src="https://payment.momo.vn/gw_payment/faces/javax.faces.resource/images/email.svg" className='mr-2' style={{ width: '40px' }} />
                                <a href="mailto:hotro@momo.vn" className="text-black no-underline">hotro@momo.vn</a>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center justify-center mb-4'>
                        <div className={`${styles.paymentByMomo__sidebar__left} text-white px-4 pt-10 pb-12`} style={{ backgroundColor: '#af206f' }}>
                            <div className='mb-4'>
                                <p className='text-white text-lg'>????n h??ng h???t h???n sau:</p>
                                <span className='text-2xl'>09:59</span>
                            </div>
                            <div className='mb-4 pb-2' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                <p className='text-white text-xl mb-0'>Nh?? cung c???p</p>
                                <span className='text-lg'>C??NG TY TNHH ?????U T?? QU???C T??? MIDORI MART</span>
                            </div>
                            <div className='mb-4 pb-2' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                <div className='flex'>
                                    <ion-icon name="cash-outline"></ion-icon>
                                    <h6 className='text-white ml-2'>S??? ti???n</h6>
                                </div>
                                <span>385.700??</span>
                            </div>
                            <div className='mb-4 pb-2' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                <div className='flex'>
                                    <CreditCardOutlined className='mr-2' />
                                    <h6 className='text-white'>Th??ng tin</h6>
                                </div>
                                <span>thanh-toan-ma-don-hang-na181201</span>
                            </div>
                            <div className='mb-3 pb-2' style={{ borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                <div className='flex'>
                                    <BarcodeOutlined className='mr-2' />
                                    <h6 className='text-white'>????n h??ng</h6>
                                </div>
                                <span>140171002024449</span>
                            </div>
                            <div className=''>
                                <span className='cursor-pointer flex justify-center items-center' onClick={handleReturnToPaymentMethodPage}>
                                    <ArrowLeftOutlined />
                                    <span className='ml-1'>Quay l???i</span>
                                </span>

                            </div>
                        </div>
                        <div className='' style={{ boxShadow: '1px 1px 5px 0 rgba(0, 0, 0, 0.2)', width: '480px', height: '625px' }}>
                            <div className='mb-3' style={{ borderBottom: '1px solid #d7e2e7' }}>
                                <div className='flex justify-between'>
                                    <div>
                                        <img src="/images/midorimart_brand_Toan.png" style={{ width: '200px' }} />
                                    </div>
                                    <div>
                                        <img className='mr-9 pt-2' src="https://payment.momo.vn/gw_payment/faces/javax.faces.resource/material/img/logo-1.png" style={{ width: '120px' }} />
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div>
                                    <h5 className='text-center font-medium' style={{ color: '#af206f' }}>Qu??t m?? ????? thanh to??n</h5>
                                </div>
                                <div>
                                    <img src="https://payment.momo.vn/gw_payment/qrcode/image/receipt?key=c05811ced2cb838c031564baa6af6a19d8d834e5" style={{ width: '250px' }} />
                                </div>
                                <div className='text-center'>

                                    <p className='text-sm ml-3 h-fit mb-0'> <img src="https://payment.momo.vn/gw_payment/faces/javax.faces.resource/material/img/qr-code-1.png" className='inline mr-2' style={{ width: '20px' }} />S??? d???ng App MoMo ho???c<br />
                                        <span>???ng d???ng Camera h??? tr??? QR code ????? qu??t m??.</span>
                                    </p>
                                </div>
                                <div className='mt-4 flex'>
                                    <Spin className='mr-2' indicator={antIcon} />
                                    <p className='text-sm'>??ang ch??? b???n qu??t ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center mb-3'>
                            <a href="https://momo.vn">
                                <img src='https://payment.momo.vn/gw_payment/faces/javax.faces.resource/material/img/pci.png' style={{ width: '300px' }} />
                            </a>
                        </div>
                        <div className='mb-3 text-center'>?? 2019 - C???ng thanh to??n qua V?? ??i???n t??? <span className='font-bold' style={{ color: '#af206f' }}>MoMo</span></div>
                    </div>
                </div>
            </div> : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
    )
}
