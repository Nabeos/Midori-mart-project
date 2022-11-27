import React, { Component, useEffect } from "react";
import styles from "./ProductDetailManagement.module.css";
import { Button, Form, Input, Upload, message, Popconfirm } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { connect, useDispatch, useSelector } from "react-redux";
import { USER } from "../../redux/type/user/UserType";
import { getProductDetailAction } from "../../redux/action/product/ProductAction";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { uploadImageAction } from "../../redux/action/user/UserAction";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";
import { deleteProductForSellerAction, getAllOriginAction, getAllProductUnitAction, updateProductDetailedInformationForSellerAction, uploadProductImageForSellerAction } from "../../redux/action/inventory/InventoryAction";

function ProductDetailManagement(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;

  console.log("VALUES.THUMBNAILS", values.thumbnails);
  console.log("PROPS.match.params: ", props.match.params.sku);
  const dispatch = useDispatch();
  const textUpdate = 'Bạn có chắc chắn muốn cập nhật thông tin chi tiết sản phẩm này ?';
  const textDelete = 'Bạn có chắc chắn muốn xóa sản phẩm này khỏi hệ thống ?';
  useEffect(() => {
    dispatch(getProductDetailAction(props.match.params.sku));
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductUnitAction());
    dispatch(getAllOriginAction());
    window.scrollTo(0, 0);
  }, [])
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const productUnitList = useSelector(state => state.InventoryReducer.productUnitList);
  const originList = useSelector(state => state.InventoryReducer.originList);
  let productDetail = useSelector(state => state.ProductReducer.productDetail);
  console.log("PRODUCT DETAIL: ", productDetail);
  let user = JSON.parse(localStorage.getItem(USER));
  // const user = useSelector(state => state.UserReducer.user);
  console.log("ROLE ID IN PRODUCT DETAIL MANAGEMENT FOR SELLER: ", user?.roleId);
  const uploadImage = async (e) => {
    console.log("FILES: ", e.target.files);
    const files = e.target.files;
    console.log("FILE[0]: ", files[0]);
    const data = new FormData();
    data.append("files", files[0]);
    console.log("DATA FIRST: ", data);
    dispatch(uploadProductImageForSellerAction(productDetail.slug, data));
  }
  // const propsAbc = {
  //   name: "file",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text",
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };
  return (
    user?.roleId == 4 ?
      <div
        className="bg-gray-200 flex flex-col justify-center items-center"
        style={{ width: "100%" }}
      >
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
          className="bg-white rounded-md mt-3 mb-5"
          style={{ width: "90%", boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)" }}
        >
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <Form style={{ width: "90%" }} onSubmitCapture={handleSubmit}>
              <div className="text-2xl font-bold mt-3 mb-3">
                Thông tin sản phẩm
              </div>
              <div>
                <div className="text-lg font-semibold">Ảnh sản phẩm</div>
                <div className="text-2xl font-bold mb-3 flex flex-row">
                  {values.thumbnails ?
                    <img
                      src={values.thumbnails}
                      className="mr-3"
                      style={{ width: "23%" }}
                    />

                    : <img
                      src="/images/user/emty_product.png"
                      className="mr-3"
                      style={{ width: "200px" }}
                    />}

                  <div className="flex whitespace-nowrap items-end">
                    <label htmlFor="filePicker" className="bg-green-700 text-white p-2 cursor-pointer" style={{ fontSize: '15px' }}>
                      Upload ảnh
                    </label>
                    <input type="file" id="filePicker" style={{ visibility: "hidden" }} name="file" placeholder='Upload an image'
                      onChange={uploadImage} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="title"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Tên sản phẩm</span>
                  </label>
                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      onChange={e => {
                        props.setFieldTouched('title')
                        handleChange(e)
                      }}
                      value={values.title}
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Tên sản phẩm"
                      style={{ width: "90%", height: "45px" }}
                    />
                  </Form.Item>
                  {errors.title && touched.title ? <div className='text-red-600'>{errors.title}</div> : <div></div>}
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    for="sku"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Mã SKU</span>
                  </label>

                  <Form.Item className="mb-1">
                    <Input
                      // readOnly
                      disabled
                      type="text"
                      id="sku"
                      name="sku"
                      onChange={e => {
                        props.setFieldTouched('sku')
                        handleChange(e)
                      }}
                      value={values.sku}
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Mã SKU"
                      style={{ width: "100%", height: "45px" }}
                    />
                  </Form.Item>
                  {errors.sku && touched.sku ? <div className='text-red-600'>{errors.sku}</div> : <div></div>}
                </div>
              </div>

              <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="productUnit"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Đơn vị tính</span>
                  </label>
                  <Form.Item className="mb-1">
                    <select
                      // defaultValue={0}
                      className="border border-black text-base rounded-md"
                      id="productUnit"
                      name="productUnit"
                      onChange={e => {
                        props.setFieldTouched('productUnit')
                        handleChange(e)
                      }}
                      style={{ width: "90%", height: "45px" }}
                    >
                      <option value="0" disabled>Chọn đơn vị tính</option>
                      {productUnitList.map((item, index) => {
                        return <option value={item.id} selected={values.productUnit == item.id ? true : false} key={index}>
                          {item.name}
                        </option>
                      })}
                    </select>
                  </Form.Item>
                  {errors.productUnit && touched.productUnit ? <div className='text-red-600'>{errors.productUnit}</div> : <div></div>}
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    for="amount"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Khối lượng</span>
                  </label>

                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="amount"
                      name="amount"
                      onChange={e => {
                        props.setFieldTouched('amount')
                        handleChange(e)
                      }}
                      value={values.amount}
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Nhập khối lượng sản phẩm tại đây"
                      style={{ width: "100%", height: "45px" }}
                    />
                  </Form.Item>
                  {errors.amount && touched.amount ? <div className='text-red-600'>{errors.amount}</div> : <div></div>}
                </div>
              </div>

              <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="price"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Giá tiền</span>
                  </label>
                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="price"
                      name="price"
                      onChange={e => {
                        props.setFieldTouched('price')
                        handleChange(e)
                      }}
                      value={values.price}
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Giá tiền"
                      style={{ width: "90%", height: "45px" }}
                    />
                  </Form.Item>
                  {errors.price && touched.price ? <div className='text-red-600'>{errors.price}</div> : <div></div>}
                </div>
                {/* <div style={{ width: "100%" }}>
                  <label
                    for="productDiscount"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Khuyến mãi</span>
                  </label>

                  <Form.Item className="mb-1">
                    <select
                      defaultValue={0}
                      className="border border-black text-base rounded-md"
                      id="productDiscount"
                      name="productDiscount"
                      onChange={e => {
                        props.setFieldTouched('productDiscount')
                        handleChange(e)
                      }}
                      style={{ width: "100%", height: "45px" }}
                    >
                      <option value="0" disabled>Chọn mức khuyến mãi</option>
                      <option value="1">Không khuyến mãi</option>
                      <option value="2">5%</option>
                      <option value="3">10%</option>
                      <option value="4">15%</option>
                    </select>
                  </Form.Item>
                  {errors.productDiscount && touched.productDiscount ? <div className='text-red-600'>{errors.productDiscount}</div> : <div></div>}
                </div> */}
                <div style={{ width: "100%" }}>
                  <label
                    for="productOrigin"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Xuất xứ</span>
                  </label>
                  <Form.Item className="mb-1">
                    <select
                      // defaultValue={0}
                      className="border border-black text-base rounded-md"
                      id="productOrigin"
                      name="productOrigin"
                      onChange={e => {
                        props.setFieldTouched('productOrigin')
                        handleChange(e)
                      }}
                      style={{ width: "100%", height: "45px" }}
                    >
                      <option className="text-opacity-10" value="0" disabled>Chọn xuất xứ</option>
                      {originList.map((item, index) => {
                        return <option value={item.code} selected={values.productOrigin == item.code ? true : false} key={index}>{item.name}</option>
                      })}
                    </select>
                  </Form.Item>
                  {errors.productOrigin && touched.productOrigin ? <div className='text-red-600'>{errors.productOrigin}</div> : <div></div>}
                </div>
              </div>

              {/* <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="stockStatus"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Trạng thái trong kho</span>
                  </label>
                  <Form.Item>
                    <select
                      defaultValue={0}
                      className="border border-black text-base rounded-md"
                      id="stockStatus"
                      name="stockStatus"
                      style={{ width: "100%", height: "45px" }}
                    >
                      <option className="text-opacity-10" value="0" disabled>
                        Chọn trạng thái trong kho
                      </option>
                      <option id="full">Còn hàng</option>
                      <option id="low">Sắp hết hàng</option>
                      <option id="empty">Hết hàng</option>
                    </select>
                  </Form.Item>
                </div>

              </div> */}

              <div className="flex flex-row ">

                <div style={{ width: "100%" }}>
                  <label
                    for="productCategories"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Danh mục sản phẩm</span>
                  </label>

                  <Form.Item className="mb-1">
                    <select
                      // defaultValue={0}
                      // value={values.productCategories}
                      className="border border-black text-base rounded-md"
                      id="productCategories"
                      name="productCategories"
                      onChange={e => {
                        props.setFieldTouched('productCategories')
                        handleChange(e)
                      }}
                      style={{ width: "100%", height: "45px" }}
                    >
                      <option className="text-opacity-10" value={0} disabled>
                        Chọn danh mục sản phẩm
                      </option>
                      {categories.map((item, index) => {
                        return <option value={item.id} selected={values.productCategories == item.id ? true : false} key={index}>{item.name}</option>
                      })}
                    </select>
                  </Form.Item>
                  {errors.productCategories && touched.productCategories ? <div className='text-red-600'>{errors.productCategories}</div> : <div></div>}
                </div>
              </div>

              {/* <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="importGoodsDate"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Ngày nhập kho</span>
                  </label>
                  <Form.Item>
                    <Input
                      type="date"
                      id="importGoodsDate"
                      name="importGoodsDate"
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Ngày nhập kho"
                      style={{ width: "100%", height: "45px" }}
                    />
                  </Form.Item>
                </div> */}
              {/* <div style={{ width: "100%" }}>
                  <label
                    for="expirationDate"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Hạn sử dụng</span>
                  </label>

                  <Form.Item>
                    <Input
                      type="date"
                      id="expirationDate"
                      name="expirationDate"
                      className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Hạn sử dụng"
                      style={{ width: "100%", height: "45px" }}
                    />
                  </Form.Item>
                </div> */}
              {/* </div> */}



              {/* Tại đây */}
              {/* <div style={{ width: "100%" }}>
                <label
                  for="quantity_in_stock"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Số lượng hàng trong kho</span>
                </label>
                <table
                  className={`${styles.usermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                  style={{ width: "100%", minHeight: "200px" }}
                >
                  <thead>
                    <tr>
                      <th className="border border-slate-300 p-4 text-base text-center">
                        {" "}
                        STT
                      </th>
                      <th className="border border-slate-300 p-4 text-base text-center" style={{ width: "40%" }}>
                        {" "}
                        Số lượng hàng trong kho
                      </th>
                      <th className="border border-slate-300 p-4 text-base text-center" style={{ width: "40%" }} >
                        Ngày hết hạn
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 text-center p-2">
                        1
                      </td>
                      <td className="border border-slate-300 text-center p-2">
                        <span className="p-2">
                          <Form.Item>
                            <Input
                              type="text"
                              id="quantity_in_stock"
                              className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                              placeholder="Chỉnh sửa số lượng hàng trong kho"
                              style={{ width: "100%", height: "45px" }}
                            />
                          </Form.Item>
                        </span>
                      </td>
                      <td className="border border-slate-300 text-center p-2">
                        <span className="p-2">
                          <Form.Item>
                            <Input
                              type="date"
                              id="expirationDate"
                              name="expirationDate"
                              className={`${styles.productdetailmanagement__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                              placeholder="Hạn sử dụng"
                              style={{ width: "100%", height: "45px" }}
                            />
                          </Form.Item>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div> */}


              <div className="mb-3">
                <label
                  for="productDescription"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Mô tả sản phẩm</span>
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  id="productDescription"
                  name="productDescription"
                  data={values.productDescription}
                  // data="Hãy viết mô tả sản phẩm tại đây"
                  config={{
                    placeholder: 'Nhập mô tả sản phẩm tại đây',
                    toolbar: [
                      "heading",
                      "|",
                      "bold",
                      "italic",
                      "blockQuote",
                      "link",
                      "numberedList",
                      "bulletedList",
                      "|",
                      "undo",
                      "redo",
                    ],
                  }}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    props.setFieldTouched('productDescription')
                    setFieldValue('productDescription', data)
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
                {errors.productDescription && touched.productDescription ? <div className='text-red-600'>{errors.productDescription}</div> : <div></div>}
              </div>

              {/* delete and update button section */}
              <div className="flex justify-end mb-2" style={{ width: "100%" }}>
                {/* <Popconfirm placement="top"
                  onConfirm={() => { handleSubmit }}
                  title={textUpdate}
                  okText="Yes" cancelText="No"> */}
                <Button
                  type="default"
                  htmlType="submit"
                  onSubmitCapture={handleSubmit}
                  className={`${styles.productdetailmanagement__border__button} font-semibold text-lg flex justify-center items-center focus:border-green-700 focus:text-green-700`}
                  style={{ width: "120px", height: "45px" }}
                >
                  CẬP NHẬT
                </Button>
                {/* </Popconfirm> */}



                <Popconfirm placement="top"
                  onConfirm={() => { dispatch(deleteProductForSellerAction(productDetail.id)) }}
                  title={textDelete}
                  okText="Yes" cancelText="No">

                  <Button className={`${styles.productdetailmanagement__delete__button} font-semibold text-lg flex justify-center items-center focus:border-red-400 focus:text-red-400`}
                    style={{ width: "120px", height: "45px" }}
                  >
                    XÓA
                  </Button>
                </Popconfirm>
              </div>
              <div className="flex justify-end flex-row mb-2">
                <NavLink
                  to={"/inventorymanagement"}
                  className="flex flex-row text-black no-underline text-lg"
                >
                  <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                  <span className="hover:text-green-800">Quay lại</span>
                </NavLink>
              </div>
            </Form>
          </div>
        </div >
      </div > : <Redirect to="/" />
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const regexAllNumber = /^[0-9.,]+$/;
const regexSelect = /^[1-9]$/;

const ProductDetailManagementWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    slug: props.productDetail.slug,
    thumbnails: props.productUploadImage,
    title: props.productDetail.title,
    sku: props.productDetail.sku,
    amount: props.productDetail.amount,
    productUnit: props?.productDetail?.unit?.id,
    price: props.productDetail.price,
    // productDiscount: 0,
    productOrigin: props?.productDetail?.origin,
    productCategories: props?.productDetail?.category?.id,
    productDescription: props.productDetail.description
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required("Vui lòng không để trống tên sản phẩm !!!"),
    sku: Yup.string()
      .required("Vui lòng không để trống mã sku !!!"),
    amount: Yup.string()
      .required("Vui lòng không để trống khối lượng sản phẩm !!!")
      .matches(regexAllNumber, "Khối lượng chỉ được phép chứa số"),
    productUnit: Yup.string()
      .required("Vui lòng không để trống đơn vị tính !!!")
      .matches(regexSelect, "Vui lòng không để trống đơn vị tính !!!"),
    price: Yup.string()
      .required("Vui lòng không để trống giá sản phẩm !!!")
      .matches(regexAllNumber, "Giá sản phẩm chỉ được phép chứa số"),
    // productDiscount: Yup.string()
    // .required("Vui lòng không để trống mục khuyến mãi !!!")
    // .matches(regexSelect, "Vui lòng không để trống mục khuyến mãi !!!"),
    productOrigin: Yup.string()
      .required("Vui lòng không để trống xuất xứ !!!")
      .matches(regexAllLetter, "Vui lòng không để trống xuất xứ !!!"),
    productCategories: Yup.string()
      .required("Vui lòng không để trống danh mục sản phẩm !!!")
      .matches(regexSelect, "Vui lòng không để trống danh mục sản phẩm !!!"),
    productDescription: Yup.string()
      .required("Vui lòng không để trống mô tả sản phẩm !!!"),
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    console.log("VALUE FORM: ", values);
    // alert("CÓ VÀO UPDATE PRODUCT DETAIL INFO HANDLE SUBMIT");
    let data = {
      "product": {
        "title": values.title,
        // "sku": values.sku,
        "amount": values.amount,
        "productUnit": values.productUnit,
        "price": values.price,
        // "productDiscount": values.productDiscount,
        "origin": values.productOrigin,
        "category": values.productCategories,
        "description": values.productDescription
      }
    }
    console.log("PRODUCT DETAIL INFO FOR SELLER DATA: ", data);
    props.dispatch(updateProductDetailedInformationForSellerAction(values.slug, data));
  },

  displayName: 'ProductDetailManagementWithFormik'
})(ProductDetailManagement);

const mapStateToProps = (state) => {
  return {
    productDetail: state.ProductReducer.productDetail,
    productUploadImage: state.ProductReducer.productUploadImage
  }
}

export default connect(mapStateToProps, null)(ProductDetailManagementWithFormik);