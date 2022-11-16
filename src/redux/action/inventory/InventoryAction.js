import axios from 'axios'
import { inventoryManagementService } from '../../../services/InventoryManagementService';

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

export const addNewProductForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.addNewProductForSeller();
            console.log("RESULT ADD NEW PRODUCT FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const deleteProductForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.deleteProductForSeller();
            console.log("RESULT DELETE PRODUCT FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
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

export const updateProductDetailedInformationForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.updateProductDetailedInformationForSeller();
            console.log("RESULT UPDATE PRODUCT INFO FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const searchProductForSellerAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.searchProductForSeller();
            console.log("RESULT SEARCH PRODUCT FOR SELLER: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const createNewImportGoodsFormAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.createNewImportGoodsForm();
            console.log("RESULT CREATE NEW IMPORT GOODS FORM: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllImportGoodsOrderListAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllImportGoodsOrderList();
            console.log("RESULT ALL IMPORT GOODS ORDER LIST: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getImportGoodsOrderDetailedInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getImportGoodsOrderDetailedInformation();
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

export const createNewExportGoodsFormAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.createNewExportGoodsForm();
            console.log("RESULT CREATE NEW EXPORT GOODS FORM: ", result);
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getAllExportGoodsOrderListAction = () => {
    return async (dispatch) => {
        try {
            const result = await inventoryManagementService.getAllExportGoodsOrderList();
            console.log("RESULT ALL EXPORT GOODS ORDER LIST: ", result);
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



