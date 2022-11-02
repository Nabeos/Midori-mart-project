import React from "react";
import styles from "./AddNewUser.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";

export default function AddNewUser() {
  return (
    <div>
      <Form>
        <div className="flex flex-row">
          <div style={{ width: "100%" }}>
            <label
              for="last_name"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Họ</span>
            </label>
            <Form.Item
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập họ!",
                },
              ]}
            >
              <Input
                type="text"
                id="last_name"
                className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
                placeholder="Họ"
                required=""
                style={{ width: "90%", height: "5vh" }}
              />
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="first_name"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Tên</span>
            </label>

            <Form.Item
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên!",
                },
              ]}
            >
              <Input
                type="text"
                id="first_name"
                className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
                placeholder="Tên"
                required=""
                style={{ width: "100%", height: "5vh" }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="-mt-2">
          <label
            for="phone"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Số điện thoại</span>
          </label>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Hãy nhập số điện thoại!",
              },
            ]}
          >
            <Input
              type="tel"
              id="phone"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required=""
              style={{ width: "100%", height: "5vh" }}
            />
          </Form.Item>
        </div>

        <div className="-mt-4">
          <label
            for="email"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Email</span>
          </label>
          <Form.Item
            name="username"
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
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="abc@gmail.com"
              required=""
              style={{ width: "100%", height: "5vh" }}
            />
          </Form.Item>
        </div>
        <div className="-mt-4">
          <label
            for="role"
            className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Vai trò</span>
          </label>
          <Form.Item name="role">
            <select
              className="border border-black pt-3 pb-3 text-base focus:border-green-900"
              style={{ width: "100%" }}
            >
              <option>Chọn vai trò</option>
              <option>Quản lí của hàng</option>
              <option>Shipper</option>
            </select>
          </Form.Item>
        </div>
        <div className="-mt-4">
          <label
            for="password"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Mật khẩu</span>
          </label>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu!",
              },
            ]}
          >
            <Input
              type="password"
              id="password"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="•••••••••"
              required=""
              style={{ width: "100%", height: "5vh" }}
            />
          </Form.Item>
        </div>
        <div className="-mt-4">
          <label
            for="confirm_password"
            className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Nhập lại mật khẩu</span>
          </label>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Hãy nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu không trùng với mật khẩu bạn vừa nhập!")
                  );
                },
              }),
            ]}
          >
            <Input
              type="password"
              id="confirm_password"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="•••••••••"
              required=""
              style={{ width: "100%", height: "5vh" }}
            />
          </Form.Item>
        </div>

        <Button
          type="default"
          htmlType="submit"
          className='pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700'
          style={{ width: "100%" }}
        >
          Thêm người dùng mới
        </Button>
      </Form>
    </div>
  );
}
