import { Button, Modal, Pagination, Form, Input, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import HeaderManagement from "../../../components/HeaderManagement/HeaderManagement";
import styles from "./ImportSheet.module.css";
import { NavLink } from "react-router-dom";
import AddNewImportGoods from "./AddNewImportGoods";
import EditImportGoods from "./EditImportGoods";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from "react-redux";
import { createNewImportGoodsFormAction, getAllMerchantAction } from "../../../redux/action/inventory/InventoryAction";
import { USER } from "../../../redux/type/user/UserType";
import { getProductListByCategoryIdAction } from "../../../redux/action/product/ProductAction";
import { CLOSE_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM, DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, DELETE_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, SHOW_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM } from "../../../redux/type/inventory/InventoryType";

function ImportSheet(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;
  console.log("VALUES IMPORT SHEET", values);
  const dispatch = useDispatch();
  const textDeleteProducts = "Bạn có chắc chắn muốn xóa sản phẩm này khỏi phiếu nhập hàng ?";
  let user = JSON.parse(localStorage.getItem(USER));
  let totalBill = 0;
  let importProductList = JSON.parse(localStorage.getItem("importProductList"));
  console.log("BU LIN CHẾCH: ", importProductList === 'null');
  console.log("USER IMPORT SHEET: ", user);
  useEffect(() => {
    dispatch(getProductListByCategoryIdAction(0, 1000, 0));
    dispatch(getAllMerchantAction());
    window.scrollTo(0, 0);
  }, [])
  window.onpopstate = () => {
    localStorage.removeItem("importCode");
    localStorage.removeItem("noteInImportGoods");
    localStorage.removeItem("manufactureCompany");
    dispatch({
      type: DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM
    })
  }
  const merchantList = useSelector(state => state.InventoryReducer.merchantList);
  const productListByCategoryId = useSelector(state => state.ProductReducer.productListByCategoryId);
  console.log("MERCHANT LIST: ", merchantList);
  // const importProductList = useSelector(state => state.InventoryReducer.importProductList);
  console.log("importProductList IMPORT SHEET: ", importProductList);
  const textConfirmImportForm = "Bạn có chắc chắn muốn tạo phiếu nhập hàng ?";
  const textCancelImportForm = "Bạn có chắc chắn muốn hủy tạo phiếu nhập hàng";
  // const [openAdd, setOpenAdd] = useState(false);
  const openAddProductIntoImportGoodsForm = useSelector(state => state.InventoryReducer.openAddProductIntoImportGoodsForm);
  const [openEdit, setOpenEdit] = useState(false);
  const showModalAdd = () => {
    // setOpenAdd(true);
    dispatch({ type: SHOW_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM })
  };

  const handleCancelAdd = () => {
    // setOpenAdd(false);
    dispatch({ type: CLOSE_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM })
  };

  const showModalEdit = () => {
    setOpenEdit(true);
  };
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };
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
            <Form onSubmitCapture={handleSubmit}>
              <div className="mt-3 ml-3">
                <div className="flex">
                  <div className="text-2xl flex" style={{ width: "60%" }}>
                    <span className="font-semibold">Mã số phiếu nhập kho:</span>{" "}
                    <Input
                      type="text"
                      id="importCode"
                      name="importCode"
                      onChange={e => {
                        localStorage.setItem('importCode', e.target.value);
                        props.setFieldTouched('importCode')
                        handleChange(e)
                      }}
                      className=" text-gray-900 ml-2 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu nhập kho"
                      style={{ width: "200px", height: "35px" }}
                    />
                  </div>
                  {errors.importCode && touched.importCode ? <div className='text-red-600'>{errors.importCode}</div> : <div></div>}
                  <div className="flex justify-end mr-3" style={{ width: "90%" }}>
                    <Popconfirm placement="top"
                      onConfirm={handleSubmit}
                      title={textConfirmImportForm}
                      okText="Yes" cancelText="No">
                      <Button
                        className={`${styles.importsheet__border__confirm}  mr-2`}
                      >
                        Xác nhận tạo phiếu
                      </Button>
                    </Popconfirm>
                    {/* <Popconfirm placement="top"
                      onConfirm={() => { }}
                      title={textCancelImportForm}
                      okText="Yes" cancelText="No">
                      <Button
                        className={`${styles.importsheet__border__cancel}  mr-5`}
                      >
                        Hủy phiếu
                      </Button>
                    </Popconfirm> */}


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
                      onChange={e => {
                        localStorage.setItem('manufactureCompany', e.target.value);
                        props.setFieldTouched('manufactureCompany')
                        handleChange(e)
                      }}
                      className="border border-black text-base rounded-md"
                      id="manufactureCompany"
                      name="manufactureCompany"
                      style={{ width: "250px", height: "35px" }}
                    >
                      <option value="0" disabled>Chọn nhà cung cấp</option>
                      {merchantList.map((item, index) => {
                        if (item.id != 0) {
                          return <option key={index} value={item.id}>{item.name}</option>
                        }
                      })}
                    </select>
                  </div>
                </div>
                {errors.manufactureCompany && touched.manufactureCompany ? <div className='text-red-600'>{errors.manufactureCompany}</div> : <div></div>}
                {/* confirmation info */}
                <div className="mt-2 mb-2">
                  <span className="text-lg font-semibold">
                    Thông tin xác nhận
                  </span>
                  <div>
                    <span className="text-base">Người tạo đơn:</span>{" "}
                    <Input
                      type="text"
                      id="createdBy"
                      name="createdBy"
                      disabled
                      value={user?.fullname}
                      className="my-1 text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Điền người nhập đơn"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div>
                  {/* <div>
                    <span className="text-base">Ngày tạo đơn:</span>{" "}
                    <Input
                      type="date"
                      id="createdDate"
                      name="createdDate"
                      onChange={e => {
                        props.setFieldTouched('createdDate')
                        handleChange(e)
                      }}
                      className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu nhập kho"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div> */}
                </div>
                {/* note */}
                <div>
                  <span className="text-lg font-semibold">Ghi chú</span>
                  <div>
                    <textarea
                      id="note"
                      name="note"
                      className="p-2 text-base"
                      onChange={e => {
                        localStorage.setItem('noteInImportGoods', e.target.value);
                        props.setFieldTouched('note')
                        handleChange(e)
                      }}
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
                  <div className="mt-3 ">
                    <Button
                      type=""
                      className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                      onClick={showModalAdd}
                    >
                      + Thêm sản phẩm nhập kho
                    </Button>
                    <Modal
                      open={openAddProductIntoImportGoodsForm}
                      title="Thêm sản phẩm nhập kho"
                      onCancel={handleCancelAdd}
                      footer={[]}
                      width={900}
                    >
                      <AddNewImportGoods />
                    </Modal>
                  </div>
                  <div className="">
                    <table
                      className={`${styles.importsheet__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-2 `}
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
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Thao tác
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {importProductList?.length == 0 ?
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
                          </tr> : importProductList?.map((item, index) => {
                            totalBill += item.totalPrice;
                            return <tr>
                              <td className="border border-slate-300 text-center">
                                {index + 1}
                              </td>
                              <td className="border border-slate-300 text-center">
                                {productListByCategoryId.map((itemProduct, index) => {
                                  if (itemProduct.id == item.productId) {
                                    return itemProduct.title;
                                  }
                                })}
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.quantityImport}
                              </td>
                              <td className="border border-slate-300 text-center">
                                {(Number(item.price)).toLocaleString()}đ
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.totalPrice.toLocaleString()}đ
                              </td>
                              <td className="border border-slate-300 text-center">
                                {item.expiryDate}
                              </td>
                              <td className="border border-slate-300 text-center">
                                <Popconfirm placement="top"
                                  onConfirm={() => {
                                    dispatch({
                                      type: DELETE_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM,
                                      deletedImportedProductId: item.productId
                                    })
                                  }}
                                  title={textDeleteProducts}
                                  okText="Yes" cancelText="No">
                                  <DeleteOutlined style={{ marginLeft: "35%" }}
                                    className='d-flex justify-center w-9 items-center bg-red-800 text-xl text-white p-2 hover:bg-red-900 cursor-pointer' />
                                </Popconfirm>
                              </td>
                            </tr>
                          })}
                      </tbody>
                    </table>
                    {errors.importedProductInForm && touched.importedProductInForm ? <div className='text-red-600'>{errors.importedProductInForm}</div> : <div></div>}
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
                      onClick={() => {
                        localStorage.removeItem("importCode");
                        localStorage.removeItem("noteInImportGoods");
                        localStorage.removeItem("manufactureCompany");
                        // localStorage.removeItem("importProductList");
                        // localStorage.setItem("defaultActiveKeyValueInventory", 2);
                        dispatch({
                          type: DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM
                        })
                      }}
                      className="flex flex-row text-black no-underline text-lg"
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

const ImportSheetWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    importCode: localStorage.getItem("importCode"),
    manufactureCompany: localStorage.getItem("manufactureCompany"),
    createdDate: "",
    createdBy: JSON.parse(localStorage.getItem(USER))?.id,
    note: localStorage.getItem("noteInImportGoods"),
    importedProductInForm: props.importProductListProps
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    importCode: Yup.string()
      .required("Vui lòng không được để trống mã nhập kho !!!").trim().nullable(),
    manufactureCompany: Yup.string()
      .required("Vui lòng không được để trống thông tin nhà cung cấp !!!").nullable(),
    importedProductInForm: Yup.array().min(1, "Vui lòng không được để trống sản phẩm nhập kho !!!")
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    // console.log("CÓ VÀO HANDLE SUBMIT");
    // alert("CÓ VÀO ADD NEW PRODUCT HANDLE SUBMIT");
    // console.log("VALUE FORM ADD NEW PRODUCT FOR SELLER: ", values);
    let data = {
      "receivedNote": {
        "name": localStorage.getItem("importCode"),
        "merchant": values.manufactureCompany,
        "note": values.note,
        "receivedDetail": values.importedProductInForm
      }
    }
    console.log("DATA ADD NEW IMPORT GOODS FORM: ", data);
    props.dispatch(createNewImportGoodsFormAction(data));
  },

  displayName: 'ImportSheetWithFormik'
})(ImportSheet);

const mapStateToProps = (state) => {
  return {
    importProductListProps: JSON.parse(localStorage.getItem("importProductList"))
  }
}

export default connect(mapStateToProps, null)(ImportSheetWithFormik);