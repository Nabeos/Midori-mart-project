import React, { useEffect, useState } from "react";
import styles from "./NewOrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs, Popconfirm } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import NewOrderDetail from "./NewOrderDetail";
import { getAllCustomerOrderForSellerAction, getAllCustomerOrderLengthForSellerAction, updateCustomerOrderForSellerAction, updateCustomerOrderForSellerOutsideAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL } from "../../redux/type/order/OrderType";
import OrderHistoryProduct from "../UserOrderHistory/OrderHistoryProduct";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useStateCallback } from "use-state-callback";

export default function NewOrderManagement(props) {
  console.log("PROPS.KEY NEW = ", props.keyNew);
  const openModal = useSelector(state => state.OrderReducer.openModal);
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  let countTotal = 0;
  // {
  //   productListLengthByCategoryId.map((item, index) => {
  //     if (item.deleted == 0) {
  //       countTotal++;
  //     }
  //   })
  // }
  console.log("countTotal = ", countTotal);
  const dispatch = useDispatch();
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
  const textAccept = 'Bạn có chắc chắn muốn duyệt đơn hàng này ?';
  const textReject = 'Bạn có chắc chắn muốn hủy đơn hàng này ?';
  const handleAcceptNewOrder = (orderNumber) => {
    dispatch(updateCustomerOrderForSellerOutsideAction(orderNumber, 1));
    // localStorage.setItem("flagOrderOutside", orderNumber);
    // openNotification('bottomRight')
  }
  const handleRejectNewOrder = (orderNumber) => {
    dispatch(updateCustomerOrderForSellerOutsideAction(orderNumber, 4));
    // openNotification('bottomRight')
  }

  // useEffect(() => {
  //   localStorage.setItem("flagOrderOutside", 1);
  // }, [])


  useEffect(() => {
    dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
    dispatch(getAllCustomerOrderLengthForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
    setCurrentCustom(1);
  }, [openModal])

  useEffect(() => {
    setCurrentCustom(1);
    dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
    dispatch(getAllCustomerOrderLengthForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
  }, [localStorage.getItem("keyOrder")])

  // useEffect(() => {
  //   setCurrentCustom(1);
  //   dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
  //   dispatch(getAllCustomerOrderLengthForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
  // }, [localStorage.getItem("flagOrderOutside")])

  const customerOrdersForSeller = useSelector(state => state.OrderReducer.customerOrdersForSeller);
  console.log("NEW CUSTOMER ORDERS FOR SELLER: ", customerOrdersForSeller);
  const customerOrdersLengthForSeller = useSelector(state => state.OrderReducer.customerOrdersLengthForSeller);
  console.log("CUSTOMER ORDERS LENGTH FOR SELLER: ", customerOrdersLengthForSeller.length);







  return (
    (customerOrdersForSeller.length) > 0 ? <div>
      <div className="flex flex-row">
        <div
          className=" mt-3 ml-2 text-xl font-semibold"
          style={{ width: "100%" }}
        >
          Có <span className="text-green-800"> {customerOrdersLengthForSeller.length} </span> đơn hàng mới
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
          className={`${styles.newordermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
          style={{ width: "80%", minHeight: "350px" }}
        >
          <thead>
            <tr>
              {/* <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                Id
              </th> */}
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
              <th className="border border-slate-300 p-4 text-lg text-center">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {customerOrdersForSeller.map((item, index) => {
              return <tr key={index}>
                {/* <td className="border border-slate-300 text-center">
                  {item.id}
                </td> */}
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
                    <FaEye className='text-xl' />
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
                <td className="border border-slate-300 text-center" style={{ width: "150px" }}>
                  <div className="flex p-2">
                    <div>
                      <Popconfirm placement="top"
                        onConfirm={() => { handleAcceptNewOrder(item.orderNumber) }}
                        title={textAccept}
                        okText="Yes" cancelText="No">
                        <Button className="mr-2 round-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:text-black focus:bg-white focus:border-gray-300 no-shadow"
                        >
                          Xác nhận
                        </Button>
                      </Popconfirm>
                    </div>
                    <div>
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
          total={customerOrdersLengthForSeller.length}
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

        <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng mới nào cần xử lý</p>

      </div>
    </div >

  );
}
