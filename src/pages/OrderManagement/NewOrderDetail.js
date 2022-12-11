import { Button, notification, Popconfirm } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./NewOrderDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerOrderForSellerAction } from "../../redux/action/order/OrderAction";

export default function NewOrderDetail(props) {
  console.log("NEW ORDER DETAIL INFO: ", props.newDetailInfo);
  const item = useSelector(state => state.OrderReducer.item);
  const dispatch = useDispatch();
  let totalBill = 0;
  const textAccept = 'Bạn có chắc chắn muốn duyệt đơn hàng này ?';
  const textReject = 'Bạn có chắc chắn muốn hủy đơn hàng này ?';
  // const openNotification = (placement) => {
  //   notification.success({
  //     message: `Cập nhật trạng thái đơn hàng thành công`,
  //     placement,
  //     duration: 2
  //   });
  // };
  const handleAcceptNewOrder = (orderNumber) => {
    dispatch(updateCustomerOrderForSellerAction(orderNumber, 1));
    // openNotification('bottomRight')
  }
  const handleRejectNewOrder = (orderNumber) => {
    dispatch(updateCustomerOrderForSellerAction(orderNumber, 4));
    // openNotification('bottomRight')
  }
  return (
    <div className="">
      <div className="">
        <div className="text-2xl font-bold mb-2">Mã Đơn hàng: {item.orderNumber}</div>
        <div className="mb-2">
          <div className="text-base font-semibold">Thông tin khách hàng</div>
          <div className="text-base">
            Họ tên người nhận: <span>{item.fullName}</span>
          </div>
          <div className="text-base">
            Số điện thoại:<span> {item.phoneNumber}</span>
          </div>
          <div className="text-base">
            Địa chỉ:<span> {item.address?.addressDetail}</span>
          </div>

          <div className="text-base">
            Ghi chú:<span> {item.notes}</span>
          </div>
        </div>
        {/* <div className="mb-2">
          <div className="text-base font-semibold">Thông tin shipper</div>
          <div className="text-base">
            Shipper:
            <select
              className="p-1 ml-2"
              style={{ border: "1px solid lightgray", borderRadius: "5px" }}
            >
              <option>Nguyen Van A</option>
            </select>
          </div>
        </div> */}
        <div>
          <div className="text-base font-semibold">Thông tin đơn hàng</div>
          <div>
            <div className="text-base">
              Thời gian tạo:<span> {item.orderDate}</span>
            </div>
            <div className="text-base">
              Thời gian nhận hàng:<span> {item.deliveryDate} - {item.deliveryTimeRange}</span>
            </div>
            <div className="text-base">
              Trạng thái đơn hàng:
              <span className="text-green-700"> {item.status}</span>
            </div>
          </div>
          <div className="overflow-y-auto">
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
                {item?.orderDetail?.map((item, index) => {
                  totalBill += item.price * item.quantity;
                  return <tr>
                    <td className="border border-slate-300 text-base text-center">
                      {index + 1}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {/* {item?.thumbnails?.map((item, index) => {
                        if (index == 0) {
                          return <img key={index}
                            src={item}
                          />
                        }
                      })} */}
                      <img key={index}
                        src={item.thumbnails} />
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.productName}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.sku}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.totalPrice / item.quantity}
                    </td>
                    <td className="border border-slate-300 text-base text-center">
                      {item.quantity}
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
            <div className="flex justify-end mr-5 text-lg font-medium mb-2">
              {item?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Phí vận chuyển:<span className="text-red-600 font-semibold">
                  30,000đ</span>
              </div> : <Fragment></Fragment>}
            </div>
            <div className="flex justify-end mr-5 text-xl font-semibold">
              {item?.receiveProductsMethod == "Giao Tận Nhà" ? <div>
                Thành tiền:<span className="text-red-600"> {(totalBill + 30000).toLocaleString()}đ</span>
              </div> : <div>
                Thành tiền:<span className="text-red-600"> {(totalBill).toLocaleString()}đ</span>
              </div>}

            </div>
          </div>
          <div className="flex justify-end items-center mt-3" style={{ width: "98%" }}>
            <Popconfirm placement="top"
              onConfirm={() => { handleAcceptNewOrder(item.orderNumber) }}
              title={textAccept}
              okText="Yes" cancelText="No">
              <Button className="mr-2 round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow"
              >
                Xác nhận
              </Button>
            </Popconfirm>

            <Popconfirm placement="top"
              onConfirm={() => { handleRejectNewOrder(item.orderNumber) }}
              title={textReject}
              okText="Yes" cancelText="No">

              <Button className='round-md hover:bg-red-700 hover:text-white hover:border-red-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow'
              >
                Hủy đơn
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    </div>
  );
}
