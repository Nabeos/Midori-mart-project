import React from "react";
import styles from "./ForgotPassword.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="grid grid-cols-3 " style={{minHeight: "100vh"}}>
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/resetPassword.jpg"
          style={{ width: "100%", minHeight: "90vh" }}
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
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="mb-6">
            <label
              for="email"
              className="block mb-1 text-sm font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Tên đăng nhập</span>
            </label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên người dùng!",
                },
              ]}
            >
              <Input
                type="text"
                id="username"
                className={`${styles.forgotpassword__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc"
                required=""
                style={{ width: "88%", height:"6vh" }}
              />
            </Form.Item>
          </div>

          <div className="-mt-4">
            <label
              for="email"
              className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Email</span>
            </label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập email!",
                },
              ]}
            >
              <Input
                type="email"
                id="email"
                className={`${styles.forgotpassword__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc@cgmail.com"
                required=""
                style={{ width: "88%", height:"6vh"}}
              />
            </Form.Item>
          </div>

          <div className="flex flex-col -mt-1">
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.forgotpassword__border__button} pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
                style={{ width: "88%", }}
              >
                Gửi yêu cầu
              </Button>
              <br />
            </Form.Item>
            <div className="-mt-5 text-base">
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
