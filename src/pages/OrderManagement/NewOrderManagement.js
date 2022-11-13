import React, { useEffect, useState } from "react";
import styles from "./NewOrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import NewOrderDetail from "./NewOrderDetail";
import { getAllCustomerOrderForSellerAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL } from "../../redux/type/order/OrderType";
import OrderHistoryProduct from "../UserOrderHistory/OrderHistoryProduct";
export default function NewOrderManagement(props) {
  const openModal = useSelector(state => state.OrderReducer.openModal);
  const dispatch = useDispatch();
  const showModal = (itemAction) => {
    dispatch({
      type: SHOW_MODAL,
      itemAction
    })
  };
  const handleCancel = () => {
    dispatch({
      type: CLOSE_MODAL
    })

  };
  useEffect(() => {
    dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
  }, [openModal])

  const customerOrdersForSeller = useSelector(state => state.OrderReducer.customerOrdersForSeller);
  console.log("NEW CUSTOMER ORDERS FOR SELLER: ", customerOrdersForSeller);
  return (
    (customerOrdersForSeller.length) > 0 ? <div>
      <div className="flex flex-row">
        <div
          className=" mt-3 ml-2 text-xl font-semibold"
          style={{ width: "100%" }}
        >
          Có <span className="text-green-800"> {customerOrdersForSeller.length} </span> đơn hàng mới
        </div>
        <div
          className="rounded-md mt-3 flex justify-end mr-3 text-black"
          style={{ width: "100%" }}
        >
          <Form>
            <Input
              placeholder="Tìm kiếm"
              className="shadow-none hover:border-green-700 focus:border-green-700"
              style={{ width: "100%", height: "2.5rem" }}
            />
          </Form>
        </div>
      </div>

      <div className="flex justify-center">
        <table
          className={`${styles.newordermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
          style={{ width: "80%", minHeight: "350px" }}
        >
          <thead>
            <tr>
              <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                STT
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                Mã đơn hàng
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                Địa chỉ giao hàng
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                Thời gian tạo
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                Thời gian giao hàng
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                Trạng thái đơn hàng
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                Xem chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {customerOrdersForSeller.map((item, index) => {
              return <tr key={index}>
                <td className="border border-slate-300 text-center">{index + 1}</td>
                <td className="border border-slate-300 text-center">
                  {item.orderNumber}
                </td>
                <td className="border border-slate-300 text-center" style={{ padding: '1rem' }}>
                  {item.address.addressDetail}
                </td>
                <td className="border border-slate-300 text-center">
                  <span className="p-2">{item.orderDate}</span>

                </td>
                <td className="border border-slate-300 text-center">
                  <span className="p-2">{item.deliveryDate}</span>
                </td>
                <td className="border border-slate-300 text-center"><span className="p-2 bg-green-700 rounded-md text-white">{item.status}</span></td>

                <td className="border border-slate-300 text-center">
                  {/* <div>
                  <Button className="mr-2 className='round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow">Xác nhận</Button>
                  <Button className='round-md hover:bg-red-700 hover:text-white hover:border-red-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow'>Hủy đơn</Button>
                </div> */}
                  <Button
                    type=""
                    className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                    onClick={() => { showModal(item) }}
                  >
                    <FaEye />
                  </Button>
                  <Modal
                    open={openModal}
                    key={item.orderNumber}
                    title="Chi tiết đơn hàng của khách hàng"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                  >
                    <NewOrderDetail newDetailInfo={item} />
                  </Modal>

                </td>
              </tr>
            })}


          </tbody>
        </table>
      </div>
      <div className="flex justify-end mb-4" style={{ width: "90%" }}>
        <Pagination
          className="hover:text-green-800 focus:border-green-800"
          defaultCurrent={1}
          total={50}
        />
      </div>
    </div> : <div style={{ minHeight: "485px" }}>
      <div className="text-center" style={{
        width: "80%",
        margin: "30px auto 0 auto",
      }}>
        <div className='flex justify-center items-center mb-3'>
          <img src={require('../../assets/images/cart.png')} style={{ width: '300px' }} />
        </div>

        <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng mới nào cần xử lý</p>

      </div>
    </div >

  );
}
