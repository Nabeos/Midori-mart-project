import React, { useEffect, useRef } from "react";
import styles from "./UserDetailInformation.module.css";
import { Button, Form, Input, message, Upload } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { getUserProfileInformationAction, updateUserProfileInformationAction } from "../../redux/action/user/UserAction";
import { history } from "../../App";
import { getAllDistrictsByProvinceIdAction, getAllDistrictsDefaultByProvinceIdAction, getAllProvincesAction, getAllProvincesDesiredAction, getAllWardsByDistrictIdAction, getAllWardsDefaultByDistrictIdAction } from "../../redux/action/address/AddressAction";
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
  const userProfileInfo = useSelector(state => state.UserReducer.userProfileInfo);
  const provinceId = useSelector(state => state.AddressReducer.provinceId);
  let districtId = useSelector(state => state.AddressReducer.districtId);
  let wardId = useSelector(state => state.AddressReducer.wardId);
  const provinces = useSelector(state => state.AddressReducer.provinces);
  const districts = useSelector(state => state.AddressReducer.districts);
  const wards = useSelector(state => state.AddressReducer.wards);
  const dispatch = useDispatch();
  const useRefProvince = useRef(null);
  const useRefDistrict = useRef(null);
  const useRefWard = useRef(null);
  console.log("USE REF DISTRICT: ", useRefDistrict.current);

  // console.log("USERPROFILE.ADDRESS: ", userProfileInfo.address);
  console.log("PROVINCE ID STATE: ", provinceId);
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
  console.log("USER PROFILE INFO LENGTH: ", (Object.keys(userProfileInfo).length));


  useEffect(() => {
    dispatch(getUserProfileInformationAction());
    dispatch(getAllProvincesAction());
  }, [])

  useEffect(() => {
    if (typeof values.provinces == typeof undefined) {
      setFieldValue("provinces", "01TTT");
      useRefProvince.current = "01TTT";
    }

  }, [values.provinces])

  useEffect(() => {
    if (typeof values.districts == typeof undefined && districts.length > 0) {
      // setFieldValue("districts", districts[0].id);
      setFieldValue("districts", useRefDistrict.current);
    } else {
      // setFieldValue("districts", districtId);
      setFieldValue("districts", useRefDistrict.current);
    }
  }, [provinceId, values.districts, districts.length])

  useEffect(() => {
    if (typeof values.wards == typeof undefined && wards.length > 0) {
      console.log("CÓ VÀO UNDEFINED");
      setFieldValue("wards", wards[0].id);
      useRefWard.current = wards[0].id;
    }
    // else {
    //   console.log("CÓ VÀO KHÁC UNDEFINED");
    //   setFieldValue("wards", values.wards);
    // }
  }, [values.wards, wards.length])

  useEffect(() => {
    //ĐANG ĐÁNH NHAU VỚI CÁI TRÊN
    if (typeof wardId != typeof undefined && typeof values.wards != typeof undefined && values.wards != 0 && wardId != 0) {
      console.log("SO SÁNH WARD: ", wardId == values.wards);
      console.log("CÓ VÀO ĐK ĐẦY ĐỦ");
      if (!(wardId == values.wards)) {
        setFieldValue("wards", values.wards);
        useRefWard.current = values.wards;

      }
    }
  }, [wardId])

  // useEffect(() => {
  //   if (typeof values.wards != typeof undefined) {
  //     setFieldValue("wards", values.wards);
  //   }
  // }, [values.wards])



  useEffect(() => {
    if (provinceId != 0 && (typeof userProfileInfo.address == typeof undefined || typeof userProfileInfo.address == typeof null)) {
      console.log("CÓ VÀO NULL GET ALL DISTRICTS");
      dispatch(getAllDistrictsByProvinceIdAction(provinceId));
      useRefDistrict.current = userProfileInfo?.address?.districtId;
      setFieldValue("districts", useRefDistrict.current);
    }

  }, [provinceId])

  useEffect(() => {
    if (typeof userProfileInfo.address != typeof undefined) {
      console.log("CÓ VÀO KHÁC UNDEFINED");
      dispatch(getAllDistrictsByProvinceIdAction(userProfileInfo?.address?.provinceId));
      // useRefDistrict.current = values.districts;
      setFieldValue("districts", useRefDistrict.current);

    }
  }, [userProfileInfo.address])


  useEffect(() => {
    if (typeof values.districts != typeof undefined) {
      setFieldValue("districts", values.districts);
      useRefDistrict.current = values.districts;

    }
  }, [values.districts])

  useEffect(() => {
    //Trường hợp ko chọn initial values của từng select
    if (typeof userProfileInfo.address != typeof undefined) {
      console.log("CÓ VÀO HÀ NỘI USER PROFILE");
      dispatch(getAllWardsByDistrictIdAction(userProfileInfo?.address?.districtId));
    }
  }, [userProfileInfo.address])

  //ĐANG THIẾU 1 TRƯỜNG HỢP GET ALL WARDS

  useEffect(() => {
    if (typeof userProfileInfo?.address?.districtId != typeof undefined && typeof values.districts != typeof undefined && values.districts != 0) {
      console.log("CÓ VÀO HÀ NỘI VALUES.DISTRICTS");
      if (values.provinces == "01TTT") {
        dispatch(getAllWardsByDistrictIdAction("001HH"));
      }
      else if (!(userProfileInfo?.address?.districtId == values.districts)) {
        dispatch(getAllWardsByDistrictIdAction(values.districts));
      }
    }
  }, [values.districts])

  useEffect(() => {
    //Trường hợp address là NULL mới đầu
    if (districtId != 0 && (typeof userProfileInfo.address == typeof undefined || typeof userProfileInfo.address == typeof null)) {
      console.log("CÓ VÀO HÀ NỘI DISTRICT ID STATE");
      dispatch(getAllWardsByDistrictIdAction(districtId));
      // console.log("VALUES.WARDS ĐANG CẦN: ", values.wards);
    }
  }, [districtId])










  const props1 = {
    name: "file",
    action: getAllProvincesAction(),
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log("UPLOAD IMAGE: ", info);
      if (info.file.status !== "uploading") {
        console.log("HELLO NHÉ: ", info.file, info.fileList);
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
        {/* <div className="flex flex-row ">
          <div style={{ width: "100%" }} className="mr-2 mb-2">
            <label
              for="provinces"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Tỉnh/Thành phố</span>
            </label>
            <div>
              <select className="pl-1 text-base form-select shadow-none"
                ref={useRefProvince}
                value={values.provinces} //Nếu chưa có thì load mặc định
                onChange={(e) => {
                  dispatch(getAllDistrictsByProvinceIdAction(e.target.value))
                  setFieldValue("provinces", e.target.value)
                }}
                name="provinces"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option disabled>Chọn tỉnh/thành phố</option>
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
                ref={useRefDistrict}
                value={values.districts}
                onChange={(e) => {
                  dispatch(getAllWardsByDistrictIdAction(e.target.value))
                  setFieldValue("districts", e.target.value)
                }} className="pl-1 text-base form-select shadow-none"
                style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option disabled>Chọn quận/huyện</option>
                {districts.map((item, index) => {
                  return <option selected={values.districts == item.id ? true : false} key={index} value={item.id}>{item.name}</option>
                })}
              </select>
            </div>

          </div>
        </div> */}
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
                ref={useRefWard}
                value={values.wards}
                onChange={handleChange}
                className="pl-1 text-base form-select shadow-none" style={{ border: "1px solid lightgray", borderRadius: "5px" }}>
                <option disabled>Chọn phường/xã</option>
                {wards.map((item, index) => {
                  return <option selected={values.wards == item.id ? true : false} value={item.id} key={index}>{item.name}</option>
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
                onChange={handleChange}
                value={values.detailAddress}
                //value này ko phải dạng mảng mà nó là string và ta findIndex dấu "," thứ 3 rồi sau đó lấy sau đó
                id="detailAddress"
                name="detailAddress"
                className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="Địa chỉ cụ thể"
              />

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
    // provinces: props.provinceId,
    // districts: props.districtId,
    // wards: props.wardId,
    detailAddress: props.addressDetail,
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    // lastName: Yup.string()
    //   .required("Quý khách không được để trống mục họ !!!")
    //   .matches(regexAllLetter, "Mục họ chỉ được phép chứa chữ !!!"),
    // firstName: Yup.string()
    //   .required("Quý khách không được để trống mục tên !!!")
    //   .matches(regexAllLetter, "Mục tên chỉ được phép chứa chữ !!!"),
    // phoneNumber: Yup.string()
    //   .required("Quý khách không được để trống mục số điện thoại !!!")
    //   .matches(regexPhoneNumber, "Quý khách vui lòng nhập đúng định dạng số điện thoại !!!"),
    // email: Yup.string()
    //   .required("Quý khách không được để trống mục email !!!")
    //   .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    // provinces: Yup.string()
    //   .required("Quý khách không được để trống tỉnh/thành phố !!!"),
    // districts: Yup.string()
    //   .required("Quý khách không được để trống quận/huyện !!!"),
    // wards: Yup.string()
    //   .required("Quý khách không được để trống phường/xã !!!"),
    // detailAddress: Yup.string()
    //   .required("Quý khách không được để trống địa chỉ đầy đủ !!!")

  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT USER DETAIL");
    console.log("VALUES HANDLE SUBMIT: ", values);
    alert("CÓ VÀO NHÉ");
    let userInfo = {
      "user": {
        email: values.email,
        fullname: values.lastName + " " + values.firstName,
        phoneNumber: values.phoneNumber,
        thumbnail: values.thumbnail,
        address: {
          // provinceId: values.provinces,
          // districtId: values.districts,
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
    // provinceId: state.UserReducer.userProfileInfo?.address?.provinceId,
    // districtId: state.UserReducer.userProfileInfo?.address?.districtId,
    // wardId: state.UserReducer.userProfileInfo?.address?.wardId,
    addressDetail: state.UserReducer.userProfileInfo?.address?.addressDetail
    // address: state.UserReducer.userProfileInfo.address,
    // provinceId: state.AddressReducer.provinceId,
    // districtId: state.AddressReducer.districtId,
    // wards: state.AddressReducer.wards
  }
}

export default connect(mapStateToProps, null)(UserDetailInformationWithFormik);
