import React from 'react'
import styles from "./RevenueGeneralInformation.module.css";
export default function RevenueGeneralInformation() {
  return (
    <div className="flex justify-center mt-3">
           <div
      className="mr-5 ml-5 rounded-md"
      style={{
        width:"70%",
        height: "100%",
        boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className='flex justify-center bg-green-700 text-white p-4 text-xl font-semibold rounded-t-md'>
        Number
      </div>
      <div className='flex justify-center p-4 font-medium text-lg'>
      Tổng doanh số
      </div>
    </div>
    <div
      className="mr-5 rounded-md"
      style={{
        width:"70%",
        height: "100%",
        boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className='flex justify-center bg-purple-700 text-white p-4 text-xl font-semibold rounded-t-md'>
        Number
      </div>
      <div className='flex justify-center p-4 font-medium text-lg'>
      Tổng lợi nhuận
      </div>
    </div>
    <div
      className="mr-5 rounded-md"
      style={{
        width:"70%",
        height: "100%",
        boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className='flex justify-center bg-blue-700 text-white p-4 text-xl font-semibold rounded-t-md'>
        Number
      </div>
      <div className='flex justify-center p-4 font-medium text-lg'>
      Tổng đơn hàng đã nhận
      </div>
    </div>
    <div
      className="mr-5 rounded-md"
      style={{
        width:"70%",
        height: "100%",
        boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className='flex justify-center bg-red-700 text-white p-4 text-xl font-semibold rounded-t-md'>
        Number
      </div>
      <div className='flex justify-center p-4 font-medium text-lg'>
      Tổng sản phẩm đã bán
      </div>
    </div>  
  </div>
  )
}
