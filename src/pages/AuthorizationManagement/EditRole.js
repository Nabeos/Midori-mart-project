import React from 'react'
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
export default function EditRole() {
    return (
        <div>
            <Form>
                <div className="-mt-4">
                    <label
                        for="page_name"
                        className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                        <span className="text-lg font-semibold">Tên trang</span>
                    </label>
                    <Form.Item
                        name="page_name"
                        rules={[
                            {
                                required: true,
                                message: "Hãy nhập tên trang!",
                            },
                        ]}
                    >
                        <Input
                            type="page_name"
                            id="page_name"
                            className=" hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5"
                            placeholder="Tên trang"
                            required=""
                            style={{ width: "100%", height: "5vh" }}
                        />
                    </Form.Item>
                </div>
                <div className="-mt-2">
                    <label
                        for="page_backlink"
                        className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                        <span className="text-lg font-semibold">Đường dẫn đến trang</span>
                    </label>
                    <Form.Item
                        name="page_backlink"
                        rules={[
                            {
                                required: true,
                                message: "Hãy nhập đường dẫn của trang!",
                            },
                        ]}
                    >
                        <Input
                            type="page_backlink"
                            id="page_backlink"
                            className={`hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                            placeholder="Đường dẫn trang"
                            required=""
                            style={{ width: "100%", height: "5vh" }}
                        />
                    </Form.Item>
                </div>

                <Button
                    type="default"
                    htmlType="submit"
                    className={`pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700`}
                    style={{ width: "100%" }}
                >
                    Thêm trang mới
                </Button>
            </Form>
        </div>
    )
}
