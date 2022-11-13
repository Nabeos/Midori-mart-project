import React, { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./AuthorizationManagement.module.css";
import { DeleteOutlined, PlusOutlined, MinusOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Pagination, Popconfirm } from "antd";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAuthenticationPage from "./AddAuthenticationPage";
import EditRole from "./EditRole";
import AddRole from "./AddRole";

export default function AllRoleInMidori() {
    // popup
    // const [isPageModalOpen, setIsPageModalOpen] = useState(false);
    // const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const text = 'Bạn có chắc chắn muốn xóa vai trò này ?';
    const textEdit = 'Bạn có chắc chắn muốn chỉnh sửa vai trò này ?';
    const showPageModal = () => {
        // setIsPageModalOpen(true);
    };
    const showRoleModal = () => {
        // setIsRoleModalOpen(true);
    };
    const handleOk = () => {
        // setIsPageModalOpen(false);
        // setIsRoleModalOpen(false);
    };
    const handleCancel = () => {
        // setIsPageModalOpen(false);
        // setIsRoleModalOpen(false);
    };



    const handleDeleteRole = () => {
        // setIsPageModalOpen(true);
    }

    const handleEditRole = () => {
        // setIsPageModalOpen(true);
    }

    return (

        <div className="">
            {/* <div className="flex items-center flex-col"> */}
            <div className="mt-3 ml-2">
                <Button
                    type=""
                    className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base mr-2"
                    onClick={showPageModal}
                >
                    + Thêm trang
                </Button>
                <Modal
                    title="Thêm trang mới"
                    // open={isPageModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[]}
                    width={500}
                >
                    <AddAuthenticationPage />
                </Modal>
                {/* popup add more roles */}
                <Button
                    type=""
                    className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                    onClick={showRoleModal}
                >
                    + Thêm vai trò
                </Button>
                <Modal
                    title="Basic Modal"
                    // open={isRoleModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form>
                        <p>Some contents roles...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Form>
                </Modal>
            </div>

            {/* popup add more pages */}

            {/* table for Authorization Management */}
            <div className="flex justify-center">
                <table
                    className={`${styles.authorizationmanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                    style={{ width: "80%", minHeight: '450px' }}
                >
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-4 text-base text-center">STT</th>
                            <th className="border border-slate-300 p-4 text-base text-center">Vai trò</th>
                            <th className="border border-slate-300 p-4 text-base text-center" style={{ width: '180px' }}>
                                Thao tác
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ minHeight: '300px' }}>
                        <tr style={{ height: '50px' }}>
                            <td className="border border-slate-300 text-center">1</td>
                            <td className="border text-sm border-slate-300 font-semibold" style={{ paddingLeft: '10px' }}>
                                Quản trị viên
                            </td>
                            <td className="border border-slate-300 text-center" style={{ paddingLeft: '40px' }}>
                                <div className="flex gap-3">
                                    <Popconfirm placement="top"
                                        onConfirm={() => { handleEditRole() }}
                                        title={textEdit}
                                        okText="Yes" cancelText="No">
                                        <EditOutlined
                                            className='d-flex w-9 items-center bg-yellow-600 text-xl text-white p-2 hover:bg-yellow-700 cursor-pointer' />
                                    </Popconfirm>
                                    <Modal
                                        title="Chỉnh sửa vai trò"
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={[]}
                                        width={500}
                                    >
                                        <EditRole />
                                    </Modal>
                                    <Popconfirm placement="top"
                                        onConfirm={() => { handleDeleteRole() }}
                                        title={text}
                                        okText="Yes" cancelText="No">
                                        <DeleteOutlined
                                            className='d-flex w-9 items-center bg-red-800 text-xl text-white p-2 hover:bg-red-900 cursor-pointer' />
                                    </Popconfirm>
                                    <Modal
                                        title="Thêm trang mới"
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={[]}
                                        width={500}
                                    >
                                        <AddRole />
                                    </Modal>
                                </div>

                            </td>

                        </tr>
                        <tr style={{ height: '50px' }}>
                            <td className="border border-slate-300 text-center">2</td>
                            <td className="border border-slate-300 font-semibold" style={{ paddingLeft: '10px' }}>
                                Khách hàng có tài khoản
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>

                        </tr>

                        <tr style={{ height: '50px' }}>
                            <td className="border border-slate-300 text-center">3</td>
                            <td className="border border-slate-300 font-semibold" style={{ paddingLeft: '10px' }}>
                                Khách hàng không có tài khoản
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>

                        </tr>

                        <tr style={{ height: '50px' }}>
                            <td className="border border-slate-300 text-center">4</td>
                            <td className="border border-slate-300 font-semibold" style={{ paddingLeft: '10px' }}>
                                Quản lý cửa hàng
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
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
        </div >
        // </div >
        // </div >
    );
}
