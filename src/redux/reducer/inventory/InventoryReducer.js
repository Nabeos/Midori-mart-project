import { history } from "../../../App";
import { ADD_NEW_PRODUCT_FOR_SELLER, ADD_PRODUCT_TEMPORARILY_TO_IMPORT_GOODS_FORM, CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, CLOSE_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM, CREATE_NEW_EXPORT_GOODS_FORM, CREATE_NEW_IMPORT_GOODS_FORM, DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, DELETE_PRODUCT_FOR_SELLER, DELETE_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, GET_ALL_EXPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_MERCHANT, GET_ALL_ORIGIN, GET_ALL_PRODUCT_BY_CATEGORY_ID_FOR_SELLER, GET_ALL_PRODUCT_LIST_FOR_SELLER, GET_ALL_PRODUCT_UNIT, GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_PRODUCT_DETAILED_INFORMATION_FOR_SELLER, SEARCH_EXPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE, SEARCH_PRODUCT_FOR_SELLER, SHOW_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, SHOW_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM, UPDATE_EXPORT_GOODS_ORDER_INFORMATION, UPDATE_IMPORT_GOODS_ORDER_INFORMATION, UPDATE_PRODUCT_DETAILED_INFORMATION_FOR_SELLER } from "../../type/inventory/InventoryType"

let defaultImportProductList = [];
if (localStorage.getItem("importProductList")) {
    defaultImportProductList = JSON.parse(localStorage.getItem("importProductList"));
} else if (!localStorage.getItem("importProductList")) {
    defaultImportProductList = [];
}
const initialState = {
    importProductList: defaultImportProductList,
    productListByCateIdForSeller: [],
    productDetailedInformationForSeller: {},
    importGoodsOrderList: [],
    importGoodsOrderDetailedInformation: {},
    exportGoodsOrderList: [],
    exportGoodsOrderDetailedInformation: {},
    allProductListForSeller: [],
    productUnitList: [],
    originList: [],
    merchantList: [],
    openAddNewProductForSellerModal: false,
    openAddProductIntoImportGoodsForm: false
}

export const InventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT_LIST_FOR_SELLER:
            let allProductListForSellerUpdate = [...state.allProductListForSeller];
            allProductListForSellerUpdate = action.allProductListForSellerAction;
            state.allProductListForSeller = allProductListForSellerUpdate;
            return { ...state }

        case GET_ALL_PRODUCT_BY_CATEGORY_ID_FOR_SELLER:

            return { ...state }

        case GET_ALL_PRODUCT_UNIT:
            let productUnitListUpdate = [...state.productUnitList];
            productUnitListUpdate = action.productUnitListAction;
            state.productUnitList = productUnitListUpdate;
            return { ...state }

        case GET_ALL_ORIGIN:
            let originListUpdate = [...state.originList];
            originListUpdate = action.originListAction;
            state.originList = originListUpdate;
            return { ...state }

        case SHOW_MODAL_ADD_NEW_PRODUCT_FOR_SELLER:
            state.openAddNewProductForSellerModal = true;
            return { ...state }

        case CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER:
            state.openAddNewProductForSellerModal = false;
            return { ...state }

        case ADD_NEW_PRODUCT_FOR_SELLER:

            return { ...state }
        case DELETE_PRODUCT_FOR_SELLER:

            return { ...state }
        case GET_PRODUCT_DETAILED_INFORMATION_FOR_SELLER:

            return { ...state }
        case UPDATE_PRODUCT_DETAILED_INFORMATION_FOR_SELLER:

            return { ...state }
        case SEARCH_PRODUCT_FOR_SELLER:

            return { ...state }

        case GET_ALL_MERCHANT:
            let merchantListUpdate = [...state.merchantList];
            merchantListUpdate = action.merchantListAction;
            state.merchantList = merchantListUpdate;
            return { ...state }

        case ADD_PRODUCT_TEMPORARILY_TO_IMPORT_GOODS_FORM:
            console.log("CÓ VÀO TEMPORARILY");
            let importProductListUpdate = [...state.importProductList];
            importProductListUpdate.push(action.importProductAction);
            state.importProductList = importProductListUpdate;
            state.openAddProductIntoImportGoodsForm = false;
            localStorage.setItem("importProductList", JSON.stringify(state.importProductList));
            return { ...state }

        case DELETE_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM:
            let importProductListRemoveUpdate = [...state.importProductList];
            let index = importProductListRemoveUpdate.findIndex(productItem => productItem.productId === action.deletedImportedProductId);
            if (index !== -1) {
                importProductListRemoveUpdate.splice(index, 1);
            }
            state.importProductList = importProductListRemoveUpdate;
            localStorage.setItem("importProductList", JSON.stringify(state.importProductList));
            return { ...state }

        case DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM:
            localStorage.removeItem("importProductList");
            history.push("/inventorymanagement");
            window.location.reload();
            return { ...state }

        case SHOW_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM:
            state.openAddProductIntoImportGoodsForm = true;
            return { ...state }

        case CLOSE_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM:
            state.openAddProductIntoImportGoodsForm = false;
            return { ...state }

        case CREATE_NEW_IMPORT_GOODS_FORM:

            return { ...state }
        case GET_ALL_IMPORT_GOODS_ORDER_LIST:
            let importGoodsOrderListUpdate = [...state.importGoodsOrderList];
            importGoodsOrderListUpdate = action.importedGoodsOrderListAction;
            state.importGoodsOrderList = importGoodsOrderListUpdate;
            return { ...state }

        case GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR:
            let importGoodsOrderListByCreatorUpdate = [...state.importGoodsOrderList];
            importGoodsOrderListByCreatorUpdate = action.importedGoodsOrderListByCreatorAction;
            state.importGoodsOrderList = importGoodsOrderListByCreatorUpdate;
            return { ...state }

        case SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE:
            let searchedImportedGoodsFormListByTimeRangeUpdate = [...state.importGoodsOrderList];
            searchedImportedGoodsFormListByTimeRangeUpdate = action.searchedImportedGoodsFormListByTimeRangeAction;
            state.importGoodsOrderList = searchedImportedGoodsFormListByTimeRangeUpdate;
            return { ...state }

        case GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION:
            let importGoodsOrderDetailedInformationUpdate = { ...state.importGoodsOrderDetailedInformation };
            importGoodsOrderDetailedInformationUpdate = action.importGoodsOrderDetailedInformationAction;
            state.importGoodsOrderDetailedInformation = importGoodsOrderDetailedInformationUpdate;
            return { ...state }

        case UPDATE_IMPORT_GOODS_ORDER_INFORMATION:

            return { ...state }
        case CREATE_NEW_EXPORT_GOODS_FORM:

            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST:
            let exportGoodsOrderListUpdate = [...state.exportGoodsOrderList];
            exportGoodsOrderListUpdate = action.exportGoodsOrderListAction;
            state.exportGoodsOrderList = exportGoodsOrderListUpdate;
            return { ...state }

        case SEARCH_EXPORT_GOODS_FORM_FOR_SELLER:
            let searchedExportGoodsOrderListUpdate = [...state.exportGoodsOrderList];
            searchedExportGoodsOrderListUpdate = action.searchedExportedGoodsFormListAction;
            state.exportGoodsOrderList = searchedExportGoodsOrderListUpdate;
            return { ...state }

        case GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION:

            return { ...state }
        case UPDATE_EXPORT_GOODS_ORDER_INFORMATION:

            return { ...state }

        default:
            return { ...state }
    }
}
