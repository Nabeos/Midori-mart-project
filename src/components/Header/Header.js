import React, { useEffect } from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUserCircle } from "react-icons/fa";
import { history } from "../../App";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";
import { getProductListByCategoryIdAction, searchProductAction } from "../../redux/action/product/ProductAction";
import { Input } from 'antd';
import { handleAddToCartQuantity } from "../../redux/action/cart/CartAction";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { USER } from "../../redux/type/user/UserType";
import { Popover } from "antd";
import { TOKEN } from "../../utils/settings/config";
const { Search } = Input;



function Header(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  const handleLogOut = () => {
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem("cart");
    localStorage.removeItem("deliveryDate");
    localStorage.removeItem("deliveryTimeRange");
    localStorage.removeItem("note");
    localStorage.removeItem("address");
    localStorage.removeItem("email");
    localStorage.removeItem("fullName");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("totalBill");
    localStorage.removeItem("paymentMethod");
    localStorage.removeItem("receiveProductsMethod");
    localStorage.removeItem("userDetailedInfoAdmin");
    localStorage.removeItem("firstNameUserDetailedAdmin");
    localStorage.removeItem("lastNameUserDetailedAdmin");
    history.push("/");
    window.location.reload();
  }
  let user = JSON.parse(localStorage.getItem(USER));
  const content = (
    <div>
      <NavLink to={`/userprofile/${user?.email}`} className="text-black no-underline" style={{ fontSize: '1.1rem' }}>Thông tin cá nhân</NavLink>
      <p className="cursor-pointer" style={{ fontSize: '1.1rem' }} onClick={handleLogOut}>Đăng xuất</p>
    </div >
  );
  console.log("INITIAL VALUES: ", values);

  const categories = useSelector(state => state.CategoriesReducer.categories);
  // const user = useSelector(state => state.UserReducer.user);

  console.log("USER IN HEADER: ", user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [])
  const { cartList } = useSelector(state => state.CartReducer);

  let totalQuantityInCart = 0;
  const handleNavigateToCartPage = () => {
    history.push("/cart");
  }

  const handleRenderCategoriesNav = () => {
    return categories.map(({ id, name }, index) => {
      return <NavLink
        key={index}
        to={`/productlist/${id}`}
        onClick={() => { dispatch(getProductListByCategoryIdAction(id, 1000, 0)) }}
        activeStyle={{ fontWeight: "bold" }}
        className="text-white whitespace-nowrap hover:text-lime-800 no-underline font-semibold col-span-1 text-lg"
      >
        {name}
      </NavLink>
    })
  }

  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 ml-11 -mt-10 items-center">
        <div className="col-span-2 mr-2 flex items-center">
          <NavLink
            to="/"
            className="text-black no-underline font-medium flex items-center"
          >
            <img className={styles.header__logo} src="/images/midori_logo.png" style={{ width: "50%" }} />
            <div className="-ml-10 text-2xl font-bold">
              <span className={`${styles.header__logo__m1} `}>M</span>
              <span>idori</span>
              <span className={`${styles.header__logo__m2} `}>M</span>
              <span>art</span>
            </div>
          </NavLink>
        </div>
        {localStorage.getItem(USER) ?
          <div className="col-span-6">
            {/* Thử nghiệm dispatch gửi text lên xem có nhận ko */}
            <Form onSubmit={handleSubmit}>
              <InputGroup className={`${styles.header__searchbar} `} >
                <Form.Control
                  name="header__search"
                  className={`${styles.header__searchbar} form-control shadow-none `}
                  placeholder="Tìm kiếm sản phẩm"
                  onChange={handleChange}
                />
                <InputGroup.Text className="text-white">
                  <SearchOutlined className="cursor-pointer" onClick={handleSubmit} />
                </InputGroup.Text>
              </InputGroup>
            </Form>

          </div> : <div className="col-span-7">
            {/* Thử nghiệm dispatch gửi text lên xem có nhận ko */}
            <Form onSubmit={handleSubmit}>
              <InputGroup className={`${styles.header__searchbar} `} >
                <Form.Control
                  name="header__search"
                  className={`${styles.header__searchbar} form-control shadow-none `}
                  placeholder="Tìm kiếm sản phẩm"
                  onChange={handleChange}
                />
                <InputGroup.Text className="text-white">
                  <SearchOutlined className="cursor-pointer" onClick={handleSubmit} />
                </InputGroup.Text>
              </InputGroup>
            </Form>

          </div>}
        <div className="col-span-1 text-center">
          <NavLink
            to="/blog"
            className="text-black no-underline col-span-1 font-medium ml-6 text-lg"
          >
            Blog
          </NavLink>
        </div>
        <div className="col-span-1 text-center">
          <ShoppingCartOutlined onClick={handleNavigateToCartPage} className="text-3xl mb-2 -ml-10" />
          {cartList.map((item, index) => {
            totalQuantityInCart += item.quantity;
          })}
          <span>({totalQuantityInCart})</span>
        </div>
        {localStorage.getItem(USER) ? <div className="col-span-2">
          <Popover content={content}>
            <span className="text-lg cursor-pointer">
              {user?.fullname}
            </span>
          </Popover>
        </div> : <div className="col-span-1 text-center ml-2">
          <FaUserCircle className="text-3xl hidden" />
          <NavLink
            to="/login"
            className="font-medium text-lg -ml-24 no-underline text-black"
          >
            Đăng nhập
          </NavLink>
        </div>}

      </div>
      <Navbar
        bg="primary"
        variant="dark"
        className={`${styles.header__navbar} -mt-10`}
      >
        <Container style={{ width: '80%', margin: '0 auto' }}>
          <Nav className="me-auto h-16">
            <div className="text-sm flex text-center justify-around items-center gap-5">
              {handleRenderCategoriesNav()}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}


const HeaderWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    header__search: ""
  }),

  validationSchema: Yup.object().shape({

  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT IN HEADER");
    console.log("VALUE FORM: ", values);
    props.dispatch(searchProductAction(values.header__search));
    history.push(`/searchresult/${values.header__search}`);
  },

  displayName: 'HeaderWithFormik'
})(Header);

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, null)(HeaderWithFormik);