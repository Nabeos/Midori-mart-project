import React, { useEffect, useState } from 'react'
import styles from "./DeliveringOrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import DeliveringOrderDetail from './DeliveringOrderDetail';
import { getAllCustomerOrderForSellerAction, getAllDeliveringCustomerOrderLengthForSellerAction } from '../../redux/action/order/OrderAction';
import { CLOSE_MODAL_DELIVERING_SELLER, SHOW_MODAL_DELIVERING_SELLER } from '../../redux/type/order/OrderType';
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useStateCallback } from "use-state-callback";

export default function DeliveringOrderManagement() {
  const openModalDeliveringSeller = useSelector(state => state.OrderReducer.openModalDeliveringSeller);
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  console.log("openModalDeliveringSeller", openModalDeliveringSeller);
  const dispatch = useDispatch();
  const showModal = (deliveringSellerItemAction) => {
    dispatch({
      type: SHOW_MODAL_DELIVERING_SELLER,
      deliveringSellerItemAction
    })
  };
  const handleCancel = () => {
    dispatch({
      type: CLOSE_MODAL_DELIVERING_SELLER
    })

  };
  useEffect(() => {
    setCurrentCustom(1);
    dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
    dispatch(getAllDeliveringCustomerOrderLengthForSellerAction(1000, 0));
  }, [openModalDeliveringSeller])

  useEffect(() => {
    setCurrentCustom(1);
    dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
    dispatch(getAllDeliveringCustomerOrderLengthForSellerAction(1000, 0));
  }, [localStorage.getItem("keyOrder")])

  const onShowSizeChangeCustom = (current, pageSize) => {
    console.log("CÓ VÀO ON SHOW SIZE CHANGE");
    console.log("CURRENT onShowSizeChangeCustom: ", current);
    console.log("pageSize onShowSizeChangeCustom: ", pageSize);
    if (current == 0) {
      current = 1;
      setCurrentCustom(1);
    }
  };
  const handlePaginationChange = (page, pageSize) => {
    console.log("CÓ VÀO HANDLE PAGINATION CHANGE");
    console.log("PAGE handlePaginationChange: ", page);
    console.log("PAGE SIZE handlePaginationChange: ", pageSize);
    setCurrentCustom(page);
    dispatch(getAllCustomerOrderForSellerAction(15, (page - 1) * 15, localStorage.getItem("keyOrder")));
  }

  const customerOrdersForSeller = useSelector(state => state.OrderReducer.customerOrdersForSeller);
  console.log("DELIVERING CUSTOMER ORDERS FOR SELLER: ", customerOrdersForSeller);
  const deliveringCustomerOrdersLengthForSeller = useSelector(state => state.OrderReducer.deliveringCustomerOrdersLengthForSeller);
  console.log("delivering LENGTH: ", deliveringCustomerOrdersLengthForSeller.length);
  return (
    (customerOrdersForSeller.length) > 0 ? <div>
      <div className="flex flex-row">
        <div
          className=" mt-3 ml-2 text-xl font-semibold"
          style={{ width: "100%" }}
        >
          Có <span className="text-green-800"> {deliveringCustomerOrdersLengthForSeller.length} </span> đơn hàng đang giao
        </div>
        <div
          className="rounded-md mt-3 flex justify-end mr-3 text-black"
          style={{ width: "100%" }}
        >
          {/* <Form>
            <Input
              placeholder="Tìm kiếm"
              className="shadow-none hover:border-green-700 focus:border-green-700"
              style={{ width: "100%", height: "2.5rem" }}
            />
          </Form> */}
          {/* <div className="rounded-md mt-3 flex justify-end mr-3">
            <Form>
              <InputGroup className={` `} >
                <FormControl
                  name="header__search"
                  className={` form-control shadow-none outline-none `}
                  placeholder="Tìm kiếm đơn hàng"
                  style={{ width: '300px' }}
                />
                <InputGroup.Text className="text-white">
                  <SearchOutlined className="cursor-pointer" />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center">
        <table
          className={`${styles.deliveringordermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
          style={{ width: "80%", minHeight: "370px" }}
        >
          <thead>
            <tr>
              <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                Id
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
                <td className="border border-slate-300 text-center">{item.id}</td>
                <td className="border border-slate-300 text-center">
                  {item.orderNumber}
                </td>
                <td className="border border-slate-300 text-center" style={{ padding: '1rem' }}>
                  {item.address.addressDetail}
                </td>
                <td className="border border-slate-300 text-center">
                  <span className='p-2'>{item.orderDate}</span>
                </td>
                <td className="border border-slate-300 text-center">
                  <span className='p-2'>{item.deliveryDate}</span>
                </td>
                <td className="border border-slate-300 text-center"><span className="p-2 bg-yellow-600 rounded-md text-white">{item.status}</span></td>

                <td className="border border-slate-300 text-center">

                  <Button
                    type=""
                    className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                    onClick={() => { showModal(item) }}
                  >
                    <FaEye className='text-xl' />
                  </Button>
                  <Modal
                    open={openModalDeliveringSeller}
                    title="Chi tiết đơn hàng của khách hàng"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                  >
                    <DeliveringOrderDetail deliveringDetailInfo={item} />
                  </Modal>
                </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
      <div className="flex justify-center mb-4">
        <Pagination
          className="hover:text-green-800 focus:border-green-800"
          current={currentCustom}
          defaultCurrent={1}
          pageSize={15}
          // pageSizeOptions={3}
          onChange={(page) => { handlePaginationChange(page) }}
          // showSizeChanger
          // onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
          total={deliveringCustomerOrdersLengthForSeller.length}
        />
      </div>
    </div> : <div style={{ minHeight: "520px" }}>
      <div className="text-center" style={{
        width: "80%",
        margin: "30px auto 0 auto",
      }}>
        <div className='flex justify-center items-center mb-3'>
          <img src={require('../../assets/images/cart.png')} style={{ width: '300px' }} />
        </div>

        <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng nào đang giao</p>

      </div>
    </div >
  );
}
