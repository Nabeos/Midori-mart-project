import React from "react";
import styles from "./UserOrderPendingDetail.module.css";
import { Button } from "antd";
export default function UserOrderPendingDetail() {
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: 23022001</div>
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
            Ghi chú:<span> tà lằng tà lằng</span>
          </div>
        </div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin shipper</div>
          <div className="text-base">
            Shipper: <span> Nguyen Van A</span>
          </div>
        </div>
        <div>
          <div className="text-base font-semibold">Thông tin đơn hàng</div>
          <div>
            <div className="text-base">
              Thời gian tạo:<span> 8:45 23/02/2001</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> 8:45 23/02/2001</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-green-700"> Đang giao</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.userorderpendingdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
              <div>
                Phí vận chuyển:<span> 23tr</span>
              </div>
            </div>
            <div className="flex justify-end mr-5 text-xl font-semibold">
              <div>
                Thành tiền:<span className="text-red-600"> 23tr</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3" style={{width:"98%"}}>
            <Button className="text-lg rounded-md bg-green-700 border-green-700 text-white no-shadow hover:bg-green-700 hover:border-green-700 hover:text-white focus:bg-green-700 focus:border-green-700 focus:text-white mr-2">Xác nhận</Button>
            <Button className="text-lg rounded-md bg-red-700 border-red-700 text-white no-shadow hover:bg-red-700 hover:border-red-700 hover:text-white focus:bg-red-700 focus:border-red-700 focus:text-white mr-2">Hủy đơn hàng</Button>
            <Button className="text-lg rounded-md bg-yellow-500 border-yellow-500 text-white no-shadow hover:bg-yellow-500 hover:border-yellow-500 hover:text-white focus:bg-yellow-500 focus:border-yellow-500 focus:text-white">Trả lại hàng</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
