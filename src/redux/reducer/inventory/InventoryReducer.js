import { history } from "../../../App";
import { ADD_NEW_PRODUCT_FOR_SELLER, ADD_PRODUCT_TEMPORARILY_TO_IMPORT_GOODS_FORM, CLOSE_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, CLOSE_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM, CREATE_NEW_EXPORT_GOODS_FORM, CREATE_NEW_IMPORT_GOODS_FORM, DELETE_ALL_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, DELETE_PRODUCT_FOR_SELLER, DELETE_PRODUCT_TEMPORARILY_FROM_IMPORT_GOODS_FORM, GET_ALL_EXPORT_GOODS_ORDER_LIST, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE, GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE_AND_SELLER, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE, GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE_AND_SELLER, GET_ALL_IMPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR, GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH, GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR, GET_ALL_MERCHANT, GET_ALL_ORIGIN, GET_ALL_PRODUCT_BY_CATEGORY_ID_FOR_SELLER, GET_ALL_PRODUCT_LIST_FOR_SELLER, GET_ALL_PRODUCT_UNIT, GET_ALL_SELLERS, GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_PRODUCT_DETAILED_INFORMATION_FOR_SELLER, NAVIGATE_TO_IMPORT_PAGE, SEARCH_EXPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE, SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE_AND_SELLER, SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE, SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE_AND_SELLER, SEARCH_PRODUCT_FOR_SELLER, SHOW_MODAL_ADD_NEW_PRODUCT_FOR_SELLER, SHOW_MODAL_ADD_PRODUCT_INTO_IMPORT_GOODS_FORM, UPDATE_EXPORT_GOODS_ORDER_INFORMATION, UPDATE_IMPORT_GOODS_ORDER_INFORMATION, UPDATE_PRODUCT_DETAILED_INFORMATION_FOR_SELLER } from "../../type/inventory/InventoryType"

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
    importedGoodsOrderListLength: [],
    importedGoodsOrderListLengthByCreator: [],
    importGoodsOrderDetailedInformation: {},
    exportGoodsOrderList: [],
    exportGoodsOrderListLength: [],
    exportedGoodsOrderListLengthByCreator: [],
    exportGoodsOrderDetailedInformation: {},
    allProductListForSeller: [],
    productUnitList: [],
    originList: [],
    merchantList: [],
    sellerList: [],
    defaultActiveKeyValueInventory: 1,
    openAddNewProductForSellerModal: false,
    openAddProductIntoImportGoodsForm: false
}

