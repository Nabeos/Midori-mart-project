import axios from 'axios'
import { inventoryManagementService } from '../../../services/InventoryManagementService';
import { CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, GET_ALL_EXPORT_GOODS_ORDER_LIST, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE_AND_SELLER, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE_AND_SELLER, GET_ALL_IMPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH, GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR, GET_ALL_MERCHANT, GET_ALL_ORIGIN, GET_ALL_PRODUCT_LIST_FOR_SELLER, GET_ALL_PRODUCT_UNIT, GET_ALL_SELLERS, GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION, SEARCH_EXPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE_AND_SELLER, SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE, SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE_AND_SELLER, SEARCH_PRODUCT_FOR_SELLER, SEARCH_PRODUCT_LENGTH_FOR_SELLER, UPLOAD_PRODUCT_IMAGE_FOR_SELLER } from '../../type/inventory/InventoryType';
import { notification } from "antd";
import { history } from '../../../App';
import { SEARCH_PRODUCT_LENGTH } from '../../type/product/ProductType';

export const getAllProductListForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllProductListForSeller();
            console.log("RESULT ALL PRODUCT LIST FOR SELLER: ", result.data.product);
            dispatch({
                type: GET_ALL_PRODUCT_LIST_FOR_SELLER,
                allProductListForSellerAction: result.data.product
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getProductListByCategoryIdForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getProductListByCategoryIdForSeller();
            console.log("RESULT PRODUCT LIST BY CATE ID FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}
const openNotificationAddNewProduct = (placement) => {
    notification.success({
        message: `Thêm sản phẩm mới thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationAddNewProductError = (placement) => {
    notification.error({
        message: `Thêm sản phẩm mới thất bại. Sản phẩm có thể đã tồn tại trong hệ thống !`,
        placement,
        duration: 2
    });
};
export const addNewProductForSellerAction = (newProductInfo) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.addNewProductForSeller(newProductInfo);
            openNotificationAddNewProduct('bottomRight');
            dispatch({ type: CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER })
            console.log("RESULT ADD NEW PRODUCT FOR SELLER: ", result);
        } catch (error) {
            openNotificationAddNewProductError('bottomRight');
            dispatch({ type: CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER })
            console.log('error', error.response.data);
        }
    }
}
const openNotificationDeleteProduct = (placement) => {
    notification.success({
        message: `Xóa sản phẩm thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationDeleteProductError = (placement) => {
    notification.error({
        message: `Xóa sản phẩm thất bại !`,
        placement,
        duration: 2
    });
};
export const deleteProductForSellerAction = (productId) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.deleteProductForSeller(productId);
            openNotificationDeleteProduct('bottomRight');
            localStorage.setItem("defaultActiveKeyValueInventory", 1);
            history.push("/inventorymanagement");
            console.log("RESULT DELETE PRODUCT FOR SELLER: ", result);
        } catch (error) {
            openNotificationDeleteProductError('bottomRight')
            console.log('error', error.response.data);
        }
    }
}

export const getProductDetailedInformationForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getProductDetailedInformationForSeller();
            console.log("RESULT PRODUCT DETAILED INFORMATION FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}
const openNotificationUpdateProductDetailInfoForSeller = (placement) => {
    notification.success({
        message: `Cập nhật thông tin sản phẩm thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationUpdateProductDetailInfoForSellerError = (placement) => {
    notification.error({
        message: `Cập nhật thông tin sản phẩm thất bại !`,
        placement,
        duration: 2
    });
};
export const updateProductDetailedInformationForSellerAction = (slug, updatedProductInfo) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.updateProductDetailedInformationForSeller(slug, updatedProductInfo);
            openNotificationUpdateProductDetailInfoForSeller('bottomRight');
            localStorage.setItem("defaultActiveKeyValueInventory", 1);
            history.push("/inventorymanagement");
            console.log("RESULT UPDATE PRODUCT INFO FOR SELLER: ", result);
        } catch (error) {
            openNotificationUpdateProductDetailInfoForSellerError('bottomRight');
            console.log('error', error.response.data)
        }
    }
}

export const searchProductForSellerAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchProductForSeller(keyWord, offset, limit);
            console.log("RESULT SEARCH PRODUCT FOR SELLER: ", result);
            dispatch({
                type: SEARCH_PRODUCT_FOR_SELLER,
                searchProductListForSellerAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const searchProductLengthForSellerAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchProductForSeller(keyWord, offset, limit);
            console.log("RESULT SEARCH PRODUCT LENGTH FOR SELLER: ", result);
            dispatch({
                type: SEARCH_PRODUCT_LENGTH_FOR_SELLER,
                searchProductListLengthForSellerAction: result.data.products
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

const openNotificationCreateNewImportGoodsForm = (placement) => {
    notification.success({
        message: `Tạo phiếu nhập kho thành công`,
        placement,
        duration: 5
    });
};
const openNotificationCreateNewImportGoodsFormError = (placement) => {
    notification.error({
        message: `Tạo phiếu nhập kho thất bại`,
        placement,
        duration: 2
    });
};
export const createNewImportGoodsFormAction = (newImportGoodsFormInfo) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.createNewImportGoodsForm(newImportGoodsFormInfo);
            // dispatch({
            //     type: DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM
            // })
            openNotificationCreateNewImportGoodsForm('bottomRight');
            history.push("/inventorymanagement");
            setTimeout(function () {
                window.location.reload();
            }, 1000);
            // window.location.reload();
            localStorage.setItem("defaultActiveKeyValueInventory", 2);
            localStorage.removeItem("importProductList");
            localStorage.removeItem("importCode");
            localStorage.removeItem("noteInImportGoods");
            localStorage.removeItem("manufactureCompany");
            console.log("RESULT CREATE NEW IMPORT GOODS FORM: ", result);
        } catch (error) {
            openNotificationCreateNewImportGoodsFormError('bottomRight');
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderList(offset, limit);
            console.log("RESULT ALL IMPORT GOODS ORDER LIST: ", result.data.receivedNote);
            dispatch({
                type: GET_ALL_IMPORT_GOODS_ORDER_LIST,
                importedGoodsOrderListAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListLengthAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderList(offset, limit);
            console.log("RESULT ALL IMPORT GOODS ORDER LIST LENGTH: ", result.data.receivedNote);
            dispatch({
                type: GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH,
                importedGoodsOrderListLengthAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

const openNotificationDeleteImportGoodsForm = (placement) => {
    notification.success({
        message: `Xóa phiếu nhập kho thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationDeleteImportGoodsFormError = (placement) => {
    notification.error({
        message: `Xóa phiếu nhập kho thất bại !`,
        placement,
        duration: 2
    });
};
export const deleteImportGoodsOrderAction = (formId) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.deleteImportGoodsOrder(formId);
            openNotificationDeleteImportGoodsForm('bottomRight');
            localStorage.setItem("defaultActiveKeyValueInventory", 2);
            history.push("/inventorymanagement");
            console.log("RESULT DELETE IMPORT GOODS ORDER: ", result);
        } catch (error) {
            openNotificationDeleteImportGoodsFormError('bottomRight');
            console.log('error', error)
        }
    }
}

const openNotificationDeleteExportGoodsForm = (placement) => {
    notification.success({
        message: `Xóa phiếu xuất kho thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationDeleteExportGoodsFormError = (placement) => {
    notification.error({
        message: `Xóa phiếu xuất kho thất bại !`,
        placement,
        duration: 2
    });
};

export const deleteExportGoodsOrderAction = (formId) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.deleteExportGoodsOrder(formId);
            openNotificationDeleteExportGoodsForm('bottomRight');
            localStorage.setItem("defaultActiveKeyValueInventory", 3);
            history.push("/inventorymanagement");
            console.log("RESULT DELETE EXPORT GOODS ORDER: ", result);
        } catch (error) {
            openNotificationDeleteExportGoodsFormError('bottomRight');
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListByCreatorAction = (userId, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderListByCreator(userId, offset, limit);
            console.log("RESULT ALL IMPORT GOODS ORDER LIST BY CREATOR: ", result.data.receivedNote);
            dispatch({
                type: GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR,
                importedGoodsOrderListByCreatorAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListLengthByCreatorAction = (userId, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderListByCreator(userId, offset, limit);
            console.log("RESULT ALL IMPORT GOODS ORDER LIST LENGTH BY CREATOR: ", result.data.receivedNote);
            dispatch({
                type: GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR,
                importedGoodsOrderListLengthByCreatorAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllSellersAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllSellers();
            console.log("RESULT GET ALL SELLERS: ", result.data.user);
            dispatch({
                type: GET_ALL_SELLERS,
                sellerListAction: result.data.user
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getImportGoodsOrderDetailedInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getImportGoodsOrderDetailedInformation();
            dispatch({
                type: GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION,
                importGoodsOrderDetailedInformationAction: result
            })
            console.log("RESULT IMPORT GOODS ORDER DETAILED INFO: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const updateImportGoodsOrderInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.updateImportGoodsOrderInformation();
            console.log("RESULT UPDATE IMPORT GOODS ORDER INFO: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}
const openNotificationCreateNewExportGoodsForm = (placement) => {
    notification.success({
        message: `Tạo phiếu xuất kho thành công`,
        placement,
        duration: 2
    });
};
const openNotificationCreateNewExportGoodsFormError = (placement) => {
    notification.error({
        message: `Tạo phiếu xuất kho thất bại`,
        placement,
        duration: 2
    });
};
export const createNewExportGoodsFormAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.createNewExportGoodsForm();
            openNotificationCreateNewExportGoodsForm('bottomRight');
            console.log("RESULT CREATE NEW EXPORT GOODS FORM: ", result);
        } catch (error) {
            openNotificationCreateNewExportGoodsFormError('bottomRight');
            console.log('error', error)
        }
    }
}

export const getAllExportGoodsOrderListAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderList(offset, limit);
            console.log("RESULT ALL EXPORT GOODS ORDER LIST: ", result.data.deliveryNotes);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST,
                exportGoodsOrderListAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllExportGoodsOrderListLengthAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderList(offset, limit);
            console.log("RESULT ALL EXPORT GOODS ORDER LIST LENGTH: ", result.data.deliveryNotes);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH,
                exportGoodsOrderListLengthAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const searchExportGoodsFormForSellerByTimeRangeAction = (firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchExportGoodsFormForSellerByTimeRange(firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH EXPORTED GOODS FORM LIST BY TIME RANGE: ", result);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE,
                searchedExportedGoodsFormListByTimeRangeAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchExportGoodsFormLengthForSellerByTimeRangeAction = (firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchExportGoodsFormForSellerByTimeRange(firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH EXPORTED GOODS FORM LIST LENGTH BY TIME RANGE: ", result);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE,
                searchedExportedGoodsFormListLengthByTimeRangeAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchExportGoodsFormForSellerByTimeRangeAndSellerAction = (userId, firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchExportGoodsFormForSellerByTimeRangeAndSeller(userId, firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH EXPORT GOODS FORM LIST BY TIME RANGE AND SELLER: ", result.data.deliveryNotes);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE_AND_SELLER,
                searchedExportedGoodsFormListByTimeRangeAndSellerAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchExportGoodsFormLengthForSellerByTimeRangeAndSellerAction = (userId, firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchExportGoodsFormForSellerByTimeRangeAndSeller(userId, firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH EXPORT GOODS FORM LIST LENGTH BY TIME RANGE AND SELLER: ", result.data.deliveryNotes);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE_AND_SELLER,
                searchedExportedGoodsFormListLengthByTimeRangeAndSellerAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllExportGoodsOrderListByCreatorAction = (userId, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderListByCreator(userId, offset, limit);
            console.log("RESULT ALL EXPORT GOODS ORDER LIST BY CREATOR: ", result);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_CREATOR,
                exportedGoodsOrderListByCreatorAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getAllExportGoodsOrderListLengthByCreatorAction = (userId, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderListByCreator(userId, offset, limit);
            console.log("RESULT ALL EXPORT GOODS ORDER LIST LENGTH BY CREATOR: ", result);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR,
                exportedGoodsOrderListLengthByCreatorAction: result.data.deliveryNotes
            })
        } catch (error) {
            console.log('error', error.response.data)
        }
    }
}

export const getExportGoodsOrderDetailedInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getExportGoodsOrderDetailedInformation();
            console.log("RESULT EXPORT GOODS ORDER DETAILED INFO: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const updateExportGoodsOrderInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.updateExportGoodsOrderInformation();
            console.log("RESULT UPDATE EXPORT GOODS ORDER INFO: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}
const openNotificationUploadProductImage = (placement) => {
    notification.success({
        message: `Upload ảnh sản phẩm thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationUploadProductImageError = (placement) => {
    notification.error({
        message: `Upload ảnh sản phẩm thất bại !`,
        placement,
        duration: 2
    });
};
export const uploadProductImageForSellerAction = (slug, filesName) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.uploadProductImageForSeller(slug, filesName);
            openNotificationUploadProductImage('bottomRight');
            console.log("RESULT UPLOAD PRODUCT IMAGE FOR SELLER: ", result.data.images[0].url);
            dispatch({
                type: UPLOAD_PRODUCT_IMAGE_FOR_SELLER,
                productUploadImageAction: result.data.images[0].url
            })
        } catch (error) {
            openNotificationUploadProductImageError('bottomRight');
            console.log('error', error.response.data);
        }
    }
}

export const getAllProductUnitAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllProductUnit();
            console.log("RESULT GET ALL PRODUCT UNIT: ", result.data.units);
            dispatch({
                type: GET_ALL_PRODUCT_UNIT,
                productUnitListAction: result.data.units
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllOriginAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllOrigin();
            console.log("RESULT GET ALL ORIGIN: ", result.data.countries);
            dispatch({
                type: GET_ALL_ORIGIN,
                originListAction: result.data.countries
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllMerchantAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllMerchant();
            console.log("RESULT GET ALL MERCHANT: ", result.data.merchants);
            dispatch({
                type: GET_ALL_MERCHANT,
                merchantListAction: result.data.merchants
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchImportGoodsFormForSellerByTimeRangeAction = (firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchImportGoodsFormForSellerByTimeRange(firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH IMPORTED GOODS FORM LIST BY TIME RANGE: ", result.data.receivedNote);
            dispatch({
                type: SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE,
                searchedImportedGoodsFormListByTimeRangeAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchImportGoodsFormLengthForSellerByTimeRangeAction = (firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchImportGoodsFormForSellerByTimeRange(firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH IMPORTED GOODS FORM LIST LENGTH BY TIME RANGE: ", result.data.receivedNote);
            dispatch({
                type: SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE,
                searchedImportedGoodsFormListLengthByTimeRangeAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchImportGoodsFormForSellerByTimeRangeAndSellerAction = (userId, firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchImportGoodsFormForSellerByTimeRangeAndSeller(userId, firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH IMPORTED GOODS FORM LIST BY TIME RANGE AND SELLER: ", result.data.receivedNote);
            dispatch({
                type: SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE_AND_SELLER,
                searchedImportedGoodsFormListByTimeRangeAndSellerAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchImportGoodsFormLengthForSellerByTimeRangeAndSellerAction = (userId, firstDate, secondDate, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchImportGoodsFormForSellerByTimeRangeAndSeller(userId, firstDate, secondDate, offset, limit);
            console.log("RESULT SEARCH IMPORTED GOODS FORM LIST LENGTH BY TIME RANGE AND SELLER: ", result.data.receivedNote);
            dispatch({
                type: SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE_AND_SELLER,
                searchedImportedGoodsFormListLengthByTimeRangeAndSellerAction: result.data.receivedNote
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchExportGoodsFormForSellerAction = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchExportGoodsFormForSeller(keyWord);
            console.log("RESULT SEARCH EXPORT GOODS FORM LIST: ", result);
            dispatch({
                type: SEARCH_EXPORT_GOODS_FORM_FOR_SELLER,
                searchedExportedGoodsFormListAction: result
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

