import axios from 'axios'
import { inventoryManagementService } from '../../../services/InventoryManagementService';
import { CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, GET_ALL_EXPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_MERCHANT, GET_ALL_ORIGIN, GET_ALL_PRODUCT_LIST_FOR_SELLER, GET_ALL_PRODUCT_UNIT, GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION, SEARCH_EXPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE, SEARCH_PRODUCT_FOR_SELLER, UPLOAD_PRODUCT_IMAGE_FOR_SELLER } from '../../type/inventory/InventoryType';
import { notification } from "antd";

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
        message: `Thêm sản phẩm mới thất bại !`,
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
            openNotificationDeleteProduct('bottomRight')
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
            console.log("RESULT UPDATE PRODUCT INFO FOR SELLER: ", result);
        } catch (error) {
            openNotificationUpdateProductDetailInfoForSellerError('bottomRight');
            console.log('error', error.response.data)
        }
    }
}

export const searchProductForSellerAction = (keyWord) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchProductForSeller(keyWord);
            console.log("RESULT SEARCH PRODUCT FOR SELLER: ", result.data.products);
            dispatch({
                type: SEARCH_PRODUCT_FOR_SELLER,
                searchProductListForSellerAction: result.data.products
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
        duration: 2
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
            openNotificationCreateNewImportGoodsForm('bottomRight');
            console.log("RESULT CREATE NEW IMPORT GOODS FORM: ", result);
        } catch (error) {
            openNotificationCreateNewImportGoodsFormError('bottomRight');
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderList();
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

export const deleteImportGoodsOrderAction = (formId) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.deleteImportGoodsOrder(formId);
            console.log("RESULT DELETE IMPORT GOODS ORDER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListByCreatorAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderListByCreator();
            console.log("RESULT ALL IMPORT GOODS ORDER LIST BY CREATOR: ", result);
            dispatch({
                type: GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR,
                importedGoodsOrderListByCreatorAction: result
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

export const getAllExportGoodsOrderListAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderList();
            console.log("RESULT ALL EXPORT GOODS ORDER LIST: ", result);
            dispatch({
                type: GET_ALL_EXPORT_GOODS_ORDER_LIST,
                exportGoodsOrderListAction: result
            })
        } catch (error) {
            console.log('error', error)
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

export const uploadProductImageForSellerAction = (slug, filesName) => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.uploadProductImageForSeller(slug, filesName);
            console.log("RESULT UPLOAD PRODUCT IMAGE FOR SELLER: ", result.data.images[0].url);
            dispatch({
                type: UPLOAD_PRODUCT_IMAGE_FOR_SELLER,
                productUploadImageAction: result.data.images[0].url
            })
        } catch (error) {
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

export const searchImportGoodsFormForSellerByTimeRangeAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchImportGoodsFormForSellerByTimeRange();
            console.log("RESULT SEARCH IMPORTED GOODS FORM LIST BY TIME RANGE: ", result);
            dispatch({
                type: SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE,
                searchedImportedGoodsFormListByTimeRangeAction: result
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

