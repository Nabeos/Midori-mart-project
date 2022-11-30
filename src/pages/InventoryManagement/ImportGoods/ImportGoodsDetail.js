import { Button, Modal, Pagination, Form, Input, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import HeaderManagement from "../../../components/HeaderManagement/HeaderManagement";
import styles from "./ImportGoodsDetail.module.css";
import { NavLink } from "react-router-dom";
import AddNewImportGoods from "./AddNewImportGoods";
import EditImportGoods from "./EditImportGoods";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteImportGoodsOrderAction, getAllMerchantAction } from "../../../redux/action/inventory/InventoryAction";
import { USER } from "../../../redux/type/user/UserType";
import { NAVIGATE_TO_IMPORT_PAGE } from "../../../redux/type/inventory/InventoryType";

function ImportGoodsDetail(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;
  let totalBill = 0;
  console.log("PROPS.MATCH.PARAMS.formId: ", props.match.params.formId);
  const textDeleteImportGoodsForm = "Bạn có chắc chắn muốn xóa phiếu nhập kho này ?"
  const importGoodsOrderDetailedInformation = JSON.parse(localStorage.getItem("importGoodsDetailInfo"));
  console.log("importGoodsOrderDetailedInformation: ", importGoodsOrderDetailedInformation);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  let user = JSON.parse(localStorage.getItem(USER));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMerchantAction());
    window.scrollTo(0, 0);
  }, [])

  const merchantList = useSelector(state => state.InventoryReducer.merchantList);
  const showModalAdd = () => {
    setOpenAdd(true);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  const showModalEdit = () => {
    setOpenEdit(true);
  };
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };
  // const importGoodsOrderDetailedInformation = useSelector(state => state.InventoryReducer.importGoodsOrderDetailedInformation);
  let { name, createdAt, createdBy, merchant, note, receivedDetail } = importGoodsOrderDetailedInformation;
  console.log("importGoodsOrderDetailedInformation: ", importGoodsOrderDetailedInformation);
  const importProductList = useSelector(state => state.InventoryReducer.importProductList);
  console.log("importProductList: ", importProductList);
  return (
    <div className="bg-gray-200 " style={{ height: "100%" }}>
      <div className="" style={{ height: "100%" }}>
        <div
          className="flex items-center flex-col"
          style={{ minHeight: "60.5rem" }}
        >
          {/* header */}
          <div
            className="bg-white rounded-md flex mt-3 justify-end"
            style={{
              width: "90%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <HeaderManagement />
          </div>
          <div
            className="bg-white rounded-md mt-3"
            style={{
              width: "90%",
              height: "500%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <Form>
              <div className="mt-3 ml-3">
                <div className="flex">
                  <div className="text-2xl flex" style={{ width: "80%" }}>
                    <span className="font-semibold">Mã số phiếu nhập kho:</span>{" "}
                    <Input
                      type="text"
                      id="importCode"
                      name="importCode"
                      onChange={e => {
                        props.setFieldTouched('importCode')
                        handleChange(e)
                      }}
                      value={name}
                      className=" text-gray-900 ml-2 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu nhập kho"
                      style={{ width: "200px", height: "35px" }}
                    />
                  </div>
                  {errors.importCode && touched.importCode ? <div className='text-red-600'>{errors.importCode}</div> : <div></div>}
                  <div className="flex justify-end" style={{ width: "90%" }}>
                    {/* <Button
                      className={`${styles.importgoodsdetail__border__confirm}  mr-2`}
                    >
                      Cập nhật phiếu
                    </Button> */}

                    <Popconfirm placement="top"
                      onConfirm={() => { dispatch(deleteImportGoodsOrderAction(props.match.params.formId)) }}
                      title={textDeleteImportGoodsForm}
                      okText="Yes" cancelText="No">
                      <Button
                        className={`${styles.importgoodsdetail__border__cancel}  mr-5`}
                      >
                        Hủy phiếu
                      </Button>
                    </Popconfirm>

                  </div>
                </div>
                {/* warehouse info */}
                <div className="mt-3">
                  <span className="text-lg font-semibold">
                    Thông tin nhà cung cấp
                  </span>
                  <div>
                    <select
                      defaultValue={0}
                      value={merchant?.id}
                      onChange={e => {
                        // props.setFieldTouched('manufactureCompany')
                        // handleChange(e)
                      }}
                      className="border border-black text-base rounded-md"
                      id="manufactureCompany"
                      name="manufactureCompany"
                      style={{ width: "250px", height: "35px" }}
                    >
                      <option value="0" disabled>Chọn nhà cung cấp</option>
                      {merchantList.map((item, index) => {
                        if (item.id != 0) {
                          return <option value={item.id}>{item.name}</option>
                        }
                      })}
                    </select>
                  </div>


                </div>
                {/* confirmation info */}
                <div className="mt-2 mb-2">
                  <span className="text-lg font-semibold">
                    Thông tin xác nhận
                  </span>
                  <div>
                    <span className="text-base">Người tạo đơn:</span>{" "}
                    <Input
                      type="text"
                      id="product_name"
                      value={createdBy}
                      className="my-1 text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Điền người nhập đơn"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div>
                  <div>
                    <span className="text-base">Ngày tạo đơn:</span>{" "}
                    <Input
                      type="text"
                      id="product_name"
                      value={createdAt}
                      className="my-1 text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Điền người nhập đơn"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div>
                </div>
                {/* note */}
                <div>
                  <span className="text-lg font-semibold">Ghi chú</span>
                  <div>
                    <textarea
                      className="p-2 text-base"
                      value={note}
                      style={{
                        border: "1px solid lightgray",
                        borderRadius: "3px",
                        minWidth: "50rem",
                        minHeight: "10rem",
                      }}
                    ></textarea>
                  </div>
                </div>
                {/* goods table */}
                <div>
                  {/* <div className="mt-3 ">
                    <Button
                      type=""
                      className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                      onClick={showModalAdd}
                    >
                      + Thêm sản phẩm nhập kho
                    </Button>
                    <Modal
                      open={openAdd}
                      title="Thêm sản phẩm nhập kho"
                      onCancel={handleCancelAdd}
                      footer={[]}
                      width={900}
                    >
                      <AddNewImportGoods />
                    </Modal>
                  </div> */}
                  <div className="">
                    <table
                      className={`${styles.importgoodsdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                      style={{ width: "95%", minHeight: "10rem" }}
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
                          {/* <th className="border border-slate-300 p-4 text-base text-center">
                            Mã SKU
                          </th> */}
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Số lượng nhập kho
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Giá tiền
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Thành tiền
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Hạn sử dụng
                          </th>
                          {/* <th className="border border-slate-300 p-4 text-base text-center">
                            Xem chi tiết
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {receivedDetail?.length == 0 ?
                          <tr style={{ minHeight: "300px" }}>
                            <td colSpan={8}>
                              <div className="text-center" style={{
                                width: "80%",
                                marginLeft: "130px"
                                // margin: "30px auto 0 auto",
                              }}>
                                <div className='flex justify-center items-center mb-3'  >
                                  <img src={require('../../../assets/images/cart.png')} style={{ width: '200px' }} />
                                </div>

                                <p className='mb-4 text-lg'>Hiện tại chưa sản phẩm nào trong phiếu nhập hàng</p>

                              </div>
                            </td>
                          </tr>
                          :
                          receivedDetail?.map((item, index) => {
                            totalBill += item.totalPrice;
                            return <tr>
                              <td className="border border-slate-300 text-center">
                                {index + 1}
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.title}
                              </td>
                              {/* <td className="border border-slate-300 text-center">
                                23022001
                              </td> */}

                              <td className="border border-slate-300 text-center">
                                {item.quantityImport}
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.price.toLocaleString()}đ
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.totalPrice.toLocaleString()}đ
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.expiryDate}
                              </td>
                              {/* <td className="border border-slate-300 text-center">
                                <Button
                                  type=""
                                  className="border-none text-green-700 hover:text-green-700 focus:text-green-700 rounded-md no-shadow font-bold text-base"
                                  onClick={showModalEdit}
                                >
                                  <FaEye className="text-xl" />
                                </Button>
                                <Modal
                                  open={openEdit}
                                  title="Chỉnh sửa sản phẩm nhập kho"
                                  onCancel={handleCancelEdit}
                                  footer={[]}
                                  width={900}
                                >
                                  <EditImportGoods />
                                </Modal>
                              </td> */}
                            </tr>

                          })
                        }

                      </tbody>
                    </table>
                  </div>
                  {/* <div
                    className="flex justify-end mb-4"
                    style={{ width: "95%" }}
                  >
                    <Pagination
                      className="hover:text-green-800 focus:border-green-800"
                      defaultCurrent={1}
                      total={50}
                    />
                  </div> */}
                  <div
                    className="flex justify-end mb-4"
                    style={{ width: "95%" }}
                  >
                    <div className="text-lg">
                      <span className="font-semibold">
                        Tổng giá trị đơn hàng:{" "}
                      </span>{" "}
                      {totalBill.toLocaleString()}đ
                    </div>
                  </div>
                  <div
                    className="flex justify-end flex-row mb-2"
                    style={{ width: "95%" }}
                  >
                    <NavLink
                      to={"/inventorymanagement"}
                      className="flex flex-row text-black no-underline text-lg"
                      onClick={() => {
                        // dispatch({
                        //   type: NAVIGATE_TO_IMPORT_PAGE
                        // })
                        localStorage.setItem("defaultActiveKeyValueInventory", 2);
                      }}
                    >
                      <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                      <span className="hover:text-green-800">Quay lại</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div >
    </div >
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const regexAllNumber = /^[0-9.,]+$/;
const regexSelect = /^[1-9]$/;

const ImportGoodsDetailWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    importCode: "",
    manufactureCompany: 0,
    createdDate: "",
    createdBy: JSON.parse(localStorage.getItem(USER))?.id,
    note: "",
    importedProductInForm: props.importProductListProps
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    importedCode: Yup.string()
      .required("Vui lòng không được để trống mã nhập kho !!!"),
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    // console.log("CÓ VÀO HANDLE SUBMIT");
    alert("CÓ VÀO ADD NEW PRODUCT HANDLE SUBMIT");
    // console.log("VALUE FORM ADD NEW PRODUCT FOR SELLER: ", values);
    let data = {
      "receivedNote": {
        "name": values.importCode,
        // "createdAt": values.createdDate,
        // "createdBy": values.createdBy,
        "merchant": values.manufactureCompany,
        "note": values.note,
        "receivedDetail": values.importedProductInForm
      }
    }


    console.log("DATA ADD NEW IMPORT GOODS FORM: ", data);
    // props.dispatch();
  },

  displayName: 'ImportGoodsDetailWithFormik'
})(ImportGoodsDetail);

const mapStateToProps = (state) => {
  return {
    importProductListProps: JSON.parse(localStorage.getItem("importProductList"))
  }
}

export default connect(mapStateToProps, null)(ImportGoodsDetailWithFormik);
