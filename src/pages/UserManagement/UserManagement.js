import React, { Fragment, useEffect, useState } from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./UserManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import AddNewUser from "./AddNewUser";
import { getAllUserListForAdminAction } from "../../redux/action/user/UserAction";
import { Redirect } from 'react-router-dom';
import { CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP, GET_USER_DETAILED_INFORMATION_FOR_ADMIN, SHOW_ADD_NEW_USER_FOR_ADMIN_POPUP, USER } from "../../redux/type/user/UserType";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";



export default function UserManagement(props) {
  // const {
  //   values,
  //   touched,
  //   errors,
  //   handleChange,
  //   handleBlur,
  //   handleSubmit,
  // } = props;
  // const user = useSelector(state => state.UserReducer.user);
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN USER MANAGEMENT FOR ADMIN: ", user?.roleId);
  const userListDemo = useSelector(state => state.UserReducer.userListDemo);
  console.log("USER LIST DEMO: ", userListDemo);
  // avatar hover
  const content = (
    <div>
      <p>Homepage</p>
      <p>Log out</p>
    </div>
  );
  const dispatch = useDispatch();
  // popup
  const openAddNewUserForAdminPopup = useSelector(state => state.UserReducer.openAddNewUserForAdminPopup);
  const showModal = () => {
    dispatch({
      type: SHOW_ADD_NEW_USER_FOR_ADMIN_POPUP
    });
  };
  const handleCancel = () => {
    dispatch({
      type: CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP
    })
  };

  useEffect(() => {
    dispatch(getAllUserListForAdminAction());
  }, [])

  const userListForAdmin = useSelector(state => state.UserReducer.userListForAdmin);
  console.log("USER LIST FOR ADMIN: ", userListForAdmin);

  return (
    user?.roleId == 1 ?
      <div className="bg-gray-200 grid grid-cols-12" style={{ height: "100%" }}>
        <div className="col-span-2">
          <SidebarAdmin />
        </div>
        <div className="col-span-10" style={{ height: "100%" }}>
          <div className="flex items-center flex-col">
            {/* header */}
            <div
              className="bg-white rounded-md flex mt-3"
              style={{
                width: "99%",
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              <HeaderManagement />
            </div>
            <div
              className="bg-white rounded-md mt-3"
              style={{
                width: "99%",
                height: "500%",
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="rounded-md mt-3 flex justify-end mr-3">
                <Form>
                  <InputGroup className={` `} >
                    <FormControl
                      name="header__search"
                      className={` form-control shadow-none outline-none `}
                      placeholder="Tìm kiếm người dùng"
                      style={{ width: '300px' }}
                    />
                    <InputGroup.Text className="text-white">
                      <SearchOutlined className="cursor-pointer" />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </div>
              <hr className="border border-gray-400" />
              {/* popup add more users */}
              <div className="mt-3 ml-2" style={{ width: "" }}>
                <Button
                  type=""
                  className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                  onClick={showModal}
                >
                  + Thêm người dùng
                </Button>
                <Modal
                  open={openAddNewUserForAdminPopup}
                  title="Thêm người dùng mới"
                  onCancel={handleCancel}
                  footer={[]}
                  width={800}
                >
                  <AddNewUser />
                  {/* <Form onSubmitCapture={handleSubmit}>
                  <div className="flex flex-row">
                    <div style={{ width: "100%" }}>
                      <label
                        for="lastName"
                        className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                      >
                        <span className="text-lg">Họ</span>
                      </label>
                      <Form.Item className="mb-0"
                      >
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          onChange={e => {
                            props.setFieldTouched('lastName')
                            handleChange(e)
                          }}
                          className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700`}
                          placeholder="Họ"
                          style={{ width: "90%", height: "5vh" }}
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

                      <Form.Item className="mb-0"
                      >
                        <Input
                          type="text"
                          id="firstName"
                          name="firstName"
                          onChange={e => {
                            props.setFieldTouched('firstName')
                            handleChange(e)
                          }}
                          className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                          placeholder="Tên"
                          style={{ width: "100%", height: "5vh" }}
                        />
                      </Form.Item>
                      {errors.firstName && touched.firstName ? <div className='text-red-600'>{errors.firstName}</div> : <div></div>}
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      for="phoneNumber"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Số điện thoại</span>
                    </label>
                    <Form.Item className="mb-0"
                    >
                      <Input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        onChange={e => {
                          props.setFieldTouched('phoneNumber')
                          handleChange(e)
                        }}
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="Nhập số điện thoại tại đây"
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                    {errors.phoneNumber && touched.phoneNumber ? <div className='text-red-600'>{errors.phoneNumber}</div> : <div></div>}
                  </div>

                  <div className="mt-2">
                    <label
                      for="email"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Email</span>
                    </label>
                    <Form.Item className="mb-0"
                    >
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        onChange={e => {
                          props.setFieldTouched('email')
                          handleChange(e)
                        }}
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="Nhập email tại đây"
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                    {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : <div></div>}
                  </div>
                  <div className="mt-2">
                    <label
                      for="role"
                      className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Vai trò</span>
                    </label>
                    <Form.Item className="mb-0">
                      <select
                        name="role"
                        id="role"
                        className="border border-black pt-3 pb-3 text-base focus:border-green-900"
                        style={{ width: "100%" }}
                      >
                        <option>Chọn vai trò</option>
                        <option>Quản lí của hàng</option>
                        <option>Shipper</option>
                      </select>
                    </Form.Item>
                  </div>
                  <div className="mt-2">
                    <label
                      for="password"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Mật khẩu</span>
                    </label>
                    <Form.Item className="mb-0"
                    >
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        onChange={e => {
                          props.setFieldTouched('password')
                          handleChange(e)
                        }}
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="Nhập mật khẩu tại đây"
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                    {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : <div></div>}
                  </div>
                  <div className="mt-2">
                    <label
                      for="confirmPassword"
                      className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Nhập lại mật khẩu</span>
                    </label>
                    <Form.Item className="mb-0"
                    >
                      <Input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={e => {
                          props.setFieldTouched('confirmPassword')
                          handleChange(e)
                        }}
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="Nhập lại mật khẩu tại đây"
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                    {(errors.confirmPassword && touched.confirmPassword) || (values.confirmPassword != values.password && touched.confirmPassword) ? <div className='text-red-600'>Mật khẩu xác nhận quý khách vừa nhập không đúng. Quý khách vui lòng nhập lại !!!</div> : <div></div>}
                  </div>

                  <Button
                    type="default"
                    htmlType="submit"
                    onSubmitCapture={handleSubmit}
                    className={`${styles.register__border__button} mt-3 pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700`}
                    style={{ width: "100%" }}
                  >
                    Thêm người dùng mới
                  </Button>
                </Form> */}

                </Modal >
              </div >



              {/* </div > */}
              {/* table for Authorization Management */}
              <div className="flex justify-center" >
                <table
                  className={`${styles.usermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                  style={{ width: "90%", minHeight: "780px" }}
                >
                  <thead>
                    <tr>
                      <th className="border border-slate-300 p-4 text-lg text-center">
                        {" "}
                        STT
                      </th>
                      <th className="border border-slate-300 p-4 text-lg text-center" style={{ width: '140px' }}>
                        {" "}
                        Họ và tên
                      </th>
                      <th className="border border-slate-300 p-4 text-center" style={{ width: '100px' }}>
                        Email
                      </th>
                      <th className="border border-slate-300 p-4 text-center" style={{ width: '120px' }}>
                        Số điện thoại
                      </th>
                      <th className="border border-slate-300 p-4 text-center" style={{ width: '140px' }}>
                        Vai trò
                      </th>
                      <th className="border border-slate-300 p-4 text-center">
                        Trạng thái
                      </th>
                      <th className="border border-slate-300 p-4 text-center">
                        Xem chi tiết
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userListForAdmin.map((item, index) => {
                      console.log("ITEM USER MNGT: ", item);
                      return <tr>
                        <td className="border border-slate-300 text-center p-2">{index + 1}</td>
                        <td className="border border-slate-300 text-center p-2">
                          <span className="p-2">{item.fullname}</span>
                        </td>
                        <td className="border border-slate-300 text-center p-2">
                          <span className="p-2">{item.email}</span>
                        </td>
                        <td className="border border-slate-300 text-center p-2">
                          {item.phonenumber}
                        </td>
                        <td className="border border-slate-300 text-center p-2">
                          <span className="">{item.roleId == 1 ? "Quản trị viên" : ""}</span>
                          <span className="">{item.roleId == 2 ? "Khách hàng có tài khoản" : ""}</span>
                          <span className="">{item.roleId == 4 ? "Quản lý cửa hàng" : ""}</span>
                        </td>
                        <td className="border border-slate-300 text-center p-2">
                          {item.status == "Đang hoạt động" ? <span className="p-2 rounded-md bg-green-600 text-white">{item.status}</span> : <Fragment></Fragment>}
                          {item.status == "Ngừng hoạt động" ? <span className="p-2 rounded-md bg-red-600 text-white">{item.status}</span> : <Fragment></Fragment>}

                        </td>

                        <td className="border border-slate-300 text-center">
                          <NavLink
                            to={`/userdetail/${item.email}`}
                            className="flex justify-center text-green-700"
                            onClick={() => {
                              localStorage.setItem("userDetailedInfoAdmin", JSON.stringify(item));
                              dispatch({
                                type: GET_USER_DETAILED_INFORMATION_FOR_ADMIN,
                                userDetailedInfoForAdminAction: item
                              })
                            }}
                          >
                            <FaEye />
                          </NavLink>
                        </td>
                      </tr>
                    })}


                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mb-4" style={{ width: "90%" }}>
                <Pagination
                  className="hover:text-green-800 focus:border-green-800"
                  defaultCurrent={1}
                  total={50}
                />
              </div>
            </div >
          </div >
        </div >
      </div > : <Redirect to="/" />
  );
}
// const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
// const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
// const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

// const UserManagementWithFormik = withFormik({
//   enableReinitialize: true,
//   mapPropsToValues: (props) => ({
//     lastName: "",
//     firstName: "",
//     phoneNumber: "",
//     email: "",
//     role: "",
//     password: "",
//     confirmPassword: ""
//   }),

//   // Custom sync validation
//   validationSchema: Yup.object().shape({
//     lastName: Yup.string()
//       .required("Không được để trống mục họ !!!")
//       .matches(regexAllLetter, "Mục họ chỉ được phép chứa chữ !!!"),
//     firstName: Yup.string()
//       .required("Không được để trống mục tên !!!")
//       .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
//     phoneNumber: Yup.string()
//       .required("Không được để trống mục số điện thoại !!!")
//       .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
//     email: Yup.string()
//       .required("Không được để trống mục email !!!")
//       .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
//     role: Yup.string()
//       .required("Không được để trống vai trò !!!"),
//     password: Yup.string()
//       .min(6, 'Độ dài mật khẩu tối thiếu là 6 ký tự !!!')
//       .max(32, 'Độ dài mật khẩu tối đa là 32 ký tự !!!')
//       .required("Không được để trống mục mật khẩu !!!")
//       .matches(regexPassword, 'Mật khẩu phải có độ dài tối thiếu 6 ký tự và tối đa 32 ký tự, phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !!!'),
//     confirmPassword: Yup.string()
//       .required("Không được để trống mục nhập lại mật khẩu !!!")
//   }),


//   handleSubmit: (values, { props, setSubmitting }) => {
//     console.log("CÓ VÀO HANDLE SUBMIT");
//     console.log("VALUE FORM: ", values);
//     let data = {
//       "user": {
//         "fullname": values.lastName + " " + values.firstName,
//         "email": values.email,
//         "phonenumber": values.phoneNumber,
//         "password": values.password
//       }
//     }
//     console.log("REGISTER DATA: ", data);
//   },

//   displayName: 'UserManagementWithFormik'
// })(UserManagement);

// const mapStateToProps = (state) => {
//   return {
//   }
// }

// export default connect(mapStateToProps, null)(UserManagementWithFormik);