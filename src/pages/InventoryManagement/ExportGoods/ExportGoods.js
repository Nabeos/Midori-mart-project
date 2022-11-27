import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Tabs,
  Checkbox,
  DatePicker
} from "antd";
import { FaEye, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./ExportGoods.module.css";
import AddNewProduct from "../AddNewProduct";
import { history } from "../../../App";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { getAllExportGoodsOrderListAction, getAllExportGoodsOrderListByCreatorAction, getAllSellersAction, searchExportGoodsFormForSellerByTimeRangeAction, searchExportGoodsFormForSellerByTimeRangeAndSellerAction } from "../../../redux/action/inventory/InventoryAction";
import { GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION } from "../../../redux/type/inventory/InventoryType";
const { RangePicker } = DatePicker;

export default function ExportGoods() {
  const handleNavigateToExportSheet = () => {
    history.push("/exportsheet");
  };
  useEffect(() => {
    dispatch(getAllExportGoodsOrderListAction());
    dispatch(getAllSellersAction());
    window.scrollTo(0, 0);
  }, [])

  const dispatch = useDispatch();
  const exportGoodsOrderList = useSelector(state => state.InventoryReducer.exportGoodsOrderList);
  let sellerIdFilter = localStorage.getItem("sellerIdFilter");
  console.log("exportGoodsOrderList: ", exportGoodsOrderList);
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
  const sellerList = useSelector(state => state.InventoryReducer.sellerList);
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
        <div className="flex items-center ml-3" style={{ width: "50%" }}>
          <span className="mr-2">Lọc theo người bán: </span>
          <select
            defaultValue={0}
            onChange={(e) => {
              console.log("SELLER ID: ", e.target.value);
              localStorage.setItem("sellerIdFilter", e.target.value);
              if (e.target.value == 0) {
                dispatch(getAllExportGoodsOrderListAction());
              } else if (e.target.value != 0) {
                dispatch(getAllExportGoodsOrderListByCreatorAction(e.target.value));
              }
            }}
            className="rounded-md"
            style={{
              border: "1px solid lightgray",
              minWidth: "10%",
              height: "2.5rem",
            }}
          >
            <option value="0">Tất cả phiếu xuất kho</option>
            {sellerList.map((item, index) => {
              return <option key={index} value={item.id}>
                {item.fullname}
              </option>
            })}
          </select>
        </div>
        <div className="flex items-center justify-end mr-5" style={{ width: "100%" }}>
          <span className="whitespace-nowrap mr-2">Chọn khoảng thời gian: </span>
          <RangePicker style={{ width: 300, height: "38px" }} onCalendarChange={(dates, dateStrings, info) => {
            if (sellerIdFilter == 0) {
              if (dateStrings[0] && dateStrings[1]) {
                console.log("start date: ", dateStrings[0]);
                console.log("end date: ", dateStrings[1]);
                dispatch(searchExportGoodsFormForSellerByTimeRangeAction(dateStrings[0], dateStrings[1]));
              } else if (dateStrings[0] == "" && dateStrings[1] == "") {
                dispatch(getAllExportGoodsOrderListAction());
              }
            } else if (sellerIdFilter != 0) {
              if (dateStrings[0] && dateStrings[1]) {
                console.log("start date: ", dateStrings[0]);
                console.log("end date: ", dateStrings[1]);
                dispatch(searchExportGoodsFormForSellerByTimeRangeAndSellerAction(sellerIdFilter, dateStrings[0], dateStrings[1]));
              } else if (dateStrings[0] == "" && dateStrings[1] == "") {
                dispatch(getAllExportGoodsOrderListByCreatorAction(sellerIdFilter));
              }
            }

          }} />
        </div>
        {/* <div
          className="rounded-md mt-3 flex items-end justify-end mr-3"
          style={{ width: "100%" }}
        > */}
        {/* <Form>
            <Input
              placeholder="Tìm kiếm"
              className="shadow-none hover:border-green-700 focus:border-green-700"
              style={{ width: "100%", height: "2.5rem" }}
            />
          </Form> */}

        {/* </div> */}
      </div>

      <hr className="border border-gray-400" />
      {/* popup add more users */}
      {/* <div className="mt-3 ml-2">
        <Button
          type=""
          className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
          onClick={handleNavigateToExportSheet}
        >
          + Tạo phiếu xuất kho
        </Button>
      </div> */}

      {/* table for product Management */}
      <div>
        <div className="flex justify-center">
          <table
            className={`${styles.exportgoods__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
            style={{ width: "80%", minHeight: exportGoodsOrderList?.length < 7 ? "325px" : "800px" }}
          >
            <thead>
              <tr>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Id
                </th>

                <th className="border border-slate-300 p-4 text-base text-center">
                  Mã xuất kho
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày tạo
                </th>
                {/* <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày xuất
                </th> */}
                <th className="border border-slate-300 p-4 text-base text-center">
                  Người tạo đơn
                </th>
                {/* <th className="border border-slate-300 p-4 text-base text-center">
                  Trạng thái
                </th> */}
                <th className="border border-slate-300 p-4 text-base text-center">
                  Giá trị đơn hàng
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Xem chi tiết
                </th>
              </tr>
            </thead>
            <tbody>
              {exportGoodsOrderList?.map((item, index) => {
                if (item.status == 1) {
                  return <tr>
                    <td className="border border-slate-300 text-center">
                      {item.id}
                    </td>
                    <td className="border border-slate-300 text-center">
                      {item.name}
                    </td>
                    <td className="border border-slate-300 text-center">
                      {item.createdAt}
                    </td>
                    {/* <td className="border border-slate-300 text-center">
                    23/02/2001 8:45
                  </td> */}
                    <td className="border border-slate-300 text-center">
                      {item.createdBy}
                    </td>
                    {/* <td className="border border-slate-300 text-center ">
                    <span className="p-2 bg-green-700 rounded-md text-white">
                      Đã xuất
                    </span>
                  </td> */}
                    <td className="border border-slate-300 text-center">
                      {item?.order?.totalBill?.toLocaleString()}đ
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={`/exportgoodsdetail/${item.id}`}
                        className="flex justify-center hover:text-green-700 text-green-700"
                        onClick={() => {
                          localStorage.setItem("exportGoodsDetailInfo", JSON.stringify(item))
                          dispatch({
                            type: GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION,
                            detailedExportGoodsFormInfoAction: item
                          })
                        }}
                      >
                        <FaEye className="text-xl" />
                      </NavLink>
                    </td>
                  </tr>
                }
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
      </div>
    </div>
  );
}
