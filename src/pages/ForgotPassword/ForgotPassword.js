import React from "react";
import styles from "./ForgotPassword.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { connect, useSelector } from 'react-redux'
import { resetPasswordAction } from "../../redux/action/user/UserAction";

function ForgotPassword(props) {
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
    <div className="grid grid-cols-3 " style={{ minHeight: "100vh" }}>
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/forgot_password.jpg"
          style={{ width: "73%", minHeight: "90vh" }}
        />
      </div>
      <div className="flex justify-center flex-col col-span-1 -ml-16 -mt-10">
        <div className="flex flex-col mb-4">
          <div className="flex ml-20">
            <NavLink
              to="/"
              className="text-black no-underline font-medium flex items-center"
            >
              <img src="./images/midori_logo.png" style={{ width: "43%" }} />
              <div className="-ml-12 text-3xl font-bold">
                <span className={`${styles.forgot__logo__m1} `}>M</span>
                <span>idori</span>
                <span className={`${styles.forgot__logo__m2} `}>M</span>
                <span>art</span>
              </div>
            </NavLink>
          </div>

          <span className="text-xl font-medium">Quên mật khẩu?</span>
          <span className="text-md">
            Nhập thông tin vào bên dưới chúng tôi sẽ gửi lại mật khẩu mới cho
            bạn
          </span>
        </div>
        <Form
          name="normal_login"
          initialValues={{
          }}
          onSubmitCapture={handleSubmit}
        >
          <div className="">
            <label
              for="email"
              className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Email</span>
            </label>
            <Form.Item className="mb-1">
              <Input
                type="text"
                id="email"
                name="email"
                onChange={e => {
                  props.setFieldTouched('email')
                  handleChange(e)
                }}
                className={`${styles.forgotpassword__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc@cgmail.com"
                required=""
                style={{ width: "88%", minHeight: "40px" }}
              />
            </Form.Item>
            {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : <div></div>}
          </div>

          <div className="flex flex-col">
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.forgotpassword__border__button} mt-2 pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
                style={{ width: "88%" }}
                onSubmitCapture={handleSubmit}
              >
                Gửi yêu cầu
              </Button>
              <br />
            </Form.Item>
            <div className="text-base">
              <NavLink
                to="/login"
                className={`${styles.forgotpassword__login__button} font-medium no-underline text-green-800`}
              >
                Quay lại trang đăng nhập
              </NavLink>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

const ForgotPasswordWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    email: "",
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Quý khách không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    console.log("VALUE FORM: ", values);
    // props.dispatch(resetPasswordAction());
  },

  displayName: 'FormatPasswordWithFormik'
})(ForgotPassword);


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(ForgotPasswordWithFormik);