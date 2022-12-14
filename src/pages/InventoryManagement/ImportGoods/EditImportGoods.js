import React from 'react'
import styles from "./EditImportGoods.module.css";
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
export default function EditImportGoods() {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div>
      <Form>
        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="product_name"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Tên sản phẩm</span>
            </label>
            <Form.Item name="product_name">
              <Input
                type="text"
                id="product_name"
                className=' text-gray-900 mr-2 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập tên sản phẩm"
                style={{ width: "90%", height: "45px" }}
              />
            </Form.Item>
          </div>
          {/* <div style={{ width: "100%" }}>
            <label
              for="sku_code"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Mã SKU</span>
            </label>

            <Form.Item name="sku_code">
              <Input
                type="text"
                id="sku_code"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập mã sku"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
          </div> */}
          <div style={{ width: "100%" }}>
            <label
              for="price"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Giá tiền</span>
            </label>
            <Form.Item name="price">
              <Input
                type="text"
                id="price"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập giá tiền sản phẩm"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
          </div>
        </div>



        <div className="flex flex-row ">

          <div style={{ width: "100%" }}>
            <label
              for="quantity_in_stock"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Số lượng nhập kho</span>
            </label>

            <Form.Item name="quantity_in_stock">
              <Input
                type="text"
                id="quantity_in_stock"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Nhập số lượng nhập kho"
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

            <Form.Item name="expired_date">
              <Input
                type="date"
                id="expired_date"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Hạn sử dụng"
                style={{ width: "100%", height: "45px" }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-row ">

          {/* <div style={{ width: "100%" }}>
            <label
              for="quantity_in_stock"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Số lượng hàng trong kho</span>
            </label>

            <Form.Item name="quantity_in_stock">
              <Input
                type="number"
                id="quantity_in_stock"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Số lượng hàng trong kho"
                style={{ width: "100%", height: "3.6rem" }}
              />
            </Form.Item>
          </div> */}
        </div>

        {/* <div className="flex flex-row ">
                  <div style={{ width: "100%" }}>
                    <label
                      for="product_origin"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Xuất xứ</span>
                    </label>
                    <Form.Item name="product_origin">
                      <select
                        className="border border-black text-lg rounded-md"
                        id="product_origin"
                        style={{ width: "90%", height: "3.6rem" }}
                      >
                        <option className="text-opacity-10">Xuất xứ</option>
                        <option id="vietnam">Việt Nam</option>
                        <option id="russia">Nga</option>
                        <option id="germany">Đức</option>
                      </select>
                    </Form.Item>
                  </div>
                  <div style={{ width: "100%" }}>
                    <label
                      for="quantity_in_stock"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Danh mục sản phẩm</span>
                    </label>
    
                    <Form.Item name="quantity_in_stock">
                      <select
                        className="border border-black text-lg rounded-md"
                        id="product_origin"
                        style={{ width: "100%", height: "3.6rem" }}
                      >
                        <option className="text-opacity-10">
                          Danh mục sản phẩm
                        </option>
                        <option id="vegetable">Rau</option>
                        <option id="meat">Thịt</option>
                        <option id="beverage">Nước</option>
                      </select>
                    </Form.Item>
                  </div>
                </div> */}

        <div className="flex flex-row ">
          {/* <div style={{ width: "100%" }}>
            <label
              for="imported_date"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Ngày nhập kho</span>
            </label>
            <Form.Item name="imported_date">
              <Input
                type="date"
                id="imported_date"
                className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                placeholder="Ngày nhập kho"
                style={{ width: "90%", height: "3.6rem" }}
              />
            </Form.Item>
          </div> */}

        </div>
        <div className='flex'>
          <Button
            type="default"
            htmlType="submit"
            className=" pt-3 pb-11 mr-3 font-semibold text-xl rounded-md hover:bg-orange-500 hover:text-white hover:border-orange-500 focus:border-orange-500 focus:text-orange-500"
            style={{ width: "80%" }}
          >
            Chỉnh sửa sản phẩm
          </Button>
          <Button
            type="default"
            htmlType="submit"
            className=" pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-red-700 hover:text-white hover:border-red-700 focus:border-red-700 focus:text-red-700"
            style={{ width: "80%" }}
          >
            Xóa sản phẩm
          </Button>
        </div>

      </Form>
    </div>
  );
}
