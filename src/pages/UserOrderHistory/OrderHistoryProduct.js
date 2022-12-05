import React from 'react'
import styles from "./OrderHistoryProduct.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { Button, notification, Popconfirm } from "antd";
import { cancelInProgressOrderForCustomerAction, refundOrderForCustomerAction } from '../../redux/action/order/OrderAction';

export default function OrderHistoryProduct() {
  const inProgressItem = useSelector(state => state.OrderReducer.inProgressItem);
  const textRefundOrder = 'Quý khách có chắc chắn muốn trả lại đơn hàng này ?';
  console.log("SUCCESSFUL ORDER ITEM DETAIL: ", inProgressItem);
  const dispatch = useDispatch();
  let totalBill = 0;
  // const openNotification = (placement) => {
  //   notification.success({
  //     message: `Cập nhật trạng thái đơn hàng thành công`,
  //     placement,
  //     duration: 2
  //   });
  // };
  const handleCancelInProgressOrderForCustomer = (orderNumber) => {
    dispatch(refundOrderForCustomerAction(orderNumber));
    // openNotification('bottomRight')
  }
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {inProgressItem.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận:<span> {inProgressItem.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {inProgressItem.phoneNumber}</span>
          </div>
          <div className="text-base">
            Địa chỉ:<span> {inProgressItem.address.addressDetail}</span>
          </div>

          <div className="text-base">
            Ghi chú:<span> {inProgressItem.notes}</span>
          </div>
        </div>
        {/* <div className="mb-2">
          <div className="text-base font-semibold">Thông tin shipper</div>
          <div className="text-base">
            Shipper: <span> Nguyen Van A</span>
          </div>
        </div> */}
        <div>
          <div className="text-base font-semibold">Thông tin đơn hàng</div>
          <div>
            <div className="text-base">
              Thời gian tạo:<span> {inProgressItem.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {inProgressItem.deliveryDate} - {inProgressItem.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-green-700"> {inProgressItem.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.orderhistoryproduct__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
                {inProgressItem.orderDetail.map((item, index) => {
                  totalBill += item.price * item.quantity;
                  return <tr key={index}>
                    <td className="border border-slate-300 text-base text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      <img src={item.thumbnails} />
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.productName}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.sku}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.price}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.quantity}
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
            <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              <div>
                {/* Phí vận chuyển:<span> 23tr</span> */}
              </div>
            </div>
            <div className="flex justify-end mr-5 text-xl font-semibold">
              <div>
                Thành tiền:<span className="text-red-600"> {totalBill.toLocaleString()}đ</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-3" style={{ width: "98%" }}>
            <Popconfirm placement="top"
              onConfirm={() => { handleCancelInProgressOrderForCustomer(inProgressItem.orderNumber) }}
              title={textRefundOrder}
              okText="Yes" cancelText="No">
              <Button className="text-lg rounded-md bg-yellow-500 border-yellow-500 text-white no-shadow hover:bg-yellow-500 hover:border-yellow-500 hover:text-white focus:bg-yellow-500 focus:border-yellow-500 focus:text-white">Trả lại hàng</Button>
            </Popconfirm>
          </div>

        </div>
      </div>
    </div>
  );
}


