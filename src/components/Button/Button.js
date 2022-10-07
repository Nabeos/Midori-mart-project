import React from 'react'
import styles from './Button.module.css';

export default function Button() {
    return (
        <div>
            {/* Đây là nơi chứa form mẫu của button nhé */}
            <button className='bg-green-700 text-white p-2 rounded-md hover:bg-green-800'>
                Mua sắm ngay
            </button>
        </div>
    )
}
