import React from 'react'
import styles from "./NewOrderDetail.module.css";
export default function OrderDetail() {
  return (
    <div>
         <div>
           <div className='text-2xl font-bold mb-2'>Mã Đơn hàng: 23022001</div> 
      <div className="mb-2">
        <div className="text-base font-semibold">Thông tin vận chuyển</div>
        <div className="text-base">
          Đơn vị vận chuyển:<span> ĐKT Xpress</span>
        </div>
        <div className="text-base">
          Trạng thái đơn hàng:
          <span className="text-green-700"> Đang xử lí</span>
        </div>
        <div className="text-base">
          Trạng thái giao hàng:
          <span className="text-green-700"> Đang giao</span>
        </div>
      </div>
      <div className="mb-2">
        <div className="text-base font-semibold">Thông tin khách hàng</div>
        <div className="text-base">
          Họ tên người nhận:<span> Đinh Kông Thành</span>
        </div>
        <div className="text-base">
          Số điện thoại:<span> 0385010068</span>
        </div>
        <div className="text-base">
          Địa chỉ:<span> abcxyz</span>
        </div>
        <div className="text-base">
          Thời gian nhận hàng:<span> 8:45 23/02/2001</span>
        </div>
        <div className="text-base">
          Ghi chú:<span> tà lằng tà lằng</span>
        </div>
      </div>
      <div>
        <div className="text-base font-semibold">Thông tin đơn hàng</div>
        <div className="overflow-y-auto" style={{height:"30rem"}}>
          <table
            className={`${styles.neworderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
          >
            <thead>
              <tr>
                <th className="border border-slate-300 p-4 text-base text-center">
                  STT
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Ảnh sản phẩm
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Tên sản phẩm
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Mã sản phẩm
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Giá tiền
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Số lượng
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 text-base text-center">
                  1
                </td>
                <td className="border border-slate-300 text-base text-center">
                  <img src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-KG-Thit-dui-heo-MeatDeli-(S).jpg" />
                </td>
                <td className="border border-slate-300 text-base text-center">
                  Nạc heo hảo hạng
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23.000đ
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 text-base text-center">
                  2
                </td>
                <td className="border border-slate-300 text-base text-center">
                  <img src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-KG-Thit-dui-heo-MeatDeli-(S).jpg" />
                </td>
                <td className="border border-slate-300 text-base text-center">
                  Nạc heo hảo hạng
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23.000đ
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 text-base text-center">
                  3
                </td>
                <td className="border border-slate-300 text-base text-center">
                  <img src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-KG-Thit-dui-heo-MeatDeli-(S).jpg" />
                </td>
                <td className="border border-slate-300 text-base text-center">
                  Nạc heo hảo hạng
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23.000đ
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 text-base text-center">
                  4
                </td>
                <td className="border border-slate-300 text-base text-center">
                  <img src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-KG-Thit-dui-heo-MeatDeli-(S).jpg" />
                </td>
                <td className="border border-slate-300 text-base text-center">
                  Nạc heo hảo hạng
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23.000đ
                </td>
                <td className="border border-slate-300 text-base text-center">
                  23
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end mr-5 text-lg font-medium mb-2">
          <div>Phí vận chuyển:<span> 23tr</span></div>
          </div>
          <div className="flex justify-end mr-5 text-xl font-semibold">
            <div>Thành tiền:<span className="text-red-600"> 23tr</span></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
