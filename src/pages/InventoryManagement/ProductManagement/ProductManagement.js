import React, { useState } from 'react'
import {
    Button,
    Form,
    Modal,
    Popover,
    Pagination,
    Input,
    Tabs,
    Checkbox,
} from "antd";
import { FaEye, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./ProductManagement.module.css";
import AddNewProduct from '../AddNewProduct';


export default function ProductManagement() {
    // const text = <span>Lọc sản phẩm</span>;
    // const content = (
    //     <div
    //         className="col-span-2 mt-3 pl-3"
    //         style={{
    //             minHeight: "20rem",
    //         }}
    //     >
    //         <div className="mb-2">
    //             <div className="font-semibold">Danh mục sản phẩm</div>
    //             <Checkbox>Rau</Checkbox>
    //             <Checkbox>Thịt</Checkbox>
    //             <Checkbox>Đồ uống</Checkbox>
    //         </div>
    //         <div>
    //             <div className="font-semibold">Trạng thái hàng trong kho</div>
    //             <Checkbox>Còn hàng</Checkbox>
    //             <Checkbox>Sắp hết hàng</Checkbox>
    //             <Checkbox>Hết hàng</Checkbox>
    //         </div>
    //     </div>
    // );

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    return (
        <div>
            <div className="flex">
                <div className="mt-3 ml-3" style={{ width: "100%" }}>
                  <select className='rounded-md' style={{ border:"1px solid lightgray", minWidth: "10%", height: "2.5rem" }}>
                    <option>Danh mục sản phẩm</option>
                    <option>Thịt</option>
                    <option>Hải sản</option>
                  </select>
                </div>
                <div
                    className="rounded-md mt-3 flex items-end justify-end mr-3"
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

            <hr className="border border-gray-400" />
            {/* popup add more users */}
            <div className="mt-3 ml-2">
                <Button
                    type=""
                    className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                    onClick={showModal}
                >
                    + Thêm sản phẩm mới
                </Button>
                <Modal
                    open={open}
                    title="Thêm sản phẩm mới"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                >
                    <AddNewProduct />
                </Modal>
            </div>

            {/* table for product Management */}
            <div>
                <div className="flex justify-center">
                    <table
                        className={`${styles.productmanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                        style={{ width: "80%", minHeight: "60rem" }}
                    >
                        <thead>
                            <tr>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    {" "}
                                    STT
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    {" "}
                                    Tên sản phẩm
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Mã SKU
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Danh mục sản phẩm
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Giá tiền
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Số lượng trong kho
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Trạng thái trong kho
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Xem chi tiết
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 text-center">
                                    1
                                </td>
                                <td className="border border-slate-300 text-center">
                                    Thịt nạc hảo hạng
                                </td>
                                <td className="border border-slate-300 text-center">
                                    23022001
                                </td>
                                <td className="border border-slate-300 text-center">
                                    Thịt
                                </td>
                                <td className="border border-slate-300 text-center">
                                    230000đ
                                </td>
                                <td className="border border-slate-300 text-center">
                                    230
                                </td>
                                <td className="border border-slate-300 text-center ">
                                    <span className="p-2 bg-green-700 rounded-md text-white">
                                        Còn hàng
                                    </span>
                                </td>

                                <td className="border border-slate-300 text-center">
                                    <NavLink
                                        to={"/productdetailmanagement"}
                                        className="flex justify-center text-green-700 hover:text-green-700 "
                                    >
                                        <FaEye className='text-xl'/>
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 text-center">
                                    2
                                </td>
                                <td className="border border-slate-300 text-center">
                                    Thịt nạc hảo hạng
                                </td>
                                <td className="border border-slate-300 text-center">
                                    23022001
                                </td>
                                <td className="border border-slate-300 text-center">
                                    Thịt
                                </td>
                                <td className="border border-slate-300 text-center">
                                    230000đ
                                </td>
                                <td className="border border-slate-300 text-center">
                                    0
                                </td>
                                <td className="border border-slate-300 text-center ">
                                    <span className="p-2 bg-red-700 rounded-md text-white">
                                        Hết hàng
                                    </span>
                                </td>

                                <td className="border border-slate-300 text-center">
                                    <NavLink
                                        to={"/productdetailmanagement"}
                                        className="flex justify-center text-green-700 hover:text-green-700 "
                                    >
                                        <FaEye className='text-xl'/>
                                    </NavLink>
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
        </div>
    )
}