export const InventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATE_TO_IMPORT_PAGE:
            state.defaultActiveKeyValueInventory = 2;
            return { ...state }
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

        case GET_ALL_SELLERS:
            let sellerListUpdate = [...state.sellerList];
            sellerListUpdate = action.sellerListAction;
            state.sellerList = sellerListUpdate;
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
            history.push("/inventorymanagement");
            window.location.reload();
            // localStorage.setItem("defaultActiveKeyValueInventory", 2);
            localStorage.removeItem("importProductList");
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

        case GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH:
            let importedGoodsOrderListLengthUpdate = [...state.importedGoodsOrderListLength];
            importedGoodsOrderListLengthUpdate = action.importedGoodsOrderListLengthAction;
            state.importedGoodsOrderListLength = importedGoodsOrderListLengthUpdate;
            return { ...state }

        case GET_ALL_IMPORT_GOODS_ORDER_LIST_BY_CREATOR:
            let importGoodsOrderListByCreatorUpdate = [...state.importGoodsOrderList];
            importGoodsOrderListByCreatorUpdate = action.importedGoodsOrderListByCreatorAction;
            state.importGoodsOrderList = importGoodsOrderListByCreatorUpdate;
            return { ...state }

        case GET_ALL_IMPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR:
            let importedGoodsOrderListLengthByCreatorUpdate = [...state.importedGoodsOrderListLengthByCreator];
            importedGoodsOrderListLengthByCreatorUpdate = action.importedGoodsOrderListLengthByCreatorAction;
            state.importedGoodsOrderListLengthByCreator = importedGoodsOrderListLengthByCreatorUpdate;
            return { ...state }

        case SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE:
            let searchedImportedGoodsFormListByTimeRangeUpdate = [...state.importGoodsOrderList];
            searchedImportedGoodsFormListByTimeRangeUpdate = action.searchedImportedGoodsFormListByTimeRangeAction;
            state.importGoodsOrderList = searchedImportedGoodsFormListByTimeRangeUpdate;
            return { ...state }

        case SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE:
            let searchedImportedGoodsFormListLengthByTimeRangeUpdate = [...state.importedGoodsOrderListLength];
            searchedImportedGoodsFormListLengthByTimeRangeUpdate = action.searchedImportedGoodsFormListLengthByTimeRangeAction;
            state.importedGoodsOrderListLength = searchedImportedGoodsFormListLengthByTimeRangeUpdate;
            return { ...state }

        case SEARCH_IMPORT_GOODS_FORM_FOR_SELLER_BY_TIME_RANGE_AND_SELLER:
            let searchedImportedGoodsFormListByTimeRangeAndSellerUpdate = [...state.importGoodsOrderList];
            searchedImportedGoodsFormListByTimeRangeAndSellerUpdate = action.searchedImportedGoodsFormListByTimeRangeAndSellerAction;
            state.importGoodsOrderList = searchedImportedGoodsFormListByTimeRangeAndSellerUpdate;
            return { ...state }

        case SEARCH_IMPORT_GOODS_FORM_LENGTH_FOR_SELLER_BY_TIME_RANGE_AND_SELLER:
            let searchedImportedGoodsFormListLengthByTimeRangeAndSellerUpdate = [...state.importedGoodsOrderListLengthByCreator];
            searchedImportedGoodsFormListLengthByTimeRangeAndSellerUpdate = action.searchedImportedGoodsFormListLengthByTimeRangeAndSellerAction;
            state.importedGoodsOrderListLengthByCreator = searchedImportedGoodsFormListLengthByTimeRangeAndSellerUpdate;
            return { ...state }

        case GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION:
            let importGoodsOrderDetailedInformationUpdate = { ...state.importGoodsOrderDetailedInformation };
            importGoodsOrderDetailedInformationUpdate = action.detailedImportGoodsFormInfoAction;
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
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH:
            let exportGoodsOrderListLengthUpdate = [...state.exportGoodsOrderListLength];
            exportGoodsOrderListLengthUpdate = action.exportGoodsOrderListLengthAction;
            state.exportGoodsOrderListLength = exportGoodsOrderListLengthUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_CREATOR:
            let exportedGoodsOrderListByCreatorUpdate = [...state.exportGoodsOrderList];
            exportedGoodsOrderListByCreatorUpdate = action.exportedGoodsOrderListByCreatorAction;
            state.exportGoodsOrderList = exportedGoodsOrderListByCreatorUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_CREATOR:
            let exportedGoodsOrderListLengthByCreatorUpdate = [...state.exportedGoodsOrderListLengthByCreator];
            exportedGoodsOrderListLengthByCreatorUpdate = action.exportedGoodsOrderListLengthByCreatorAction;
            state.exportedGoodsOrderListLengthByCreator = exportedGoodsOrderListLengthByCreatorUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE:
            let searchedExportedGoodsFormListByTimeRangeUpdate = [...state.exportGoodsOrderList];
            searchedExportedGoodsFormListByTimeRangeUpdate = action.searchedExportedGoodsFormListByTimeRangeAction;
            state.exportGoodsOrderList = searchedExportedGoodsFormListByTimeRangeUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE:
            let searchedExportedGoodsFormListLengthByTimeRangeUpdate = [...state.exportGoodsOrderListLength];
            searchedExportedGoodsFormListLengthByTimeRangeUpdate = action.searchedExportedGoodsFormListLengthByTimeRangeAction;
            state.exportGoodsOrderListLength = searchedExportedGoodsFormListLengthByTimeRangeUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_BY_TIME_RANGE_AND_SELLER:
            let searchedExportedGoodsFormListByTimeRangeAndSellerUpdate = [...state.exportGoodsOrderList];
            searchedExportedGoodsFormListByTimeRangeAndSellerUpdate = action.searchedExportedGoodsFormListByTimeRangeAndSellerAction;
            state.exportGoodsOrderList = searchedExportedGoodsFormListByTimeRangeAndSellerUpdate;
            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST_LENGTH_BY_TIME_RANGE_AND_SELLER:
            let searchedExportedGoodsFormListLengthByTimeRangeAndSellerUpdate = [...state.exportedGoodsOrderListLengthByCreator];
            searchedExportedGoodsFormListLengthByTimeRangeAndSellerUpdate = action.searchedExportedGoodsFormListLengthByTimeRangeAndSellerAction;
            state.exportedGoodsOrderListLengthByCreator = searchedExportedGoodsFormListLengthByTimeRangeAndSellerUpdate;
            return { ...state }

        case SEARCH_EXPORT_GOODS_FORM_FOR_SELLER:
            let searchedExportGoodsOrderListUpdate = [...state.exportGoodsOrderList];
            searchedExportGoodsOrderListUpdate = action.searchedExportedGoodsFormListAction;
            state.exportGoodsOrderList = searchedExportGoodsOrderListUpdate;
            return { ...state }

        case GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION:
            let exportGoodsOrderDetailedInformationUpdate = { ...state.exportGoodsOrderDetailedInformation };
            exportGoodsOrderDetailedInformationUpdate = action.detailedExportGoodsFormInfoAction;
            state.exportGoodsOrderDetailedInformation = exportGoodsOrderDetailedInformationUpdate;
            return { ...state }
        case UPDATE_EXPORT_GOODS_ORDER_INFORMATION:

            return { ...state }

        default:
            return { ...state }
    }
}
