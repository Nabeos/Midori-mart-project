import React, { useEffect } from "react";
import styles from "./UserDetailInformation.module.css";
import { Button, Form, Input, message, Upload } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { getUserProfileInformationAction, updateUserProfileInformationAction } from "../../redux/action/user/UserAction";
import { history } from "../../App";
import { getAllDistrictsByProvinceIdAction, getAllProvincesAction, getAllWardsByDistrictIdAction } from "../../redux/action/address/AddressAction";
import { USER } from "../../redux/type/user/UserType";

function UserDetailInformation(props) {
  const {
    values,
    setFieldValue,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  console.log("VALUES USER PROFILE: ", values);
  console.log("USER ID 11:09: ", values.userLocalStorageInfo.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileInformationAction());
    dispatch(getAllProvincesAction());
  }, [])
  // const userLocalStorageInfo = JSON.parse(localStorage.getItem(USER));
  // console.log("userLocalStorageInfo: ", userLocalStorageInfo);
  const provinces = useSelector(state => state.AddressReducer.provinces);
  const districts = useSelector(state => state.AddressReducer.districts);
  const wards = useSelector(state => state.AddressReducer.wards);
  console.log("WARDS USER DETAIL: ", wards);

  const userProfileInfo = useSelector(state => state.UserReducer.userProfileInfo);
  console.log("USER PROFILE INFO: ", userProfileInfo);
  // console.log("ADDRESS DETAIL: ", userProfileInfo.address[3]);
  const props1 = {
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
    <div className="flex justify-center">
      <form style={{ width: "80%" }} onSubmit={handleSubmit}>
        <div className="text-xl font-bold mt-3 mb-3">Thông tin người dùng</div>
        <div className="text-2xl font-bold mt-3 mb-3 flex flex-row">
          <img
            name="thumbnail"
            src={values.thumbnail}
            className="mr-5"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
          <div className="flex items-end mb-3 -ml-3">
            <Upload {...props1}>
              <Button className="focus:bg-white focus:text-black focus:border-gray-200 hover:bg-green-700 no-shadow hover:text-white hover:border-green-700">
                Tải ảnh lên
              </Button>
            </Upload>
          </div>
        </div>
        <div className="flex flex-row ">
          <div style={{ width: "100%" }} className="mr-2">
            <label
              for="lastName"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg ">Họ</span>
            </label>
            <div>
              <input type="text"
                onChange={handleChange}
                value={values.lastName}
                id="lastName"
                name="lastName"
                className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="Họ" />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="firstName"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Tên</span>
            </label>
            <div>
              <input type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900`}
                placeholder="Tên" />
            </div>
          </div>
        </div>

        <div className="my-2">
          <label
            for="phoneNumber"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Số điện thoại</span>
          </label>
          <div>
            <input type="text"
              value={values.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              className={`${styles.userdetailInformation__border__hover} form-control text-gray-900 text-base rounded-lg shadow-none focus:border-green-900`}
              placeholder="Quý khách nhập số điện thoại tại đây"
              onChange={handleChange} />
          </div>

        </div>

        <div className="">
          <label
            for="email"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Email</span>
          </label>
          <div>
            <input type="text"
              value={values.email}
              disabled
              id="email"
              name="email"
              className={`${styles.userdetailInformation__border__hover} text-gray-900 text-base form-control rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Quý khách nhập email tại đây"
              onChange={handleChange} />
          </div>
        </div>
        <div className="text-2xl font-bold mt-3 mb-3">Thông tin địa chỉ</div>
        <div className="flex flex-row ">
          <div style={{ width: "100%" }} className="mr-2 mb-2">
            <label
              for="provinces"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Tỉnh/Thành phố</span>
            </label>
            <div>
              <select className="pl-1 text-base form-select shadow-none"
                onChange={(e) => {
                  dispatch(getAllDistrictsByProvinceIdAction(e.target.value))
                  console.log("E.TARGET.VALUE DISTRICT: ", e.target.value);
                  setFieldValue("provinces", e.target.value)
                }}
                name="provinces"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option selected disabled>Chọn tỉnh/thành phố</option>
                {provinces.map((item, index) => {
                  return <option key={index} value={item.id}>{item.name}</option>
                })}

              </select>
            </div>

          </div>
          <div style={{ width: "100%" }} className="mb-2">
            <label
              for="districts"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Quận/Huyện</span>
            </label>
            <div>
              <select
                name="districts"
                onChange={(e) => {
                  dispatch(getAllWardsByDistrictIdAction(e.target.value))
                  setFieldValue("districts", e.target.value)
                }} className="pl-1 text-base form-select shadow-none"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option disabled>Chọn quận/huyện</option>
                {districts.map((item, index) => {
                  return <option key={index} value={item.id}>{item.name}</option>
                })}
              </select>
            </div>

          </div>
        </div>
        <div className="flex flex-row">
          <div style={{ width: "100%" }} className="mr-2">
            <label
              for="wards"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Phường/Xã</span>
            </label>
            <div>
              <select
                name="wards"
                onChange={handleChange}
                className="pl-1 text-base form-select shadow-none" style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option disabled>Chọn phường/xã</option>
                {wards.map((item, index) => {
                  return <option value={item.id} key={index}>{item.name}</option>
                })}
              </select>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="detailAddress"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Địa chỉ cụ thể</span>
            </label>
            <div>
              <input type="text"
                value={values.detailAddress}
                id="detailAddress"
                name="detailAddress"
                className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="Địa chỉ cụ thể"
                onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* delete and update button section */}
        <div className="flex justify-end mb-4 mt-3" style={{ width: "100%" }}>
          <button
            type="submit"
            onSubmit={handleSubmit}
            className={`${styles.userdetailInformation__border__button} bg-green-800 text-white flex justify-center items-center p-2 font-semibold text-base focus:border-green-900 focus:text-green-900`}
          >
            CẬP NHẬT
          </button>
        </div>
      </form >
    </div >
  );
}

