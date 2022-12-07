import React, { useEffect } from "react";
import styles from "./AddNewUser.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { addNewUserForAdminAction, getAllRoleInMidoriAction } from "../../redux/action/user/UserAction";
import { ADD_NEW_USER_DEMO } from "../../redux/type/user/UserType";

function AddNewUser(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoleInMidoriAction());
  }, [])

  let roleList = useSelector(state => state.UserReducer.roleList);
  console.log("ROLE LIST: ", roleList);

  return (
    <div>
      <Form onSubmitCapture={handleSubmit}>
        <div className="flex flex-row">
          <div style={{ width: "100%" }} className="mb-2">
            <label
              for="lastName"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Họ</span>
            </label>
            <Form.Item className="mb-1"
            >
              <Input
                type="text"
                id="lastName"
                name="lastName"
                onChange={e => {
                  props.setFieldTouched('lastName')
                  handleChange(e)
                }}
                className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
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

            <Form.Item className="mb-1"
            >
              <Input
                type="text"
                id="firstName"
                name="firstName"
                className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
                placeholder="Nhập tên tại đây"
                onChange={e => {
                  props.setFieldTouched('firstName')
                  handleChange(e)
                }}
                style={{ width: "100%", height: "40px" }}
              />
            </Form.Item>
            {errors.firstName && touched.firstName ? <div className='text-red-600'>{errors.firstName}</div> : <div></div>}
          </div>

        </div>

        <div className="-mt-2">
          <label
            for="phoneNumber"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Số điện thoại</span>
          </label>
          <Form.Item className="mb-1"
          >
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="Nhập số điện thoại tại đây"
              onChange={e => {
                props.setFieldTouched('phoneNumber')
                handleChange(e)
              }}
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
          <Form.Item className="mb-1"
          >
            <Input
              type="email"
              id="email"
              name="email"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="Nhập email tại đây"
              onChange={e => {
                props.setFieldTouched('email')
                handleChange(e)
              }}
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {errors.email && touched.email ? <div className='text-red-600'>{errors.email}</div> : <div></div>}
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
              defaultValue={0}
              onChange={e => {
                props.setFieldTouched('role')
                handleChange(e)
              }}
              className="border border-black rounded-md text-base focus:border-green-900"
              style={{ width: "100%", paddingLeft: '5px', height: "40px" }}
            >
              <option value="0" disabled>Chọn vai trò</option>
              {roleList.map((item, index) => {
                return <option key={index} value={item.id}>
                  {item.name}
                </option>
              })}

            </select>
          </Form.Item>
          {errors.role && touched.role ? <div className='text-red-600'>{errors.role}</div> : <div></div>}
        </div>
        <div className="">
          <label
            for="password"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Mật khẩu</span>
          </label>
          <Form.Item className="mb-1"
          >
            <Input
              type="password"
              id="password"
              name="password"
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="Nhập mật khẩu tại đây"
              onChange={e => {
                props.setFieldTouched('password')
                handleChange(e)
              }}
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {errors.password && touched.password ? <div className='text-red-600'>{errors.password}</div> : <div></div>}
        </div>
        <div className="">
          <label
            for="confirmPassword"
            className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg font-semibold">Nhập lại mật khẩu</span>
          </label>
          <Form.Item className="mb-1"
          >
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={e => {
                props.setFieldTouched('confirmPassword')
                handleChange(e)
              }}
              className='  text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700'
              placeholder="Nhập lại mật khẩu tại đây"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          {(errors.confirmPassword && touched.confirmPassword) || (values.confirmPassword != values.password && touched.confirmPassword) ? <div className='text-red-600'>Mật khẩu xác nhận quý khách vừa nhập không đúng. Quý khách vui lòng nhập lại !!!</div> : <div></div>}
        </div>

        <Button
          type="default"
          htmlType="submit"
          onSubmitCapture={handleSubmit}
          className='pt-3 mt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700'
          style={{ width: "100%" }}
        >
          Thêm người dùng mới
        </Button>
      </Form>
    </div>
  );
}

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,32}$/;
const regexAllLetter = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
const regexPhoneNumber = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
const regexSelect = /^[1-9][0-9]*$/;

const AddNewUserWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    lastName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: ""
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
      .matches(regexPhoneNumber, "Quý khách vui lòng nhập số điện thoại theo đúng định dạng nhà mạng Việt Nam !!!"),
    email: Yup.string()
      .required("Không được để trống mục email !!!")
      .email("Quý khách vui lòng nhập đúng định dạng email !!!"),
    role: Yup.string()
      .required("Vui lòng không để trống vai trò !!!")
      .matches(regexSelect, "Vui lòng không để trống vai trò !!!"),
    password: Yup.string()
      .min(6, 'Độ dài mật khẩu tối thiếu là 6 ký tự !!!')
      .max(32, 'Độ dài mật khẩu tối đa là 32 ký tự !!!')
      .required("Không được để trống mục mật khẩu !!!")
      .matches(regexPassword, 'Mật khẩu phải có độ dài tối thiếu 6 ký tự và tối đa 32 ký tự, phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt !!!'),
    confirmPassword: Yup.string()
      .required("Không được để trống mục nhập lại mật khẩu !!!")
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    console.log("VALUE FORM: ", values);
    // alert("CÓ VÀO ADD NEW USER FOR ADMIN");
    let data = {
      "user": {
        "fullname": values.lastName + " " + values.firstName,
        "email": values.email,
        "role": values.role,
        "phonenumber": values.phoneNumber,
        "password": values.password
      }
    }
    console.log("ADD NEW USER FOR ADMIN DATA: ", data);
    props.dispatch(addNewUserForAdminAction(data));
  },

  displayName: 'AddNewUserWithFormik'
})(AddNewUser);

const mapStateToProps = (state) => {
  return {
    roleList: state.UserReducer.roleList
  }
}

export default connect(mapStateToProps, null)(AddNewUserWithFormik);
