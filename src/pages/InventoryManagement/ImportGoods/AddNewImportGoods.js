import React, { useEffect } from 'react'
import styles from "./AddNewImportGoods.module.css";
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
import { getProductListByCategoryIdAction } from '../../../redux/action/product/ProductAction';
import { ADD_PRODUCT_TEMPORARILY_TO_IMPORT_GOODS_FORM } from '../../../redux/type/inventory/InventoryType';

function AddNewImportGoods(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;

  console.log("VALUES SAO KHÔNG HIỆN: ", values);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListByCategoryIdAction(0, 1000, 0));
  }, [])

  const productListByCategoryId = useSelector(state => state.ProductReducer.productListByCategoryId);

  console.log("productListByCategoryId IN ADD NEW PRODUCTS INTO IMPORT GOODS FORM: ", productListByCategoryId);

  return (
    <div>
      <Form onSubmitCapture={handleSubmit}>
        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="importedProduct"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Tên sản phẩm</span>
            </label>

            <div>
              <select
                defaultValue={0}
                id="importedProduct"
                name="importedProduct"
                onChange={e => {
                  props.setFieldTouched('importedProduct')
                  handleChange(e)
                }}
                className="border border-black text-base rounded-md"
                style={{ width: "90%", height: "45px" }}
              >
                <option value="0" disabled>Chọn sản phẩm</option>
                {productListByCategoryId.map((item, index) => {
                  return <option key={index} value={item.id}>
                    {item.title}
                  </option>
                })}
              </select>

            </div>
            {errors.importedProduct && touched.importedProduct ? <div className='text-red-600'>{errors.importedProduct}</div> : <div></div>}
          </div>

          <div style={{ width: "100%" }}>
            <label
              for="price"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Giá tiền</span>
            </label>
            <Form.Item className='mb-1'>
              <Input
                type="text"
                id="price"
                name="price"
                onChange={e => {
                  props.setFieldTouched('price')
                  handleChange(e)
                }}
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập giá tiền sản phẩm"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
            {errors.price && touched.price ? <div className='text-red-600'>{errors.price}</div> : <div></div>}
          </div>
        </div>

        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="quantityImport"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Số lượng nhập kho</span>
            </label>

            <Form.Item className='mb-1'>
              <Input
                type="text"
                id="quantityImport"
                name="quantityImport"
                onChange={e => {
                  props.setFieldTouched('quantityImport')
                  handleChange(e)
                }}
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập số lượng nhập kho"
                style={{ width: "90%", height: "45px" }}
              />
            </Form.Item>
            {errors.quantityImport && touched.quantityImport ? <div className='text-red-600'>{errors.quantityImport}</div> : <div></div>}
          </div>

          <div style={{ width: "100%" }}>
            <label
              for="expiryDate"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Hạn sử dụng</span>
            </label>

            <Form.Item className='mb-1'>
              <Input
                type="date"
                id="expiryDate"
                name="expiryDate"
                onChange={e => {
                  props.setFieldTouched('expiryDate')
                  handleChange(e)
                }}
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Hạn sử dụng"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
            {errors.expiryDate && touched.expiryDate ? <div className='text-red-600'>{errors.expiryDate}</div> : <div></div>}
          </div>
        </div>

        <Button
          type="default"
          htmlType="submit"
          onClick={handleSubmit}
          className="mt-3 pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700"
          style={{ width: "100%" }}
        >
          Thêm sản phẩm vào phiếu nhập kho
        </Button>
      </Form>
    </div>
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const regexAllNumber = /^[0-9.,]+$/;
const regexSelect = /^[1-9]$/;

const AddNewImportGoodsWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    importedProduct: "",
    price: "",
    quantityImport: "",
    expiryDate: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    importedProduct: Yup.string()
      .required("Vui lòng không được để trống hạn sử dụng !!!"),
    price: Yup.string()
      .required("Vui lòng không được để trống mục giá !!!")
      .matches(regexAllNumber, 'Giá sản phẩm không được phép chứa chữ !!!'),
    quantityImport: Yup.string()
      .required("Vui lòng không được để trống số lượng nhập kho !!!")
      .matches(regexAllNumber, 'Số lượng nhập kho không được phép chứa chữ !!!'),
    expiryDate: Yup.string()
      .required("Vui lòng không được để trống hạn sử dụng !!!")
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    // alert("CÓ VÀO THÊM SẢN PHẨM NHẬP HÀNG GỬI LOCAL STORAGE");
    let data = {
      "productId": values.importedProduct,
      "quantityImport": values.quantityImport,
      "expiryDate": values.expiryDate,
      "price": values.price,
      "totalPrice": values.price * values.quantityImport
    }
    props.dispatch({
      type: ADD_PRODUCT_TEMPORARILY_TO_IMPORT_GOODS_FORM,
      importProductAction: data
    })
    console.log("VALUES GỬI ĐI TẠI HANDLE SUBMIT ADD PRODUCT: ", data);
  },

  displayName: 'AddNewImportGoodsWithFormik'
})(AddNewImportGoods);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(AddNewImportGoodsWithFormik);