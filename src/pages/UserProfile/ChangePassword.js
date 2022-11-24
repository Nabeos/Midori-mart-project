import React from "react";
import styles from "./ChangePassword.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect, useSelector } from "react-redux";
import { history } from "../../App";
import { changePasswordAction, loginAction } from "../../redux/action/user/UserAction";

function ChangePassword(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div className="flex justify-center">
      <Form className="" style={{ width: "80%" }} onSubmitCapture={handleSubmit}>
        <div className="text-xl font-bold mt-3 mb-3">Đổi mật khẩu mới</div>

        <div className="">
          <label
            for="currentPassword"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Mật khẩu hiện tại</span>
          </label>
          <Form.Item className="mb-1">
            <Input
              type="password"
              id="currentPassword"
              name="currentPassword"
              onChange={e => {
                props.setFieldTouched('currentPassword')
                handleChange(e)
              }}
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Nhập mật khẩu hiện tại"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {errors.currentPassword && touched.currentPassword ? <div className='text-red-600'>{errors.currentPassword}</div> : <div></div>}
        </div>
        <div className="">
          <label
            for="newPassword"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Mật khẩu mới</span>
          </label>
          <Form.Item className="mb-1">
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              onChange={e => {
                props.setFieldTouched('newPassword')
                handleChange(e)
              }}
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Nhập mật khẩu mới"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {errors.newPassword && touched.newPassword ? <div className='text-red-600'>{errors.newPassword}</div> : <div></div>}
        </div>
        <div className="">
          <label
            for="confirmNewPassword"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Nhập lại mật khẩu mới</span>
          </label>
          <Form.Item className="mb-1">
            <Input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              onChange={e => {
                props.setFieldTouched('confirmNewPassword')
                handleChange(e)
              }}
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Nhập lại mật khẩu mới"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {(errors.confirmNewPassword && touched.confirmNewPassword) || (values.confirmNewPassword != values.newPassword && touched.confirmNewPassword) ? <div className='text-red-600'>Mật khẩu xác nhận quý khách vừa nhập không đúng. Quý khách vui lòng nhập lại !!!</div> : <div></div>}
        </div>

        {/* delete and update button section */}
        <div className="flex justify-end mb-4" style={{ width: "100%" }}>
          <Button
            type="default"
            htmlType="submit"
            onSubmitCapture={handleSubmit}
            className={`${styles.changepassword__border__button} mt-3 flex justify-center items-center py-4 px-3 font-semibold text-lg focus:border-green-900 focus:text-green-900`}
          >
            CẬP NHẬT
          </Button>
        </div>
      </Form>
    </div>
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const ChangePasswordWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    currentPassword: Yup.string()
      .min(6, 'Độ dài mật khẩu tối thiếu là 6 ký tự !!!')
      .max(32, 'Độ dài mật khẩu tối đa là 32 ký tự !!!')
      .required("Quý khách vui lòng không được để trống mật khẩu hiện tại !!!")
      .matches(regexPassword, 'Mật khẩu phải có độ dài tối thiếu 6 ký tự và tối đa 32 ký tự, phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !!!'),
    newPassword: Yup.string()
      .min(6, 'Độ dài mật khẩu tối thiếu là 6 ký tự !!!')
      .max(32, 'Độ dài mật khẩu tối đa là 32 ký tự !!!')
      .required("Quý khách vui lòng không được để trống mật khẩu mới !!!")
      .matches(regexPassword, 'Mật khẩu phải có độ dài tối thiếu 6 ký tự và tối đa 32 ký tự, phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !!!'),
    confirmNewPassword: Yup.string()
      .required("Không được để trống mục nhập lại mật khẩu mới !!!")
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT CHANGE PASSWORD");
    console.log("VALUE FORM CHANGE PASSWORD: ", values);
    let data = {
      "information": {
        "currentPassword": values.currentPassword,
        "password": values.newPassword,
        "repassword": values.confirmNewPassword
      }
    }
    console.log("CHANGE PASSWORD DATA SEND: ", data);
    props.dispatch(changePasswordAction(data));
  },

  displayName: 'ChangePasswordWithFormik'
})(ChangePassword);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(ChangePasswordWithFormik);