import React, { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./AuthorizationManagement.module.css";
import { Button, Form, Modal, Pagination, Tabs } from "antd";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAuthenticationPage from "./AddAuthenticationPage";

export default function ProvideAccessToRole() {
    // popup
    // const [isPageModalOpen, setIsPageModalOpen] = useState(false);
    // const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
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

    const handleSelectTabPane = (key) => {
        console.log("KEY TỔNG: ", key);
        if (key == 1) {
        } else if (key == 2) {
        } else if (key == 3) {
        }
        //   dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
        // }
    }

    return (

        <div className="">
            {/* <div className="flex items-center flex-col"> */}


            {/* popup add more pages */}

            {/* table for Authorization Management */}
            <div className="flex justify-center">
                <table
                    className={`${styles.authorizationmanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                    style={{ width: "80%", minHeight: "80rem" }}
                >
                    <thead>
                        <tr>
                            <th className="border border-slate-300 p-4 text-base text-center">STT</th>
                            <th className="border border-slate-300 p-4 text-base text-center">Tên trang</th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                                Khách hàng
                            </th>
                            <th className="border border-slate-300 text-base p-4 text-center">
                                Admin
                            </th>
                            <th className="border border-slate-300 text-base p-4 text-center">
                                Quản lí khách hàng
                            </th>
                            <th className="border border-slate-300 text-base p-4 text-center">
                                Shipper
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-300 text-center">1</td>
                            <td className="border text-sm border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">2</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">3</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">4</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">5</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">6</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">7</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-slate-300 text-center">8</td>
                            <td className="border border-slate-300 font-semibold" style={{ padding: '0.7rem' }}>
                                The Sliding Mr. Bones (Next Stop, Pottersville)
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
                            </td>
                            <td className="border border-slate-300 text-center">
                                <input type={"checkbox"} />
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
        </div>
        // </div >
        // </div >
    );
}
