import React, { useState } from "react";
import styles from "./Register.module.css";
import { NavLink } from "react-router-dom";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useSelector } from 'react-redux'
import { registerAction } from "../../redux/action/user/UserAction";

function Register(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  console.log("INITIAL VALUES: ", values);
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/signup.jpg"
          style={{ width: "73%", minHeight: "100vh" }}
        />
      </div>
      <div className="flex justify-center flex-col col-span-1 -ml-14 -mt-10">
        <div className="flex flex-col mb-4">
          <div className="flex ml-20">
            <NavLink
              to="/"
              className="text-black no-underline font-medium flex items-center"
            >
              <img src="./images/midori_logo.png" style={{ width: "43%" }} />
              <div className="-ml-12 text-3xl font-bold">
                <span className={`${styles.register__logo__m1} `}>M</span>
                <span>idori</span>
                <span className={`${styles.register__logo__m2} `}>M</span>
                <span>art</span>
              </div>
            </NavLink>
          </div>

          <span className="text-xl font-medium">
            Đăng kí để nhận ưu đãi từ Midori!
          </span>
        </div>
        <div className="">
          <Form onSubmitCapture={handleSubmit}>
            <div className="flex mb-2">
              <div style={{ width: "100%" }}>
                <label
                  for="lastName"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Họ</span>
                </label>
                <Form.Item className="mb-1">
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Họ"
                    onChange={e => {
                      props.setFieldTouched('lastName')
                      handleChange(e)
                    }}
                    style={{ width: "90%", minHeight: "6vh" }}
                  />
                </Form.Item>
                {errors.lastName && touched.lastName ? <div className='text-red-600'>{errors.lastName}</div> : <div></div>}
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="firstName"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Tên</span>
                </label>

                <Form.Item className="mb-1">
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Tên"
                    onChange={e => {
                      props.setFieldTouched('firstName')
                      handleChange(e)
                    }}
                    style={{ width: "76%", minHeight: "45px" }}
                  />
                </Form.Item>
                {errors.firstName && touched.firstName ? <div className='text-red-600'>{errors.firstName}</div> : <div></div>}
              </div>
            </div>

            <div className="mb-2">
              <label
                for="phoneNumber"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Số điện thoại</span>
              </label>
              <Form.Item className="mb-1">
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="Hãy nhập số điện thoại"
                  onChange={e => {
                    props.setFieldTouched('phoneNumber')
                    handleChange(e)
                  }}
                  style={{ width: "88%", minHeight: "45px" }}
                />
              </Form.Item>
              {errors.phoneNumber && touched.phoneNumber ? <div className='text-red-600'>{errors.phoneNumber}</div> : <div></div>}
            </div>

            <div className="mb-2">
              <label
                for="email"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Email</span>
              </label>
              <Form.Item className="mb-1">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="abc@gmail.com"
                  onChange={e => {
                    props.setFieldTouched('email')
                    handleChange(e)
                  }}
                  style={{ width: "88%", minHeight: "45px" }}
                />
              </Form.Item>
              {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : <div></div>}
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Mật khẩu</span>
              </label>
              <Form.Item className="mb-1">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="•••••••••"
                  onChange={e => {
                    props.setFieldTouched('password')
                    handleChange(e)
                  }}
                  style={{ width: "88%", minHeight: "45px" }}
                />
              </Form.Item>
              {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : <div></div>}
            </div>
            <div className="">
              <label
                for="confirmPassword"
                className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Nhập lại mật khẩu</span>
              </label>
              <Form.Item className="mb-1">
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={e => {
                    props.setFieldTouched('confirmPassword')
                    handleChange(e)
                  }}
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="•••••••••"
                  required=""
                  style={{ width: "88%", minHeight: "45px" }}
                />
              </Form.Item>
              {((values.password !== values.confirmPassword) && touched.confirmPassword) ? <div className='text-red-600'>Mật khẩu xác nhận quý khách vừa nhập không đúng. Quý khách vui lòng nhập lại !!!</div> : <div></div>}
            </div>

            <Button
              type="default"
              htmlType="submit"
              className={`${styles.register__border__button} mt-2 pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
              style={{ width: "88%" }}
              onSubmitCapture={handleSubmit}
            >
              Đăng ký
            </Button>
            <div className="flex mt-1 text-base" style={{ width: "50%" }}>
              Đã có tài khoản?{" "}
              <NavLink
                to="/login"
                className={`${styles.register__confirm__button} font-medium no-underline ml-1 text-green-800`}
              >
                Đăng nhập
              </NavLink>
            </div>
          </Form>
        </div>

      </div>
    </div>
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const RegisterWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    lastName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    lastName: Yup.string()
      .required("Quý khách không được để trống mục họ !!!")
      .matches(regexAllLetter, "Mục họ chỉ được phép chứa chữ !!!"),
    firstName: Yup.string()
      .required("Quý khách không được để trống mục tên !!!")
      .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
    phoneNumber: Yup.string()
      .required("Quý khách không được để trống mục số điện thoại !!!")
      .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
    email: Yup.string()
      .required("Quý khách không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    password: Yup.string()
      .min(6, 'Độ dài password tối thiếu là 6 ký tự !!!')
      .max(32, 'Độ dài password tối đa là 32 ký tự !!!')
      .required("Quý khách vui lòng không được để trống mục password !!!")
      .matches(regexPassword, 'Password phải có độ dài tối thiếu 6 ký tự và tối đa 32 ký tự, phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !!!')
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    console.log("VALUE FORM: ", values);
    let data = {
      "user": {
        "fullname": values.lastName + " " + values.firstName,
        "email": values.email,
        "phonenumber": values.phoneNumber,
        "password": values.password
      }
    }
    console.log("REGISTER DATA: ", data);
    props.dispatch(registerAction(data));
  },

  displayName: 'RegisterWithFormik'
})(Register);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(RegisterWithFormik);