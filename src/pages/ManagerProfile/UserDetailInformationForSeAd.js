import React, { useEffect } from "react";
import styles from "./UserDetailInformation.module.css";
import { Button, Form, Input, message, Upload } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { getUserProfileInformationAction, updateUserProfileInformationAction, uploadImageAction } from "../../redux/action/user/UserAction";
import { USER } from "../../redux/type/user/UserType";

function UserDetailInformationForSeAd(props) {
  const {
    values,
    setFieldValue,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileInformationAction());
  }, [])

  const propsAbc = {
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
    <div className="flex justify-center">
      <Form className="" style={{ width: "80%" }} onSubmitCapture={handleSubmit}>
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
          <div style={{ width: "100%" }}>
            <label
              for="lastName"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg ">Họ</span>
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
                className={`${styles.userdetailInformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="Vui lòng nhập họ"
                style={{ width: "90%", height: "45px" }}
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

            <Form.Item className="mb-1">
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={e => {
                  props.setFieldTouched('firstName')
                  handleChange(e)
                }}
                className={`${styles.userdetailInformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="Vui lòng nhập tên"
                style={{ width: "100%", height: "45px" }}
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
            <span className="text-lg">Số điện thoại</span>
          </label>
          <Form.Item className="mb-1">
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={e => {
                props.setFieldTouched('phoneNumber')
                handleChange(e)
              }}
              className={`${styles.userdetailInformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Vui lòng nhập số điện thoại"
              style={{ width: "100%", height: "45px" }}
            />
          </Form.Item>
          {errors.phoneNumber && touched.phoneNumber ? <div className='text-red-600'>{errors.phoneNumber}</div> : <div></div>}
        </div>

        <div className="">
          <label
            for="email"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Email</span>
          </label>
          <Form.Item className="mb-1">
            <Input
              type="text"
              id="email"
              name="email"
              disabled
              value={values.email}
              onChange={handleChange}
              className={`${styles.userdetailInformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Vui lòng nhập email"
              style={{ width: "100%", height: "45px" }}
            />
          </Form.Item>
        </div>

        <div className="text-2xl font-bold mt-3 mb-3">Thông tin địa chỉ</div>
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
              className={`${styles.userdetailInformation__border__hover} text-gray-900 form-control text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="Địa chỉ cụ thể"
            />
          </div>
          {errors.detailAddress && touched.detailAddress ? <div className='text-red-600'>{errors.detailAddress}</div> : <div></div>}
        </div>


        {/* delete and update button section */}
        <div className="flex justify-end mb-4" style={{ width: "100%" }}>
          <Button
            type="default"
            htmlType="submit"
            className={`${styles.userdetailInformation__border__button} mt-3 flex justify-center items-center py-4 px-3 font-semibold text-lg focus:border-green-900 focus:text-green-900`}
          >
            CẬP NHẬT
          </Button>
        </div>
      </Form>
    </div>
  );
}

const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

const UserDetailInformationForSeAdWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    userProfileInfo: props?.userProfileInfo,
    userLocalStorageInfo: JSON.parse(localStorage.getItem(USER))?.id,
    thumbnail: props?.uploadImage,
    lastName: props?.userProfileInfo?.lastName,
    firstName: props?.userProfileInfo?.firstName,
    phoneNumber: props?.userProfileInfo?.phonenumber,
    email: props?.userProfileInfo?.email,
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
          addressDetail: values.detailAddress
        }
      }
    }
    console.log("USER INFO HANDLE SUBMIT: ", userInfo);
    props.dispatch(updateUserProfileInformationAction(values.userLocalStorageInfo, userInfo));
  },
  displayName: 'UserDetailInformationWithFormik'
})(UserDetailInformationForSeAd);

const mapStateToProps = (state) => {
  return {
    userProfileInfo: state.UserReducer.userProfileInfo,
    uploadImage: state.UserReducer.uploadAvatar,
    addressDetail: state.UserReducer.userProfileInfo?.address?.addressDetail,
  }
}

export default connect(mapStateToProps, null)(UserDetailInformationForSeAdWithFormik);
