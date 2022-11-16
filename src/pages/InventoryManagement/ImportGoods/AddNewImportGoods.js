import React from 'react'
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
export default function AddNewImportGoods() {
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
            <div>
            <div className="text-lg font-semibold">Ảnh sản phẩm</div>
                  <div className="text-2xl font-bold mb-3 flex flex-row">
                    <img
                      src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-kg-thit-dui-heo-meatdeli-(s)-og.jpg"
                      className="mr-2"
                      style={{ width: "30%" }}
                    />
                    <div className="flex items-end mb-3 -ml-3">
                      <Upload {...props}>
                        <Button className="focus:bg-white focus:text-black focus:border-gray-200 hover:bg-green-700 no-shadow hover:text-white hover:border-green-700">
                          Tải ảnh lên
                        </Button>
                      </Upload>
                    </div>
                  </div>
                </div>
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
                        className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        placeholder="Tên sản phẩm"
                        style={{ width: "90%", height: "3.6rem" }}
                      />
                    </Form.Item>
                  </div>
                  <div style={{ width: "100%" }}>
                    <label
                      for="sku_code"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Mã SKU</span>
                    </label>
    
                    <Form.Item name="sku_code">
                      <Input
                        type="number"
                        id="sku_code"
                        className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        style={{ width: "100%", height: "3.6rem" }}
                      />
                    </Form.Item>
                  </div>
                </div>
    
                <div className="flex flex-row ">
                  <div style={{ width: "100%" }}>
                    <label
                      for="weight_unit"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Đơn vị tính</span>
                    </label>
                    <Form.Item name="weight_unit">
                      <select
                        className="border border-black text-lg rounded-md"
                        id="weight_unit"
                        style={{ width: "90%", height: "3.6rem" }}
                      >
                        <option>Đơn vị tính</option>
                        <option id="gram">G</option>
                        <option id="kilogram">KG</option>
                        <option id="bottle">Chai</option>
                      </select>
                    </Form.Item>
                  </div>
                  <div style={{ width: "100%" }}>
                    <label
                      for="weight_package"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Quy cách đóng gói</span>
                    </label>
    
                    <Form.Item name="weight_package">
                      <Input
                        type="number"
                        id="weight_package"
                        className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        placeholder="Quy cách đóng gói"
                        style={{ width: "100%", height: "3.6rem" }}
                      />
                    </Form.Item>
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
                    <Form.Item name="price">
                      <Input
                        type="number"
                        id="price"
                        className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        placeholder="Giá tiền"
                        style={{ width: "90%", height: "3.6rem" }}
                      />
                    </Form.Item>
                  </div>
                  <div style={{ width: "100%" }}>
                    <label
                      for="product_discount"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Khuyến mãi</span>
                    </label>
    
                    <Form.Item name="product_discount">
                      <select
                        className='border border-black text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        id="product_discount"
                        style={{ width: "100%", height: "3.6rem" }}
                      >
                        <option>Khuyến mãi</option>
                        <option id="">5%</option>
                        <option id="kilogram">10%</option>
                        <option id="bottle">15%</option>
                      </select>
                    </Form.Item>
                  </div>
                </div>
    
                <div className="flex flex-row ">
                  <div style={{ width: "100%" }}>
                    <label
                      for="quantity_status"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Trạng thái trong kho</span>
                    </label>
                    <Form.Item name="quantity_status">
                      <select
                        className="border border-black text-lg rounded-md"
                        id="quantity_status"
                        style={{ width: "90%", height: "3.6rem" }}
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
    
                    <Form.Item name="quantity_in_stock">
                      <Input
                        type="number"
                        id="quantity_in_stock"
                        className=' text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5'
                        placeholder="Số lượng hàng trong kho"
                        style={{ width: "100%", height: "3.6rem" }}
                      />
                    </Form.Item>
                  </div>
                </div>
    
                <div className="flex flex-row ">
                  <div style={{ width: "100%" }}>
                    <label
                      for="product_origin"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg font-semibold">Xuất sứ</span>
                    </label>
                    <Form.Item name="product_origin">
                      <select
                        className="border border-black text-lg rounded-md"
                        id="product_origin"
                        style={{ width: "90%", height: "3.6rem" }}
                      >
                        <option className="text-opacity-10">Xuất sứ</option>
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
                </div>
    
                <div className="flex flex-row ">
                  <div style={{ width: "100%" }}>
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
                        style={{ width: "100%", height: "3.6rem" }}
                      />
                    </Form.Item>
                  </div>
                </div>
    
                <div className="mb-3">
                  <label
                    for="product_description"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Mô tả sản phẩm</span>
                  </label>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    config={{
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
                      console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                      console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log("Focus.", editor);
                    }}
                  />
                </div>
    
            <Button
              type="default"
              htmlType="submit"
              className=" pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700"
              style={{ width: "100%" }}
            >
              Thêm vào phiếu nhập kho
            </Button>
          </Form>
        </div>
      );
}
