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
import { getAllUserListForAdminAction, getAllUserListLengthForAdminAction, searchUserForAdminAction, searchUserLengthForAdminAction } from "../../redux/action/user/UserAction";
import { Redirect } from 'react-router-dom';
import { CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP, GET_USER_DETAILED_INFORMATION_FOR_ADMIN, SHOW_ADD_NEW_USER_FOR_ADMIN_POPUP, USER } from "../../redux/type/user/UserType";
import InputGroup from "react-bootstrap/InputGroup";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import { useStateCallback } from "use-state-callback";


function UserManagement(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  console.log("values.header__search", values.header__search == "");
  // const user = useSelector(state => state.UserReducer.user);
  let user = JSON.parse(localStorage.getItem(USER));
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
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
    dispatch(getAllUserListForAdminAction(0, 10));
    dispatch(getAllUserListLengthForAdminAction(0, 1000));
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    dispatch(getAllUserListForAdminAction(0, 10));
    dispatch(getAllUserListLengthForAdminAction(0, 1000));
    window.scrollTo(0, 0);
  }, [openAddNewUserForAdminPopup])

  const userListForAdmin = useSelector(state => state.UserReducer.userListForAdmin);
  console.log("USER LIST FOR ADMIN: ", userListForAdmin);
  const userListLengthForAdmin = useSelector(state => state.UserReducer.userListLengthForAdmin);
  console.log("USER LENGTH: ", userListLengthForAdmin);
  const searchUserListLengthForAdmin = useSelector(state => state.UserReducer.searchUserListLengthForAdmin);
  console.log("searchUserListLengthForAdmin: ", searchUserListLengthForAdmin.length);

  const onShowSizeChangeCustom = (current, pageSize) => {
    console.log("CÓ VÀO ON SHOW SIZE CHANGE");
    console.log("CURRENT onShowSizeChangeCustom: ", current);
    console.log("pageSize onShowSizeChangeCustom: ", pageSize);
    if (current == 0) {
      current = 1;
      setCurrentCustom(1);
    }
  };
  const handlePaginationChange = (page, pageSize) => {
    console.log("CÓ VÀO HANDLE PAGINATION CHANGE");
    console.log("PAGE handlePaginationChange: ", page);
    console.log("PAGE SIZE handlePaginationChange: ", pageSize);
    setCurrentCustom(page);
    if (values.header__search == "") {
      dispatch(getAllUserListForAdminAction((page - 1) * 10, 10));
    } else if (values.header__search != "") {
      props.dispatch(searchUserForAdminAction(values.header__search, (page - 1) * 10, 10));
    }

  }

  return (
    user?.roleId == 1 ?
      <div className="bg-gray-200 grid grid-cols-12" style={{ height: "1220px" }}>
        <div className="col-span-2">
          <SidebarAdmin />
        </div>
        <div className="col-span-10" style={{ height: "1000px" }}>
          <div className="flex items-center flex-col">
            {/* header */}
            <div
              className="bg-white rounded-md flex mt-3 justify-end"
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
                <Form onSubmitCapture={handleSubmit}>
                  <InputGroup className={` `} >
                    <FormControl
                      name="header__search"
                      className={` form-control shadow-none outline-none `}
                      onChange={(e) => {
                        if (e.target.value == "") {
                          setCurrentCustom(1);
                        }
                        handleChange(e);
                        dispatch(searchUserForAdminAction(e.target.value, 0, 10));
                        props.dispatch(searchUserLengthForAdminAction(values.header__search, 0, 1000));
                      }}
                      placeholder="Tìm kiếm người dùng"
                      style={{ width: '300px' }}
                    />
                    <InputGroup.Text className="text-white">
                      <SearchOutlined onClick={handleSubmit} className="cursor-pointer" />
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
                {openAddNewUserForAdminPopup && <Modal
                  open={openAddNewUserForAdminPopup}
                  title="Thêm người dùng mới"
                  onCancel={handleCancel}
                  footer={[]}
                  width={800}
                >
                  <AddNewUser />
                </Modal >}
              </div >



              {/* </div > */}
              {/* table for Authorization Management */}
              <div className="flex justify-center" style={{ minHeight: "440px" }}>
                <table
                  className={`${styles.usermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                  style={{ width: "90%", minHeight: userListForAdmin.length < 7 ? "400px" : "780px" }}
                >
                  <thead>
                    <tr>
                      <th className="border border-slate-300 p-4 text-lg text-center">
                        {" "}
                        Id
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
                        <td className="border border-slate-300 text-center p-2">{item.id}</td>
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
              <div className="flex justify-center mb-4">
                <Pagination
                  className="hover:text-green-800 focus:border-green-800"
                  current={currentCustom}
                  defaultCurrent={1}
                  pageSize={10}
                  // pageSizeOptions={3}
                  onChange={(page) => { handlePaginationChange(page) }}
                  // showSizeChanger
                  onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
                  total={values.header__search == "" ? userListLengthForAdmin.length : searchUserListLengthForAdmin.length}
                />
              </div>
            </div >
          </div >
        </div >
      </div > : <Redirect to="/" />
  );
}
const UserManagementWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    header__search: ""
  }),

  validationSchema: Yup.object().shape({

  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT IN HEADER");
    console.log("VALUE FORM: ", values);
    props.dispatch(searchUserForAdminAction(values.header__search, 0, 10));
    props.dispatch(searchUserLengthForAdminAction(values.header__search, 0, 1000));
  },

  displayName: 'UserManagementWithFormik'
})(UserManagement);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(UserManagementWithFormik);