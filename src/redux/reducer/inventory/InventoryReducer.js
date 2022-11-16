import { ADD_NEW_PRODUCT_FOR_SELLER, CREATE_NEW_EXPORT_GOODS_FORM, CREATE_NEW_IMPORT_GOODS_FORM, DELETE_PRODUCT_FOR_SELLER, GET_ALL_EXPORT_GOODS_ORDER_LIST, GET_ALL_IMPORT_GOODS_ORDER_LIST, GET_ALL_PRODUCT_BY_CATEGORY_ID_FOR_SELLER, GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION, GET_PRODUCT_DETAILED_INFORMATION_FOR_SELLER, SEARCH_PRODUCT_FOR_SELLER, UPDATE_EXPORT_GOODS_ORDER_INFORMATION, UPDATE_IMPORT_GOODS_ORDER_INFORMATION, UPDATE_PRODUCT_DETAILED_INFORMATION_FOR_SELLER } from "../../type/inventory/InventoryType"

const initialState = {
    productListByCateIdForSeller: [],
    productDetailedInformationForSeller: {},
    importGoodsOrderList: [],
    importGoodsOrderDetailedInformation: {},
    exportGoodsOrderList: [],
    exportGoodsOrderDetailedInformation: {}
}

export const InventoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PRODUCT_BY_CATEGORY_ID_FOR_SELLER:

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
        case CREATE_NEW_IMPORT_GOODS_FORM:

            return { ...state }
        case GET_ALL_IMPORT_GOODS_ORDER_LIST:

            return { ...state }
        case GET_IMPORT_GOODS_ORDER_DETAILED_INFORMATION:

            return { ...state }
        case UPDATE_IMPORT_GOODS_ORDER_INFORMATION:

            return { ...state }
        case CREATE_NEW_EXPORT_GOODS_FORM:

            return { ...state }
        case GET_ALL_EXPORT_GOODS_ORDER_LIST:

            return { ...state }
        case GET_EXPORT_GOODS_ORDER_DETAILED_INFORMATION:

            return { ...state }
        case UPDATE_EXPORT_GOODS_ORDER_INFORMATION:

            return { ...state }

        default:
            return { ...state }
    }
}
