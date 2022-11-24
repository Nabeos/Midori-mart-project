import React, { Fragment, useEffect, useState } from 'react'
import {
    Button,
    Form,
    Modal,
    Popover,
    Pagination,
    Input,
    Tabs,
    Checkbox,
} from "antd";
import { FaEye, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./ProductManagement.module.css";
import AddNewProduct from '../AddNewProduct';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllProductListForSellerAction, searchProductForSellerAction } from '../../../redux/action/inventory/InventoryAction';
import { getAllCategoriesAction } from '../../../redux/action/categories/CategoriesAction';
import { getProductListByCategoryIdAction } from '../../../redux/action/product/ProductAction';
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, SHOW_MODAL_ADD_NEW_PRODUCT_FOR_SELLER } from '../../../redux/type/inventory/InventoryType';
import { withFormik } from 'formik';
import * as Yup from 'yup';

function ProductManagement(props) {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    // const text = <span>Lọc sản phẩm</span>;
    // const content = (
    //     <div
    //         className="col-span-2 mt-3 pl-3"
    //         style={{
    //             minHeight: "20rem",
    //         }}
    //     >
    //         <div className="mb-2">
    //             <div className="font-semibold">Danh mục sản phẩm</div>
    //             <Checkbox>Rau</Checkbox>
    //             <Checkbox>Thịt</Checkbox>
    //             <Checkbox>Đồ uống</Checkbox>
    //         </div>
    //         <div>
    //             <div className="font-semibold">Trạng thái hàng trong kho</div>
    //             <Checkbox>Còn hàng</Checkbox>
    //             <Checkbox>Sắp hết hàng</Checkbox>
    //             <Checkbox>Hết hàng</Checkbox>
    //         </div>
    //     </div>
    // );

    // const [open, setOpen] = useState(false);
    const openAddNewProductForSellerModal = useSelector(state => state.InventoryReducer.openAddNewProductForSellerModal);
    const dispatch = useDispatch();
    const showModal = () => {
        // setOpen(true);
        dispatch({ type: SHOW_MODAL_ADD_NEW_PRODUCT_FOR_SELLER })
    };

    const handleCancel = () => {
        // setOpen(false);
        dispatch({ type: CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER })
    };
    const productListByCategoryId = useSelector(state => state.ProductReducer.productListByCategoryId);
    console.log("productListByCategoryId: ", productListByCategoryId);
    // useEffect(() => {
    //     dispatch(getProductListByCategoryIdAction(0, 1000, 0));
    // }, [productListByCategoryId])

    useEffect(() => {
        dispatch(getProductListByCategoryIdAction(0, 1000, 0));
    }, [])

    useEffect(() => {
        dispatch(getAllCategoriesAction());
    }, [])



    const categories = useSelector(state => state.CategoriesReducer.categories);
    // console.log("allProductListForSeller: ", allProductListForSeller);
    // console.log("categories: ", categories);
    const handleChangeCategories = (e) => {
        console.log("HANDLE CHANGE CATEGORIES: ", e.target.value);
        dispatch(getProductListByCategoryIdAction(e.target.value, 1000, 0));
    }
    return (
        <div>
            <div className="flex">
                <div className="mt-3 ml-3" style={{ width: "100%" }}>
                    <select
                        onChange={handleChangeCategories}
                        defaultValue={0}
                        className='rounded-md p-1' style={{ border: "1px solid lightgray", minWidth: "10%", height: "2.5rem" }}>
                        <option value="0">Tất cả sản phẩm</option>
                        {categories.map((item, index) => {
                            return <option key={index} value={item.id}>{item.name}</option>
                        })}

                    </select>
                </div>
                <div
                    className="rounded-md mt-3 flex items-end justify-end mr-3"
                    style={{ width: "100%" }}
                >
                    {/* <Form>
                        <Input
                            placeholder="Tìm kiếm"
                            className="shadow-none hover:border-green-700 focus:border-green-700"
                            style={{ width: "100%", height: "2.5rem" }}
                        />
                    </Form> */}
                    <div className="rounded-md mt-3 flex justify-end mr-3">
                        <Form onSubmitCapture={handleSubmit}>
                            <InputGroup className={` `} >
                                <FormControl
                                    name="header__search"
                                    className={` form-control shadow-none outline-none `}
                                    placeholder="Tìm kiếm sản phẩm"
                                    onChange={(e) => {
                                        handleChange(e);
                                        dispatch(searchProductForSellerAction(e.target.value))
                                    }}
                                    style={{ width: '300px' }}
                                />
                                <InputGroup.Text className="text-white">
                                    <SearchOutlined onClick={handleSubmit} className="cursor-pointer" />
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
            </div>

            <hr className="border border-gray-400" />
            {/* popup add more users */}
            <div className="mt-3 ml-2">
                <Button
                    type=""
                    className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                    onClick={showModal}
                >
                    + Thêm sản phẩm mới
                </Button>
                <Modal
                    open={openAddNewProductForSellerModal}
                    title="Thêm sản phẩm mới"
                    onCancel={handleCancel}
                    footer={[]}
                    width={900}
                >
                    <AddNewProduct />
                </Modal>
            </div>

            {/* table for product Management */}
            <div>
                <div className="flex justify-center">
                    <table
                        className={`${styles.productmanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                        style={{ width: "80%", minHeight: productListByCategoryId.length < 5 ? "300px" : "900px" }}
                    >
                        <thead>
                            <tr>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    {" "}
                                    Id
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    {" "}
                                    Tên sản phẩm
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Mã SKU
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Danh mục sản phẩm
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Giá tiền
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Số lượng trong kho
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Trạng thái trong kho
                                </th>
                                <th className="border border-slate-300 p-4 text-base text-center">
                                    Xem chi tiết
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {productListByCategoryId.map((item, index) => {
                                if (item.deleted == 0) {
                                    let totalStock = 0;
                                    return <tr key={index}>
                                        <td className="border border-slate-300 text-center">
                                            {item.id}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            {item.title}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            {item.sku}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            {item.category.name}
                                        </td>
                                        <td className="border border-slate-300 text-center">
                                            {item.price.toLocaleString()}đ
                                        </td>

                                        <td className="border border-slate-300 text-center">
                                            {item.productQuantityInStock.map((itemStock, index) => {
                                                totalStock += Number(itemStock.quantity);
                                            })}
                                            {totalStock}
                                        </td>
                                        <td className="border border-slate-300 text-center ">
                                            {totalStock > 20 ? <span className="p-2 bg-green-600 rounded-md text-white">
                                                Còn hàng
                                            </span> : <Fragment></Fragment>}
                                            {totalStock == 0 ? <span className="p-2 bg-red-600 rounded-md text-white">
                                                Hết hàng
                                            </span> : <Fragment></Fragment>}{totalStock > 0 && totalStock < 20 ? <span className="p-2 bg-yellow-600 rounded-md text-white">
                                                Ít hàng
                                            </span> : <Fragment></Fragment>}
                                        </td>

                                        <td className="border border-slate-300 text-center">
                                            <NavLink
                                                to={`/productdetailmanagement/${item.slug}`}
                                                className="flex justify-center text-green-700 hover:text-green-700 "
                                            >
                                                <FaEye className='text-xl' />
                                            </NavLink>
                                        </td>
                                    </tr>
                                }

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
            </div>
        </div>
    )
}

const ProductManagementWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => ({
        header__search: ""
    }),

    validationSchema: Yup.object().shape({

    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        console.log("CÓ VÀO HANDLE SUBMIT IN HEADER");
        console.log("VALUE FORM: ", values);
        props.dispatch(searchProductForSellerAction(values.header__search))
    },

    displayName: 'ProductManagementWithFormik'
})(ProductManagement);

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, null)(ProductManagementWithFormik);