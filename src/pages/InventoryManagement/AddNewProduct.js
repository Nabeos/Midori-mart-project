import React, { useEffect, useState } from "react";
import styles from "./AddNewProduct.module.css";
import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Upload,
  message,
} from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useDispatch, useSelector } from "react-redux";
import { uploadImageAction } from "../../redux/action/user/UserAction";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";
import { addNewProductForSellerAction, getAllOriginAction, getAllProductUnitAction } from "../../redux/action/inventory/InventoryAction";

function AddNewProduct(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;

  console.log("VALUES ADD NEW PRODUCT: ", values);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    dispatch(getAllProductUnitAction());
    dispatch(getAllOriginAction());
  }, [])
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const productUnitList = useSelector(state => state.InventoryReducer.productUnitList);
  const originList = useSelector(state => state.InventoryReducer.originList);

  return (
    <div>
      <Form onSubmitCapture={handleSubmit}>
        {/* <div>
          <div className="text-lg font-semibold">Ảnh sản phẩm</div>
          <div className="text-2xl font-bold mb-3 flex flex-row">
            <img
              src="/images/user/emty_product.png"
              className="mr-2"
              style={{ width: "200px" }}
            />
            <div className="flex whitespace-nowrap items-end">
              <label htmlFor="filePicker" className="bg-green-700 text-white p-2 cursor-pointer" style={{ fontSize: '15px' }}>
                Upload ảnh
              </label>
              <input type="file" id="filePicker" style={{ visibility: "hidden" }} name="file" placeholder='Upload an image'
                onChange={uploadImage} />
            </div>
          </div>
        </div> */}
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
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập tên sản phẩm"
                style={{ width: "90%", height: "45px" }}
              />
            </Form.Item>
            {errors.title && touched.title ? <div className='text-red-600'>{errors.title}</div> : <div></div>}
          </div>
          {/* <div style={{ width: "100%" }}>
            <label
              for="sku"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Mã SKU</span>
            </label>

            <Form.Item className="mb-1">
              <Input
                type="text"
                id="sku"
                name="sku"
                onChange={e => {
                  props.setFieldTouched('sku')
                  handleChange(e)
                }}
                placeholder="Nhập mã sku"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
            {errors.sku && touched.sku ? <div className='text-red-600'>{errors.sku}</div> : <div></div>}
          </div> */}
          <div style={{ width: "100%" }}>
            <label
              for="productUnit"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Đơn vị tính</span>
            </label>
            <Form.Item className="mb-1">
              <select
                defaultValue={0}
                onChange={e => {
                  props.setFieldTouched('productUnit')
                  handleChange(e)
                }}
                className="border border-black text-base rounded-md"
                id="productUnit"
                name="productUnit"
                style={{ width: "100%", height: "45px" }}
              >
                <option value="0" disabled>Chọn đơn vị tính</option>
                {productUnitList.map((item, index) => {
                  return <option value={item.id}>{item.name}</option>
                })}
              </select>
            </Form.Item>
            {errors.productUnit && touched.productUnit ? <div className='text-red-600'>{errors.productUnit}</div> : <div></div>}
          </div>
        </div>

        <div className="flex flex-row ">

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
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập khối lượng"
                style={{ width: "90%", height: "45px" }}
              />
            </Form.Item>
            {errors.amount && touched.amount ? <div className='text-red-600'>{errors.amount}</div> : <div></div>}
          </div>
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
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập giá tiền"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
            {errors.price && touched.price ? <div className='text-red-600'>{errors.price}</div> : <div></div>}
          </div>
        </div>

        <div className="flex flex-row ">

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
                onChange={e => {
                  props.setFieldTouched('productDiscount')
                  handleChange(e)
                }}
                className='border border-black text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full'
                id="productDiscount"
                name="productDiscount"
                style={{ width: "100%", height: "45px" }}
              >
                <option value={0} disabled>Chọn mức khuyến mãi</option>
                <option value="1">5%</option>
                <option value="2">10%</option>
                <option value="3">15%</option>
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
                defaultValue={0}
                className="border border-black text-base rounded-md"
                id="productOrigin"
                name="productOrigin"
                onChange={e => {
                  props.setFieldTouched('productOrigin')
                  handleChange(e)
                }}
                style={{ width: "90%", height: "45px" }}
              >
                <option className="text-opacity-10" value="0" disabled>Chọn xuất xứ</option>
                {originList.map((item, index) => {
                  return <option key={index} value={item.code}>
                    {item.name}
                  </option>
                })}

              </select>
            </Form.Item>
            {errors.productOrigin && touched.productOrigin ? <div className='text-red-600'>{errors.productOrigin}</div> : <div></div>}
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="productCategories"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Danh mục sản phẩm</span>
            </label>

            <Form.Item className="mb-1">
              <select
                defaultValue={0}
                className="border border-black text-base rounded-md"
                id="productCategories"
                name="productCategories"
                onChange={e => {
                  props.setFieldTouched('productCategories')
                  handleChange(e)
                }}
                style={{ width: "100%", height: "45px" }}
              >
                <option className="text-opacity-10" value="0" disabled>
                  Chọn danh mục sản phẩm
                </option>
                {categories.map((item, index) => {
                  return <option key={index} value={item.id}>{item.name}</option>
                })}
              </select>
            </Form.Item>
            {errors.productCategories && touched.productCategories ? <div className='text-red-600'>{errors.productCategories}</div> : <div></div>}
          </div>
        </div>

        {/* <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="quantity_status"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Trạng thái trong kho</span>
            </label>
            <Form.Item>
              <select
                className="border border-black text-lg rounded-md"
                id="quantity_status"
                style={{ width: "90%", height: "45px" }}
              >
                <option className="text-opacity-10">
                  Trạng thái trong kho
                </option>
                <option id="full">Còn hàng</option>
                <option id="low">Sắp hết hàng</option>
                <option id="empty">Hết hàng</option>
              </select>
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="quantity_in_stock"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Số lượng hàng trong kho</span>
            </label>

            <Form.Item>
              <Input
                type="number"
                id="quantity_in_stock"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Số lượng hàng trong kho"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
          </div>
        </div> */}

        <div className="flex flex-row ">


        </div>

        {/* <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="imported_date"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Ngày nhập kho</span>
            </label>
            <Form.Item>
              <Input
                type="date"
                id="imported_date"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Ngày nhập kho"
                style={{ width: "90%", height: "45px" }}
              />
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="expired_date"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Hạn sử dụng</span>
            </label>

            <Form.Item>
              <Input
                type="date"
                id="expired_date"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Hạn sử dụng"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
          </div>
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
            data=""
            id="productDescription"
            name="productDescription"
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

        <Button
          type="default"
          htmlType="submit"
          onSubmitCapture={handleSubmit}
          className=" pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700"
          style={{ width: "100%" }}
        >
          Thêm sản phẩm mới
        </Button>
      </Form>
    </div >
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const regexAllNumber = /^[0-9.,]+$/;
const regexSelect = /^[1-9]$/;

const AddNewProductWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    title: "",
    // sku: "",
    amount: "",
    productUnit: 0,
    price: "",
    // productDiscount: 0,
    productOrigin: 0,
    productCategories: 0,
    productDescription: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .required("Vui lòng không để trống tên sản phẩm !!!"),
    // sku: Yup.string()
    //   .required("Vui lòng không để trống mã sku !!!"),
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
    //   .required("Vui lòng không để trống mục khuyến mãi !!!")
    //   .matches(regexSelect, "Vui lòng không để trống mục khuyến mãi !!!"),
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
    // alert("CÓ VÀO ADD NEW PRODUCT HANDLE SUBMIT");
    // console.log("VALUE FORM ADD NEW PRODUCT FOR SELLER: ", values);
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
    console.log("DATA ADD NEW PRODUCT: ", data);
    props.dispatch(addNewProductForSellerAction(data));
  },

  displayName: 'AddNewProductWithFormik'
})(AddNewProduct);

const mapStateToProps = (state) => {
  return {
    // productUnitList: state.InventoryReducer.productUnitList
  }
}

export default connect(mapStateToProps, null)(AddNewProductWithFormik);