const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const UserDetailInformationWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    userLocalStorageInfo: JSON.parse(localStorage.getItem(USER)).id,
    thumbnail: props?.userProfileInfo?.thumbnail,
    lastName: props?.userProfileInfo?.lastName,
    firstName: props?.userProfileInfo?.firstName,
    phoneNumber: props?.userProfileInfo?.phonenumber,
    email: props?.userProfileInfo?.email,
    provinces: "",
    districts: "",
    wards: "",
    detailAddress: ""
    // detailAddress: props.userProfileInfo?.address[3]
    // provinces: props?.userProfileInfo?.address[0],
    // districts: props?.userProfileInfo?.address[1],
    // wards: props?.userProfileInfo?.address[2],
    // detailAddress: props.userProfileInfo?.address[3]
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    lastName: Yup.string()
      .required("Quý khách không được để trống mục họ !!!")
      .matches(regexAllLetter, "Mục họ chỉ được phép chứa chữ !!!"),
    firstName: Yup.string()
      .required("Quý khách không được để trống mục tên !!!")
      .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
    phoneNumber: Yup.string()
      .required("Quý khách không được để trống mục số điện thoại !!!")
      .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
    email: Yup.string()
      .required("Quý khách không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    detailAddress: Yup.string()
      .required("Quý khách không được để trống địa chỉ đầy đủ !!!")

  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT USER DETAIL");
    console.log("PROVINCES:: ", values.provinces);
    console.log("DISTRICTS: ", values.districts);
    console.log("WARDS: ", values.wards);
    // console.log("VALUE FORM: ", values);
    // console.log("PHONE NUMBER HANDLE SUBMIT: ", values.phoneNumber);
    // history.push("/");
    // let userInfo = {
    //   "user": {
    //     "email": values.email,
    //     "fullname": values.lastName + " " + values.firstName,
    //     "phoneNumber": values.phoneNumber,
    //     "thumbnail": values.thumbnail,
    //     "address": [
    //       "string"
    //     ]
    //   }
    // }
    // props.dispatch(updateUserProfileInformationAction(values.userLocalStorageInfo, userInfo));
  },

  displayName: 'UserDetailInformationWithFormik'
})(UserDetailInformation);

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state?.UserReducer?.userProfileInfo,
    provinces: state.AddressReducer.provinces,
    districts: state.AddressReducer.districts,
    wards: state.AddressReducer.wards
  }
}

export default connect(mapStateToProps, null)(UserDetailInformationWithFormik);
