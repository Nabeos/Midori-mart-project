import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useSelector } from 'react-redux'
import { history } from "../../App";
import { loginAction } from "../../redux/action/user/UserAction";

function Login(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/signin.jpg"
          style={{ width: "73%", minHeight: "100vh" }}
        />
      </div>
      <div className="flex justify-center flex-col col-span-1 -ml-28 -mt-10">
        <div className="flex flex-col mb-4">
          <div className="flex ml-20">
            <NavLink
              to="/"
              className="text-black no-underline font-medium flex items-center"
            >
              <img src="./images/midori_logo.png" style={{ width: "43%" }} />
              <div className="-ml-12 text-3xl font-bold">
                <span className={`${styles.login__logo__m1} `}>M</span>
                <span>idori</span>
                <span className={`${styles.login__logo__m2} `}>M</span>
                <span>art</span>
              </div>
            </NavLink>
          </div>

          <span className="text-xl font-medium">
            Chào mừng bạn đến với MidoriMart!
          </span>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onSubmitCapture={handleSubmit}
        >
          <div className="-mt-5">
            <label
              for="email"
              className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Email</span>
            </label>
            <Form.Item className="mb-1"
            >
              <Input
                type="text"
                id="email"
                name="email"
                onChange={e => {
                  props.setFieldTouched('email')
                  handleChange(e)
                }}
                className={`${styles.login__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc@gmail.com"
                style={{ width: "88%", minHeight: "40px" }}
              />
            </Form.Item>
            {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : <div></div>}
          </div>
          <div className="">
            <div className="flex">
              <div className="flex justify-end " style={{ width: "87%" }}>
                <NavLink
                  to="/forgotpassword"
                  className={`${styles.login__register__button} mt-2 font-normal text-md text-green-800`}
                >
                  Quên mật khẩu
                </NavLink>
              </div>
            </div>

            <div className="">
              <label
                for="password"
                className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Mật khẩu</span>
              </label>
              <Form.Item className="mb-1"
              >
                <Input
                  type="password"
                  name="password"
                  id="password"
                  className={`${styles.login__border__radius} mb-2 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  onChange={e => {
                    props.setFieldTouched('password')
                    handleChange(e)
                  }}
                  placeholder="•••••••••"
                  required=""
                  style={{ width: "88%", minHeight: "40px" }}
                />
              </Form.Item>
              {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : <div></div>}
            </div>
          </div>

          <div className="flex flex-col">
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.login__border__button} mt-2 pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
                style={{ width: "88%" }}
                onSubmit={handleSubmit}
              >
                Đăng nhập
              </Button>
              <br />
            </Form.Item>
            <div className="-mt-5 text-base">
              Chưa có tài khoản?{" "}
              <NavLink
                to="/register"
                className={`${styles.login__register__button} font-medium no-underline text-green-800`}
              >
                Đăng ký
              </NavLink>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;

const LoginWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    email: "",
    password: ""
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Quý khách không được để trống mục email !!!"),

    password: Yup.string()
      .required("Quý khách vui lòng không được để trống mục password !!!")
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    let data = {
      "user": {
        "email": values.email,
        "password": values.password
      }
    }
    console.log("data login: ", data);
    props.dispatch(loginAction(data));
  },

  displayName: 'LoginWithFormik'
})(Login);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(LoginWithFormik);