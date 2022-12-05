import React, { useEffect, useRef } from "react";
import styles from "./UserDetailInformation.module.css";
import { Button, Form, Input, message, Upload } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { getUserProfileInformationAction, updateUserProfileInformationAction, uploadImageAction } from "../../redux/action/user/UserAction";
import { history } from "../../App";
import { getAllDistrictsByProvinceIdAction, getAllDistrictsDefaultByProvinceIdAction, getAllProvincesAction, getAllProvincesDesiredAction, getAllWardsByDistrictIdAction, getAllWardsDefaultByDistrictIdAction } from "../../redux/action/address/AddressAction";
import { USER } from "../../redux/type/user/UserType";
import { Redirect } from 'react-router-dom';

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
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const userProfileInfo = useSelector(state => state.UserReducer.userProfileInfo);
  let provinceId = useSelector(state => state.AddressReducer.provinceId);
  console.log("PROVINCE ID LẤY TỪ USER PROFILE: ", provinceId);
  let districtId = useSelector(state => state.AddressReducer.districtId);
  let wardId = useSelector(state => state.AddressReducer.wardId);
  const provinces = useSelector(state => state.AddressReducer.provinces);
  const districts = useSelector(state => state.AddressReducer.districts);
  const wards = useSelector(state => state.AddressReducer.wards);
  const dispatch = useDispatch();
  const uploadAvatar = useSelector(state => state.UserReducer.uploadAvatar);
  console.log("UPLOAD AVATAR: ", uploadAvatar);

  // console.log("USERPROFILE.ADDRESS: ", userProfileInfo.address);

  console.log("VALUES.PROVINCE: ", values.provinces);
  console.log("VALUES.DISTRICTS: ", values.districts);
  console.log("DISTRICTS LIST: ", districts);
  console.log("USER PROFILE.ADDRESS: ", userProfileInfo?.address);
  console.log("DISTRICT USER PROFILE: ", userProfileInfo?.address?.districtId);
  console.log("VALUES.WARDS: ", values.wards);
  console.log("WARD ID STATE: ", wardId);
  console.log("DISTRICT ID STATE: ", districtId);
  console.log("VALUES USER PROFILE: ", values);
  console.log("USER PROFILE INFO: ", userProfileInfo);



  useEffect(() => {
    dispatch(getUserProfileInformationAction());
    // dispatch(getAllProvincesAction());
  }, [])

  useEffect(() => {
    dispatch(getAllDistrictsByProvinceIdAction(provinceId));
  }, [provinceId])

  useEffect(() => {
    dispatch(getAllWardsByDistrictIdAction(districtId));
  }, [districtId]);

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
    (user?.roleId == 2) ?
      <div className="flex justify-center">
        <form style={{ width: "80%" }} onSubmit={handleSubmit}>
          <div className="text-xl font-bold mt-3 mb-3">Thông tin người dùng</div>
          <div className="text-2xl font-bold mt-3 mb-3 flex flex-row">
            <img
              name="thumbnail"
              src={values.thumbnail ? values.thumbnail : "/images/user/anonymous_avatar.jpg"}
              className="mr-5"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <div className="flex whitespace-nowrap items-end">
              <label htmlFor="filePicker" className="bg-green-700 text-white p-2 cursor-pointer" style={{ fontSize: '15px' }}>
                Upload ảnh
              </label>
              <input type="file" id="filePicker" style={{ visibility: "hidden" }} name="file" placeholder='Upload an image'
                onChange={uploadImage} />
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
                  onChange={e => {
                    props.setFieldTouched('lastName')
                    handleChange(e)
                  }}
                  value={values.lastName}
                  id="lastName"
                  name="lastName"
                  className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="Họ" />
              </div>
              {errors.lastName && touched.lastName ? <div className='text-red-600'>{errors.lastName}</div> : <div></div>}
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
                  onChange={e => {
                    props.setFieldTouched('firstName')
                    handleChange(e)
                  }}
                  className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900`}
                  placeholder="Tên" />
              </div>
              {errors.firstName && touched.firstName ? <div className='text-red-600'>{errors.firstName}</div> : <div></div>}
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
                onChange={e => {
                  props.setFieldTouched('phoneNumber')
                  handleChange(e)
                }} />
            </div>
            {errors.phoneNumber && touched.phoneNumber ? <div className='text-red-600'>{errors.phoneNumber}</div> : <div></div>}
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
            {/* <div style={{ width: "100%" }} className="mr-2 mb-2">
            <label
              for="provinces"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Tỉnh/Thành phố</span>
            </label>
            <div>
              <select className="pl-1 text-base form-select shadow-none"
                value={(values.provinces == "null" || values.provinces == null) ? values.provincesDefault : values.provinces} //Nếu chưa có thì load mặc định
                onChange={(e) => {
                  dispatch(getAllDistrictsByProvinceIdAction(e.target.value))
                  setFieldValue("provinces", e.target.value)
                  setFieldValue("provincesDefault", e.target.value);
                }}
                name="provinces"
                id="provinces"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option value="0" disabled>Chọn tỉnh/thành phố</option>
                {provinces.map((item, index) => {
                  return <option selected={values.provinces == item.id ? true : false} key={index} value={item.id}>{item.name}</option>
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
                id="districts"
                value={(values.districts == "null" || values.districts == null) ? 0 : values.districts}
                onChange={(e) => {
                  dispatch(getAllWardsByDistrictIdAction(e.target.value))
                  setFieldValue("districts", e.target.value)
                }} className="pl-1 text-base form-select shadow-none"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option value="0" disabled>Chọn quận/huyện</option>
                {districts.map((item, index) => {
                  return <option key={index} value={item.id}>{item.name}</option>
                })}
              </select>
            </div>

          </div> */}
          </div>
          <div className="flex flex-row">
            {/* <div style={{ width: "100%" }} className="mr-2">
            <label
              for="wards"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Phường/Xã</span>
            </label>
            <div>
              <select
                name="wards"
                id="wards"
                value={(values.wards == "null" || values.wards == null) ? 0 : values.wards}
                onChange={handleChange}
                className="pl-1 text-base form-select shadow-none" style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option value="0" disabled>Chọn phường/xã</option>
                {wards.map((item, index) => {
                  return <option value={item.id} key={index}>{item.name}</option>
                })}
              </select>
            </div>
          </div> */}
            <div style={{ width: "100%" }}>
              <label
                for="detailAddress"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Địa chỉ cụ thể</span>
              </label>
              <div>
                <input type="text"
                  id="detailAddress"
                  name="detailAddress"
                  onChange={e => {
                    props.setFieldTouched('detailAddress')
                    handleChange(e)
                  }}
                  value={values.detailAddress}
                  //value này ko phải dạng mảng mà nó là string và ta findIndex dấu "," thứ 3 rồi sau đó lấy sau đó
                  className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="Địa chỉ cụ thể"
                />

              </div>
              {errors.detailAddress && touched.detailAddress ? <div className='text-red-600'>{errors.detailAddress}</div> : <div></div>}
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
      </div > : <Redirect to="/" />
  );
}

const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const UserDetailInformationWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    userProfileInfo: props?.userProfileInfo,
    userLocalStorageInfo: JSON.parse(localStorage.getItem(USER))?.id,
    // thumbnail: props?.userProfileInfo?.thumbnail,
    thumbnail: props?.uploadImage,
    lastName: props?.userProfileInfo?.lastName,
    firstName: props?.userProfileInfo?.firstName,
    phoneNumber: props?.userProfileInfo?.phonenumber,
    email: props?.userProfileInfo?.email,
    // provinces: ((props?.userProfileInfo.address?.provinceId) == "null" || props?.userProfileInfo.address?.provinceId == null) ? props.provinceDefault : props.provinceId,
    // districts: ((props?.userProfileInfo.address?.districtId) == "null" || props?.userProfileInfo.address?.districtId == null) ? props.districtDefault : props.districtId,
    // wards: ((props?.userProfileInfo.address?.wardId) == "null" || props?.userProfileInfo.address?.wardId == null) ? props.wardDefault : props.wardId,
    // provinces: props?.userProfileInfo.address?.provinceId,
    // provincesDefault: 1,
    // districts: props?.userProfileInfo.address?.districtId,
    // districtsDefault: props?.districtDefault,
    // wards: props?.userProfileInfo.address?.wardId,
    detailAddress: props.addressDetail,
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
      .matches(regexPhoneNumber, "Quý khách vui lòng nhập số điện thoại theo đúng định dạng nhà mạng Việt Nam !!!"),
    email: Yup.string()
      .required("Quý khách không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    // provinces: Yup.string()
    //   .required("Quý khách không được để trống tỉnh/thành phố !!!"),
    // districts: Yup.string()
    //   .required("Quý khách không được để trống quận/huyện !!!"),
    // wards: Yup.string()
    //   .required("Quý khách không được để trống phường/xã !!!"),
    detailAddress: Yup.string()
      .required("Quý khách không được để trống địa chỉ đầy đủ !!!")

  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT USER DETAIL");
    console.log("VALUES HANDLE SUBMIT: ", values);
    let userInfo = {
      "user": {
        email: values.email,
        fullname: values.lastName + " " + values.firstName,
        phoneNumber: values.phoneNumber,
        thumbnail: values.thumbnail,
        address: {
          // provinceId: values.provinces,
          // districtId: values.districts,
          // districtId: values.districtsDefault,
          // wardId: values.wards,
          addressDetail: values.detailAddress
        }
      }
    }
    console.log("USER INFO HANDLE SUBMIT: ", userInfo);
    props.dispatch(updateUserProfileInformationAction(values.userLocalStorageInfo, userInfo));
  },
  displayName: 'UserDetailInformationWithFormik'
})(UserDetailInformation);

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.UserReducer.userProfileInfo,
    uploadImage: state.UserReducer.uploadAvatar,
    provinceId: state.UserReducer.userProfileInfo?.address?.provinceId,
    districtId: state.UserReducer.userProfileInfo?.address?.districtId,
    wardId: state.UserReducer.userProfileInfo?.address?.wardId,
    addressDetail: state.UserReducer.userProfileInfo?.address?.addressDetail,
    provinceDefault: state.AddressReducer.provinceId,
    districtDefault: state.AddressReducer.districtId,
    wardDefault: state.AddressReducer.wardId
  }
}

export default connect(mapStateToProps, null)(UserDetailInformationWithFormik);
