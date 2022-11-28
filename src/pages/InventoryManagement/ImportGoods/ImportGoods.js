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
  Space,
  DatePicker
} from "antd";
import { FaEye, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./ImportGoods.module.css";
import { history } from "../../../App";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { getAllImportGoodsOrderListAction, getAllImportGoodsOrderListByCreatorAction, getAllImportGoodsOrderListLengthAction, getAllImportGoodsOrderListLengthByCreatorAction, getAllSellersAction, searchImportGoodsFormForSellerByTimeRangeAction, searchImportGoodsFormForSellerByTimeRangeAndSellerAction, searchImportGoodsFormLengthForSellerByTimeRangeAction } from "../../../redux/action/inventory/InventoryAction";
import { GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION } from "../../../redux/type/inventory/InventoryType";
import { useStateCallback } from "use-state-callback";
const { RangePicker } = DatePicker;


export default function ImportGoods() {
  const handleNavigateToImportSheet = () => {
    localStorage.setItem("importProductList", JSON.stringify([]));
    history.push("/importsheet");
  };
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("startDate", "");
    localStorage.setItem("endDate", "");
    localStorage.setItem("sellerIdFilter", 0);
    dispatch(getAllImportGoodsOrderListAction(0, 10));
    dispatch(getAllImportGoodsOrderListLengthAction(0, 1000));
    dispatch(getAllSellersAction());
    window.scrollTo(0, 0);
  }, [])

  const importGoodsOrderList = useSelector(state => state.InventoryReducer.importGoodsOrderList);
  const sellerList = useSelector(state => state.InventoryReducer.sellerList);
  console.log("IMPORT GOODS ORDER LIST: ", importGoodsOrderList);
  console.log("sellerList: ", sellerList);
  const importedGoodsOrderListLength = useSelector(state => state.InventoryReducer.importedGoodsOrderListLength);
  console.log("importedGoodsOrderListLength: ", importedGoodsOrderListLength.length);
  const importedGoodsOrderListLengthByCreator = useSelector(state => state.InventoryReducer.importedGoodsOrderListLengthByCreator);
  console.log("importedGoodsOrderListLengthByCreator: ", importedGoodsOrderListLengthByCreator.length);
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
  let sellerIdFilter = localStorage.getItem("sellerIdFilter");
  console.log("sellerIdFilter: ", sellerIdFilter);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
    if (sellerIdFilter == 0) {
      if (localStorage.getItem("startDate") && localStorage.getItem("endDate")) {
        dispatch(searchImportGoodsFormForSellerByTimeRangeAction(localStorage.getItem("startDate"), localStorage.getItem("endDate"), (page - 1) * 10, 10));
        // dispatch(searchImportGoodsFormLengthForSellerByTimeRangeAction(dateStrings[0], dateStrings[1], 0, 1000));
      } else if (localStorage.getItem("startDate") == "" && localStorage.getItem("endDate") == "") {
        dispatch(getAllImportGoodsOrderListAction((page - 1) * 10, 10));
      }

    } else if (sellerIdFilter != 0) {
      if (localStorage.getItem("startDate") && localStorage.getItem("endDate")) {

      } else if (localStorage.getItem("startDate") == "" && localStorage.getItem("endDate") == "") {
        dispatch(getAllImportGoodsOrderListByCreatorAction(localStorage.getItem("sellerIdFilter"), (page - 1) * 10, 10));
      }

    }

  }

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
                dispatch(getAllImportGoodsOrderListAction(0, 10));
              } else if (e.target.value != 0) {
                dispatch(getAllImportGoodsOrderListByCreatorAction(e.target.value, 0, 10));
                dispatch(getAllImportGoodsOrderListLengthByCreatorAction(e.target.value, 0, 1000));
              }
            }}
            className="rounded-md"
            style={{
              border: "1px solid lightgray",
              minWidth: "10%",
              height: "2.5rem",
            }}
          >
            <option value="0">Tất cả phiếu nhập hàng</option>
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
                localStorage.setItem("startDate", dateStrings[0]);
                localStorage.setItem("endDate", dateStrings[1]);
                console.log("start date: ", dateStrings[0]);
                console.log("end date: ", dateStrings[1]);
                dispatch(searchImportGoodsFormForSellerByTimeRangeAction(dateStrings[0], dateStrings[1], 0, 10));
                dispatch(searchImportGoodsFormLengthForSellerByTimeRangeAction(dateStrings[0], dateStrings[1], 0, 1000));
              } else if (dateStrings[0] == "" && dateStrings[1] == "") {
                localStorage.setItem("startDate", dateStrings[0]);
                localStorage.setItem("endDate", dateStrings[1]);
                dispatch(getAllImportGoodsOrderListAction(0, 10));
              }
            } else if (sellerIdFilter != 0) {
              if (dateStrings[0] && dateStrings[1]) {
                console.log("start date: ", dateStrings[0]);
                console.log("end date: ", dateStrings[1]);
                dispatch(searchImportGoodsFormForSellerByTimeRangeAndSellerAction(sellerIdFilter, dateStrings[0], dateStrings[1], 0, 10));
              } else if (dateStrings[0] == "" && dateStrings[1] == "") {
                dispatch(getAllImportGoodsOrderListByCreatorAction(sellerIdFilter, 0, 10));
              }
            }

          }} />
        </div>
        {/* <div */}
        {/* className="rounded-md flex items-center justify-end mr-3" */}
        {/* style={{ width: "100%" }} */}
        {/* > */}
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
                  placeholder="Tìm kiếm phiếu nhập kho"
                  style={{ width: '300px' }}
                />
                <InputGroup.Text className="text-white">
                  <SearchOutlined className="cursor-pointer" />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </div> */}
        {/* </div> */}
      </div>

      <hr className="border border-gray-400" />
      {/* popup add more users */}
      <div className="mt-3 ml-2">
        <Button
          type=""
          className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
          onClick={handleNavigateToImportSheet}
        >
          + Tạo phiếu nhập kho
        </Button>
      </div>

      {/* table for product Management */}
      <div>
        <div className="flex justify-center">
          <table
            className={`${styles.importgoods__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
            style={{ width: "80%", minHeight: importGoodsOrderList?.length < 7 ? "325px" : "800px" }}
          >
            <thead>
              <tr>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Id
                </th>

                <th className="border border-slate-300 p-4 text-base text-center">
                  Mã nhập kho
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày tạo
                </th>
                {/* <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày nhập
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
              {importGoodsOrderList?.map((item, index) => {
                let totalBill = 0;
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
                      Đã nhập
                    </span>
                  </td> */}
                    <td className="border border-slate-300 text-center">
                      {item.receivedDetail.map((productPrice, index) => {
                        totalBill += productPrice.totalPrice;
                      })}
                      {totalBill.toLocaleString()}đ
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={`/importgoodsdetail/${item.id}`}
                        className="flex justify-center hover:text-green-700 text-green-700"
                        onClick={() => {
                          localStorage.setItem("importGoodsDetailInfo", JSON.stringify(item))
                          dispatch({
                            type: GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION,
                            detailedImportGoodsFormInfoAction: item
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
        <div className="flex justify-center mb-4">
          <Pagination
            className="hover:text-green-800 focus:border-green-800"
            current={currentCustom}
            defaultCurrent={1}
            pageSize={10}
            // pageSizeOptions={3}
            onChange={(page) => { handlePaginationChange(page) }}
            // showSizeChanger
            // onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
            total={sellerIdFilter == 0 ? importedGoodsOrderListLength.length : importedGoodsOrderListLengthByCreator.length}
          />
        </div>
      </div>
    </div>
  );
}
