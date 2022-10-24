import React, {useState} from 'react'
import styles from "./SuccessfulOrderDeliveryManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import SuccessfulOrderDeliveryDetail from './SuccessfulOrderDeliveryDetail';
export default function SuccessfulOrderDeliveryManagement() {
    const [open, setOpen] = useState(false);
    const showModal = () => {
      setOpen(true);
    };
    const handleCancel = () => {
      setOpen(false);
    };
    return (
      <div>
        <div className="flex flex-row">
          <div
            className=" mt-3 ml-2 text-xl font-semibold"
            style={{ width: "100%" }}
          >
            Có <span className="text-green-800"> 2 </span> đơn hàng thành công
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
            className={`${styles.successfulorderdeliverymanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
            style={{ width: "80%", minHeight: "60rem" }}
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
              <tr>
                <td className="border border-slate-300 text-center">1</td>
                <td className="border border-slate-300 text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-center">
                  Hà Đông, Hà Nội
                </td>
                <td className="border border-slate-300 text-center">
                  8:45 23/02/2001
                </td>
                <td className="border border-slate-300 text-center">8:45 23/02/2001</td>
                <td className="border border-slate-300 text-center"><span className="p-2 bg-green-700 rounded-md text-white">Đang tiếp nhận</span></td>
  
                <td className="border border-slate-300 text-center">
                    

                       <Button
                    type=""
                    className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                    onClick={showModal}
                  >
                    <FaEye />
                  </Button>
                  <Modal
                    open={open}
                    title="Chi tiết đơn hàng của khách hàng"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                  >
                    <SuccessfulOrderDeliveryDetail />
                  </Modal> 
                  
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 text-center">2</td>
                <td className="border border-slate-300 text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-center">
                  Hà Đông, Hà Nội
                </td>
                <td className="border border-slate-300 text-center">
                8:45 23/02/2001
                </td>
                <td className="border border-slate-300 text-center">8:45 23/02/2001</td>
                <td className="border border-slate-300 text-center"><span className="p-2 bg-red-700 rounded-md text-white">Dừng tiếp nhận</span></td>
  
                <td className="border border-slate-300 text-center">
                  <Button
                    type=""
                    className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                    onClick={showModal}
                  >
                    <FaEye />
                  </Button>
                  <Modal
                    open={open}
                    title="Chi tiết đơn hàng của khách hàng"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                  >
                    <SuccessfulOrderDeliveryDetail />
                  </Modal>
                </td>
              </tr>
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
      </div>
    );
}
