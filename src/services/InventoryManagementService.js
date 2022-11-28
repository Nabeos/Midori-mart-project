import { baseService } from "./baseServices";

export class InventoryManagementService extends baseService {
    constructor() {
        super();
    }

    getAllProductListForSeller = () => {
        return this.get(`product-management/products?limit=1000&offset=0`);
    }

    getProductListByCategoryIdForSeller = () => {
        return this.get();
    }

    getAllProductUnit = () => {
        return this.get(`api/units`);
    }

    getAllOrigin = () => {
        return this.get(`api/countries`);
    }

    addNewProductForSeller = (newProductInfo) => {
        return this.postAddNewProductForSeller(`api/v1/product-management/products`, newProductInfo);
    }

    deleteProductForSeller = (productId) => {
        return this.putDeleteProductForSeller(`api/v1/product-management/products/${productId}`);
    }

    uploadProductImageForSeller = (slug, filesName) => {
        return this.postUploadProductImageForSeller(`api/v1/product-management/products/${slug}/images`, filesName);
    }

    getProductDetailedInformationForSeller = () => {
        return this.get();
    }

    updateProductDetailedInformationForSeller = (slug, updatedProductInfo) => {
        return this.putUpdateProductDetailedInformationForSeller(`api/v1/product-management/product/${slug}`, updatedProductInfo);
    }

    searchProductForSeller = (keyWord, offset, limit) => {
        return this.get(`product-management/search-product?title=${keyWord}&offset=${offset}&limit=${limit}`);
    }

    getAllMerchant = () => {
        return this.get(`api/merchants`);
    }

    searchImportGoodsFormForSellerByTimeRange = (firstDate, secondDate, offset, limit) => {
        return this.getSearchImportGoodsFormForSellerByTimeRange(`api/v1/received-notes?firstDate=${firstDate}&secondDate=${secondDate}&offset=${offset}&limit=${limit}`);
    }

    searchImportGoodsFormForSellerByTimeRangeAndSeller = (userId, firstDate, secondDate, offset, limit) => {
        return this.getSearchImportGoodsFormForSellerByTimeRangeAndSeller(`api/v1/received-notes?user=${userId}&firstDate=${firstDate}&secondDate=${secondDate}&offset=${offset}&limit=${limit}`);
    }

    searchExportGoodsFormForSeller = (keyWord) => {
        return this.get();
    }

    createNewImportGoodsForm = (newImportGoodsFormInfo) => {
        return this.postCreateNewImportGoodsForm(`api/v1/received-notes`, newImportGoodsFormInfo);
    }

    getAllImportGoodsOrderList = (offset, limit) => {
        return this.getAllImportGoodsOrderListApi(`api/v1/received-notes?offset=${offset}&limit=${limit}`);
    }

    deleteImportGoodsOrder = (formId) => {
        return this.putDeleteImportGoodsOrder(`api/v1/received-notes?id=${formId}`);
    }

    deleteExportGoodsOrder = (formId) => {
        return this.putDeleteExportGoodsOrder(`api/v1/delivery-notes?id=${formId}`);
    }

    getAllSellers = () => {
        return this.getAllSellersApi(`api/v1/user-management/users/sellers`);
    }

    getAllImportGoodsOrderListByCreator = (userId, offset, limit) => {
        return this.getAllImportGoodsOrderListByCreatorApi(`api/v1/received-notes/users?id=${userId}&offset=${offset}&limit=${limit}`);
    }

    getImportGoodsOrderDetailedInformation = () => {
        return this.get();
    }

    updateImportGoodsOrderInformation = () => {
        return this.put();
    }

    createNewExportGoodsForm = () => {
        return this.post();
    }

    searchExportGoodsFormForSellerByTimeRange = (firstDate, secondDate) => {
        return this.getSearchExportGoodsFormForSellerByTimeRange(`api/v1/delivery-notes?firstDate=${firstDate}&secondDate=${secondDate}&offset=0&limit=1000`);
    }

    searchExportGoodsFormForSellerByTimeRangeAndSeller = (userId, firstDate, secondDate) => {
        return this.getSearchExportGoodsFormForSellerByTimeRangeAndSeller(`api/v1/delivery-notes?user=${userId}&firstDate=${firstDate}&secondDate=${secondDate}&offset=0&limit=1000`);
    }

    getAllExportGoodsOrderList = () => {
        return this.getAllExportGoodsOrderListApi(`api/v1/delivery-notes?offset=0&limit=1000`);
    }

    getAllExportGoodsOrderListByCreator = (userId) => {
        return this.getAllExportGoodsOrderListByCreatorApi(`api/v1/delivery-notes?user=${userId}&offset=0&limit=1000`);
    }

    getExportGoodsOrderDetailedInformation = () => {
        return this.get();
    }

    updateExportGoodsOrderInformation = () => {
        return this.put();
    }

}

export const inventoryManagementService = new InventoryManagementService();