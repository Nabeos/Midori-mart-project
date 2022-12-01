import React from 'react'
import styles from "./DeliveringOrderDetail.module.css";
import { Button, notification, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { handleFinishDeliveringCustomerOrderAction } from '../../redux/action/order/OrderAction';

export default function DeliveringOrderDetail(props) {
  const dispatch = useDispatch();
  let totalBill = 0;
  const textFinishDelivering = 'Bạn có chắc chắn đơn hàng này đã được giao ?';

  const deliveringSellerItem = useSelector(state => state.OrderReducer.deliveringSellerItem);
  console.log(" deliveringSellerItem: ", deliveringSellerItem);
  // const openNotification = (placement) => {
  //   notification.success({
  //     message: `Cập nhật trạng thái đơn hàng thành công`,
  //     placement,
  //     duration: 2
  //   });
  // };
  const handleFinishDeliveringCustomerOrder = (orderNumber) => {
    dispatch(handleFinishDeliveringCustomerOrderAction(orderNumber, 3));
    // openNotification('bottomRight')
  }
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {deliveringSellerItem.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận:<span> {deliveringSellerItem.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {deliveringSellerItem.phoneNumber}</span>
          </div>
          <div className="text-base">
            Địa chỉ:<span> {deliveringSellerItem.address.addressDetail}</span>
          </div>

          <div className="text-base">
            Ghi chú:<span> {deliveringSellerItem.notes}</span>
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
              Thời gian tạo:<span> {deliveringSellerItem.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {deliveringSellerItem.deliveryDate} - {deliveringSellerItem.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-yellow-600"> {deliveringSellerItem.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto" style={{ height: "30rem" }}>
            <table
              className={`${styles.deliveringorderdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-3`}
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
                {deliveringSellerItem.orderDetail.map((item, index) => {
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
                      {item.price}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.quantity}
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
            {/* <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              <div>
                Phí vận chuyển:<span> 23tr</span>
              </div>
            </div> */}
            <div className="flex justify-end mr-5 text-xl font-semibold">
              <div>
                Thành tiền:<span className="text-red-600"> {deliveringSellerItem?.totalBill?.toLocaleString()}đ</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center mt-3" style={{ width: "98%" }}>
            <Popconfirm placement="top"
              onConfirm={() => { handleFinishDeliveringCustomerOrder(deliveringSellerItem.orderNumber) }}
              title={textFinishDelivering}
              okText="Yes" cancelText="No">
              <Button className="mr-2 round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow"
              >
                Đã giao hàng
              </Button>
            </Popconfirm>

          </div>
        </div>
      </div>
    </div>
  );
}
