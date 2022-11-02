import React, {useState} from "react";
import { Button, Form, Modal, Pagination, Input, Tabs } from "antd";
import { FaEye } from "react-icons/fa";
import styles from "./RevenueByProduct.module.css";
import RevenueByProductDetail from "./RevenueByProductDetail";
export default function RevenueByProduct() {
    const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="flex flex-row" style={{ width: "100%" }}>
        <div className="ml-5 text-lg font-semibold" style={{ width: "100%" }}>
          Thống kê theo sản phẩm
        </div>
        <div className="flex justify-end mr-5 " style={{ width: "100%" }}>
          <select
            style={{ height:"2.2rem", border: "1px solid lightgray", borderRadius: "5px" }}
          >
            <option>Thịt</option>
            <option>Thủy, hải sản</option>
            <option>Rau</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <table
          className={`${styles.revenuebyproduct__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
          style={{ width: "81%", minHeight: "10rem" }}
        >
          <thead>
            <tr>
              <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                STT
              </th>
              <th className="border border-slate-300 p-4 text-lg text-center">
                {" "}
                Tên sản phẩm
              </th>
              <th className="border border-slate-300 p-4 text-center">
                Mã sản phẩm
              </th>
              <th className="border border-slate-300 p-4 text-center">
                Danh mục sản phẩm
              </th>
              <th className="border border-slate-300 p-4 text-center">
                Số lượng đã bán
              </th>
              <th className="border border-slate-300 p-4 text-center">
                Số tiền đã bán
              </th>
              <th className="border border-slate-300 p-4 text-center">
                Xem chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 text-center">1</td>
              <td className="border border-slate-300 text-center">
                Thịt nạc hảo hạng
              </td>
              <td className="border border-slate-300 text-center">23022001</td>
              <td className="border border-slate-300 text-center">Thịt</td>
              <td className="border border-slate-300 text-center">23</td>
              <td className="border border-slate-300 text-center">
                23.000.000đ
              </td>
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
                  title="Chi tiết doanh số sản phẩm"
                  onCancel={handleCancel}
                  footer={[]}
                  width={900}
                >
                  <RevenueByProductDetail />
                </Modal>
              </td>
            </tr>
            <tr>
              <td className="border border-slate-300 text-center">2</td>
              <td className="border border-slate-300 text-center">
                Rau siêu sạch
              </td>
              <td className="border border-slate-300 text-center">23022001</td>
              <td className="border border-slate-300 text-center">Rau</td>
              <td className="border border-slate-300 text-center">23</td>
              <td className="border border-slate-300 text-center">
                23.000.000đ
              </td>
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
                  title="Chi tiết doanh số sản phẩm"
                  onCancel={handleCancel}
                  footer={[]}
                  width={900}
                >
                  <RevenueByProductDetail />
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
