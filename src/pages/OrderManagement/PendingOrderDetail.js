import React, { Fragment } from 'react'
import styles from "./PendingOrderDetail.module.css";
import { Button, notification, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleFinishCustomerGetInStoreOrderAction, handleFinishDeliveringCustomerOrderAction, startDeliveringCustomerOrderAction, updateCustomerOrderForSellerAction } from '../../redux/action/order/OrderAction';

export default function PendingOrderDetail(props) {
  let totalBill = 0;
  const dispatch = useDispatch();
  const textStartDelivering = 'Bạn có chắc chắn muốn bắt đầu giao đơn hàng này ?';
  const textFinishDelivering = 'Bạn có chắc chắn đơn hàng này khách đã lấy ?';
  const pendingSellerItem = useSelector(state => state.OrderReducer.pendingSellerItem);
  console.log("pendingSellerItem: ", pendingSellerItem);
  // const openNotification = (placement) => {
  //   notification.success({
  //     message: `Cập nhật trạng thái đơn hàng thành công`,
  //     placement,
  //     duration: 2
  //   });
  // };
  const handleStartDeliveringOrder = (orderNumber) => {
    dispatch(startDeliveringCustomerOrderAction(orderNumber, 2));
    // openNotification('bottomRight')
  }
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {pendingSellerItem.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận:<span> {pendingSellerItem.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {pendingSellerItem.phoneNumber}</span>
          </div>
          <div className="text-base">
            Địa chỉ:<span> {pendingSellerItem.address.addressDetail}</span>
          </div>

          <div className="text-base">
            Ghi chú:<span> {pendingSellerItem.notes}</span>
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
              Thời gian tạo:<span> {pendingSellerItem.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {pendingSellerItem.deliveryDate} - {pendingSellerItem.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-yellow-600"> {pendingSellerItem.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.pendingorderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
                {pendingSellerItem.orderDetail.map((item, index) => {
                  totalBill += item.price * item.quantity;
                  return <tr>
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
                      {item.price.toLocaleString()}đ
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.quantity}
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
            <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              {pendingSellerItem?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Phí vận chuyển:<span className="text-red-600 font-semibold">
                  30,000đ</span>
              </div> : <Fragment></Fragment>}
            </div>
            <div className="flex justify-end mr-5 text-xl font-semibold">
              {pendingSellerItem?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Thành tiền:<span className="text-red-600"> {(totalBill + 30000)?.toLocaleString()}đ</span>
              </div> : <div>
                Thành tiền:<span className="text-red-600"> {totalBill?.toLocaleString()}đ</span>
              </div>}
            </div>
          </div>
          <div className="flex justify-end items-center mt-3" style={{ width: "98%" }}>
            {pendingSellerItem.receiveProductsMethod == "Nhận Tại Cửa Hàng" ? <Popconfirm placement="top"
              onConfirm={() => {
                dispatch(handleFinishCustomerGetInStoreOrderAction(pendingSellerItem.orderNumber, 3));
              }}
              title={textFinishDelivering}
              okText="Yes" cancelText="No">
              <Button className="mr-2 round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow"
              >
                Khách đã lấy hàng
              </Button>
            </Popconfirm> : <Popconfirm placement="top"
              onConfirm={() => { handleStartDeliveringOrder(pendingSellerItem.orderNumber) }}
              title={textStartDelivering}
              okText="Yes" cancelText="No">
              <Button className="mr-2 round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow"
              >
                Bắt đầu giao
              </Button>
            </Popconfirm>}


          </div>
        </div>
      </div>
    </div>
  );
}
