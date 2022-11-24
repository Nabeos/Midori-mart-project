import React, { useEffect } from "react";
import styles from "./UserDetail.module.css";
import { Button, Form, Input, Popconfirm } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux'
import {
  FaArrowLeft,
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
} from "react-icons/fa";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { USER } from "../../redux/type/user/UserType";
import { activateUserAction, deactivateUserAccountAction, getAllRoleInMidoriAction, uploadImageAction } from "../../redux/action/user/UserAction";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Item from "antd/lib/list/Item";


function UserDetail(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  // const user = useSelector(state => state.UserReducer.user);
  const textActivate = "Bạn có chắc chắn muốn kích hoạt lại tài khoản này ?";
  const textDeactivate = "Bạn có chắc chắn muốn vô hiệu hóa tài khoản này ?";
  let userDetailedInfoAdmin = JSON.parse(localStorage.getItem("userDetailedInfoAdmin"));
  console.log("USER DETAILED INFOR ADMIN", userDetailedInfoAdmin.id);
  console.log("GIÁ TRỊ UPDATE USER DETAILED FOR ADMIN: ", values);
  console.log("THỬ NGHIỆM: ", typeof (values.thumbnail) == typeof null);
  useEffect(() => {
    dispatch(getAllRoleInMidoriAction());
    window.scrollTo(0, 0);
  }, [])
  console.log("VALUES.THUMBNAIL: ", values.thumbnail);
  let roleList = useSelector(state => state.UserReducer.roleList);
  console.log("ROLE LIST IN USER DETAIL: ", roleList);
  // let countAdmin = 0;
  // let desiredIndexAdmin = 0;
  // for (let index = 0; index < userDetailedInfoAdmin.fullname.length; index++) {
  //   if (countAdmin == 0 && userDetailedInfoAdmin.fullname[index] == " ") {
  //     desiredIndexAdmin = index;
  //     countAdmin++;
  //   }
  // }

  // let lastNameUserDetailedAdmin = userDetailedInfoAdmin.fullname.slice(0, desiredIndexAdmin);
  // let firstNameUserDetailedAdmin = userDetailedInfoAdmin.fullname.slice(desiredIndexAdmin + 1, userDetailedInfoAdmin.fullname.length);
  // console.log("LAST NAME USER DETAILED ADMIN: ", lastNameUserDetailedAdmin);
  // console.log("FIRST NAME USER DETAILED ADMIN: ", firstNameUserDetailedAdmin);

  // localStorage.setItem("lastNameUserDetailedAdmin", lastNameUserDetailedAdmin);
  // localStorage.setItem("firstNameUserDetailedAdmin", firstNameUserDetailedAdmin);

  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN USER DETAIL MANAGEMENT FOR ADMIN: ", user?.roleId);
  // let userDetailedInfoForAdmin = useSelector(state => state.UserReducer.userDetailedInfoForAdmin);
  // console.log("userDetailedInfoForAdmin: ", userDetailedInfoForAdmin);
  const dispatch = useDispatch();
  const uploadImage = async (e) => {
    console.log("FILES: ", e.target.files);
    const files = e.target.files;
    console.log("FILE[0]: ", files[0]);
    const data = new FormData();
    data.append("files", files[0]);
    console.log("DATA FIRST: ", data);
    dispatch(uploadImageAction(data));
  }
  return (
    user?.roleId == 1 ?
      <div
        className="bg-gray-200 flex flex-col justify-center items-center"
        style={{ width: "100%" }}
      >
        <div
          className="bg-white rounded-md flex mt-3 justify-end"
          style={{
            width: "90%",
            boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          <HeaderManagement />
        </div>
        <div
          className="bg-white rounded-md mt-3 mb-5"
          style={{ width: "90%", boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)" }}
        >
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <Form className="" style={{ width: "90%" }} onSubmitCapture={handleSubmit}>
              <div className="text-2xl font-bold mt-3 mb-3">
                Thông tin người dùng
              </div>
              <div className="text-2xl font-bold mt-3 mb-3 flex flex-row">
                <img
                  name="thumbnail"
                  src={values.thumbnail ? values.thumbnail : "/images/user/anonymous_avatar.jpg"}
                  className="mr-5"
                  style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                />
                <div className="flex whitespace-nowrap items-end">
                  <label htmlFor="filePicker" className="bg-green-700 text-white p-2" style={{ fontSize: '15px' }}>
                    Upload ảnh
                  </label>
                  <input type="file" id="filePicker" style={{ visibility: "hidden" }} name="file" placeholder='Upload an image'
                    onChange={uploadImage} />
                </div>
              </div>
              <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="lastName"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Họ</span>
                  </label>
                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      onChange={e => {
                        props.setFieldTouched('lastName')
                        handleChange(e)
                      }}
                      value={values.lastName}
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Nhập họ tại đây"
                      style={{ width: "90%", height: "40px" }}
                    />
                  </Form.Item>
                  {errors.lastName && touched.lastName ? <div className='text-red-600'>{errors.lastName}</div> : <div></div>}
                </div>
                <div style={{ width: "100%" }}>
                  <label
                    for="firstName"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Tên</span>
                  </label>

                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      onChange={e => {
                        props.setFieldTouched('firstName')
                        handleChange(e)
                      }}
                      value={values.firstName}
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Nhập tên tại đây"
                      style={{ width: "100%", height: "40px" }}
                    />
                  </Form.Item>
                  {errors.firstName && touched.firstName ? <div className='text-red-600'>{errors.firstName}</div> : <div></div>}
                </div>
              </div>

              <div className="">
                <label
                  for="phoneNumber"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Số điện thoại</span>
                </label>
                <Form.Item className="mb-1">
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={e => {
                      props.setFieldTouched('phoneNumber')
                      handleChange(e)
                    }}
                    value={values.phoneNumber}
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Nhập số điện thoại tại đây"
                    style={{ width: "100%", height: "40px" }}
                  />
                </Form.Item>
                {errors.phoneNumber && touched.phoneNumber ? <div className='text-red-600'>{errors.phoneNumber}</div> : <div></div>}
              </div>

              <div className="">
                <label
                  for="email"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Email</span>
                </label>
                <Form.Item className="mb-1">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full outline-none hover:border-white p-2.5`}
                    placeholder="Nhập Email tại đây"
                    style={{ width: "100%", height: "40px" }}
                  />
                </Form.Item>
              </div>

              <div className="">
                <label
                  for="role"
                  className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Vai trò</span>
                </label>
                <Form.Item className="mb-1">
                  <select
                    name="role"
                    // value={values.role}
                    onChange={e => {
                      props.setFieldTouched('role')
                      handleChange(e)
                    }}
                    className="border rounded-md outline-none border-black text-base focus:border-green-900"
                    style={{ width: "100%", paddingLeft: '5px', height: "40px" }}
                  >
                    <option disabled>Chọn vai trò</option>
                    {roleList.map((item, index) => {
                      return <option key={index} selected={values.role == item.id ? true : false} value={item.id}>
                        {item.name}
                      </option>
                    })}

                  </select>
                </Form.Item>
              </div>

              {/* <div className="-mt-4">
                <label
                  for="password"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Mật khẩu</span>
                </label>
                <Form.Item name="password">
                  <Input
                    type="password"
                    id="password"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="•••••••••"
                    required=""
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div> */}
              {/* <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="join_date"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Ngày tham gia</span>
                  </label>
                  <Form.Item name="join_date">
                    <Input
                      type="text"
                      id="join_date"
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Ngày tham gia"
                      style={{ width: "100%", height: "3.6rem" }}
                    />
                  </Form.Item>
                </div>
              </div> */}
              <div className="text-2xl font-bold mt-3 mb-3">
                Thông tin địa chỉ
              </div>
              <div className="flex flex-row ">
                {/* <div style={{ width: "100%" }}>
                  <label
                    for="city"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Tỉnh/Thành phố</span>
                  </label>
                  <Form.Item name="city">
                    <Input
                      type="text"
                      id="city"
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Tỉnh/Thành phố"
                      style={{ width: "90%", height: "3.6rem" }}
                    />
                  </Form.Item>
                </div> */}
                {/* <div style={{ width: "100%" }}>
                  <label
                    for="district"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Quận/Huyện</span>
                  </label>

                  <Form.Item name="district">
                    <Input
                      type="text"
                      id="district"
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Quận/Huyện"
                      style={{ width: "100%", height: "3.6rem" }}
                    />
                  </Form.Item>
                </div> */}
              </div>
              <div className="flex flex-row ">
                {/* <div style={{ width: "100%" }}>
                  <label
                    for="ward"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Phường/Xã</span>
                  </label>
                  <Form.Item name="ward">
                    <Input
                      type="text"
                      id="ward"
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Phường/Xã"
                      style={{ width: "90%", height: "3.6rem" }}
                    />
                  </Form.Item>
                </div> */}
                <div style={{ width: "100%" }}>
                  <label
                    for="detailedAddress"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg font-semibold">Địa chỉ cụ thể</span>
                  </label>

                  <Form.Item className="mb-1">
                    <Input
                      type="text"
                      id="detailedAddress"
                      name="detailedAddress"
                      onChange={e => {
                        props.setFieldTouched('detailedAddress')
                        handleChange(e)
                      }}
                      value={values.detailedAddress}
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Địa chỉ cụ thể"
                      style={{ width: "100%", height: "40px" }}
                    />
                  </Form.Item>
                  {errors.detailedAddress && touched.detailedAddress ? <div className='text-red-600'>{errors.detailedAddress}</div> : <div></div>}
                </div>
              </div>

              {/* delete and update button section */}
              <div className="flex justify-end mb-2 mt-3" style={{ width: "100%" }}>
                {/* <Button
                  type="default"
                  htmlType="submit"
                  onSubmitCapture={handleSubmit}
                  className={`${styles.userdetail__border__button} font-semibold focus:border-green-700 flex justify-center items-center focus:text-green-700 mr-1`}
                  style={{ width: "95px", height: "45px" }}
                >
                  CẬP NHẬT
                </Button> */}

                {(userDetailedInfoAdmin.status == "Đang hoạt động") ? <Popconfirm placement="top"
                  onConfirm={() => { dispatch(deactivateUserAccountAction(userDetailedInfoAdmin.id)); }}
                  title={textDeactivate}
                  okText="Yes" cancelText="No">
                  <Button
                    type="default"
                    htmlType="submit"
                    className={`${styles.userdetail__delete__button} font-semibold focus:border-red-400 flex justify-center items-center focus:text-red-400`}
                    style={{ width: "180px", height: "45px" }}
                  >
                    TẠM DỪNG TÀI KHOẢN
                  </Button>
                </Popconfirm> : <Popconfirm placement="top"
                  onConfirm={() => { dispatch(activateUserAction(userDetailedInfoAdmin.id)) }}
                  title={textActivate}
                  okText="Yes" cancelText="No">
                  <Button
                    type="default"
                    htmlType="submit"
                    className={`${styles.userdetail__border__button}  font-semibold focus:border-green-700 flex justify-center items-center focus:text-green-700 ml-1`}
                    style={{ width: "180px", height: "45px" }}
                  >
                    KÍCH HOẠT TÀI KHOẢN
                  </Button>
                </Popconfirm>}
              </div>
              <div className="flex justify-end flex-row mb-2">
                <NavLink
                  to={"/usermanagement"}
                  className="flex flex-row mt-2 text-black no-underline text-lg"
                >
                  <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                  <span className="hover:text-green-800">Quay lại</span>
                </NavLink>
              </div>
            </Form>
          </div>
        </div>
      </div> : <Redirect to="/" />
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const UserDetailWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    thumbnail: props.userDetailedInfoForAdmin.thumbnail,
    lastName: props.lastName,
    firstName: props.firstName,
    phoneNumber: props.userDetailedInfoForAdmin.phonenumber,
    email: props.userDetailedInfoForAdmin.email,
    role: props.userDetailedInfoForAdmin.roleId,
    detailedAddress: props?.userDetailedInfoForAdmin?.address?.addressDetail
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    lastName: Yup.string()
      .required("Không được để trống mục họ !!!")
      .matches(regexAllLetter, "Mục họ chỉ được phép chứa chữ !!!"),
    firstName: Yup.string()
      .required("Không được để trống mục tên !!!")
      .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
    phoneNumber: Yup.string()
      .required("Không được để trống mục số điện thoại !!!")
      .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
    email: Yup.string()
      .required("Không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    // role: Yup.string()
    //   .required("Không được để trống vai trò !!!"),
    detailedAddress: Yup.string()
      .required("Không được để trống địa chỉ chi tiết !!!")

  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    console.log("VALUE FORM: ", values);
    alert("CÓ VÀO UPDATE USER DETAILED FOR ADMIN");
    let data = {
      "user": {
        "fullname": values.lastName + " " + values.firstName,
        "email": values.email,
        // "role": values.role,
        "role": values.role,
        "phonenumber": values.phoneNumber,
        "detailedAddress": values.detailedAddress
      }
    }
    console.log("USER DETAIL DATA: ", data);
    // props.dispatch({
    //   type: ADD_NEW_USER_DEMO,
    //   newUserDemoAction: data
    // })
    // props.dispatch(addNewUserForAdminAction(data));
  },

  displayName: 'UserDetailWithFormik'
})(UserDetail);

const mapStateToProps = (state) => {
  return {
    userDetailedInfoForAdmin: JSON.parse(localStorage.getItem("userDetailedInfoAdmin")),
    lastName: localStorage.getItem("lastNameUserDetailedAdmin"),
    firstName: localStorage.getItem("firstNameUserDetailedAdmin")
  }
}

export default connect(mapStateToProps, null)(UserDetailWithFormik);