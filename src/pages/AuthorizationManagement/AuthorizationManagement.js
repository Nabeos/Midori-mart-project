import React, { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./AuthorizationManagement.module.css";
import { Button, Form, Modal, Pagination } from "antd";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthorizationManagement() {
  // avatar hover
  const content = (
    <div>
      <p>Homepage</p>
      <p>Log out</p>
    </div>
  );

  // popup
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const showPageModal = () => {
    setIsPageModalOpen(true);
  };
  const showRoleModal = () => {
    setIsRoleModalOpen(true);
  };
  const handleOk = () => {
    setIsPageModalOpen(false);
    setIsRoleModalOpen(false);
  };
  const handleCancel = () => {
    setIsPageModalOpen(false);
    setIsRoleModalOpen(false);
  };

  return (
    <div className="bg-gray-200 grid grid-cols-6" style={{ height: "100%" }}>
      <div className="col-span-1" >
        <SidebarAdmin />
      </div>
      <div className="col-span-5" style={{ height: "100%" }}>
        <div className="flex items-center flex-col">
          {/* header */}
          <div
            className="bg-white rounded-md flex mt-3"
            style={{
              width: "99%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
           <HeaderManagement/>
          </div>
          <div
            className="bg-white rounded-md mt-3"
            style={{
              width: "99%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* popup add more pages */}
            <div className="mt-3 ml-2">
              <Button
                type=""
                className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                onClick={showPageModal}
              >
                + Thêm trang
              </Button>
              <Modal
                title="Basic Modal"
                open={isPageModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form>
                  <p>Some contents pages...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Form>
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
                open={isRoleModalOpen}
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
            {/* table for Authorization Management */}
            <div className="flex justify-center">
              <table className={`${styles.authorizationmanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `} style={{width:"80%", minHeight:"80rem"}}>
                <thead>
                  <tr>
                    <th className="border border-slate-300"></th>
                    <th className="border border-slate-300 p-4 text-lg text-center">Khách hàng</th>
                    <th className="border border-slate-300 p-4 text-center">Admin</th>
                    <th className="border border-slate-300 p-4 text-center">Quản lí khách hàng</th>
                    <th className="border border-slate-300 p-4 text-center">Shipper</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                  </tr>
                  <tr>
                  <td className="border border-slate-300 font-semibold">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
                    <td className="border border-slate-300 text-center"><input type={"checkbox"}/></td>
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
      </div>
    </div>
  );
}
