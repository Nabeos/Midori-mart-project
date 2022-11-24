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

    searchProductForSeller = (keyWord) => {
        return this.get(`product-management/search-product?title=${keyWord}&offset=0&limit=1000`);
    }

    getAllMerchant = () => {
        return this.get(`api/merchants`);
    }

    searchImportGoodsFormForSellerByTimeRange = (firstDate, secondDate) => {
        return this.getSearchImportGoodsFormForSellerByTimeRange(`api/v1/received-notes?firstDate=${firstDate}&secondDate=${secondDate}&offset=0&limit=1000`);
    }

    searchImportGoodsFormForSellerByTimeRangeAndSeller = (userId, firstDate, secondDate) => {
        return this.getSearchImportGoodsFormForSellerByTimeRangeAndSeller(`api/v1/received-notes?user=${userId}&firstDate=${firstDate}&secondDate=${secondDate}&offset=0&limit=1000`);
    }

    searchExportGoodsFormForSeller = (keyWord) => {
        return this.get();
    }

    createNewImportGoodsForm = (newImportGoodsFormInfo) => {
        return this.postCreateNewImportGoodsForm(`api/v1/received-notes`, newImportGoodsFormInfo);
    }

    getAllImportGoodsOrderList = () => {
        return this.getAllImportGoodsOrderListApi(`api/v1/received-notes?offset=0&limit=1000`);
    }

    deleteImportGoodsOrder = (formId) => {
        return this.putDeleteImportGoodsOrder(`api/v1/received-notes?id=${formId}`);
    }

    getAllSellers = () => {
        return this.getAllSellersApi(`api/v1/user-management/users/sellers`);
    }

    getAllImportGoodsOrderListByCreator = (userId) => {
        return this.getAllImportGoodsOrderListByCreatorApi(`api/v1/received-notes/users?id=${userId}&offset=0&limit=1000`);
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

    getAllExportGoodsOrderList = () => {
        return this.get();
    }

    getExportGoodsOrderDetailedInformation = () => {
        return this.get();
    }

    updateExportGoodsOrderInformation = () => {
        return this.put();
    }

}

export const inventoryManagementService = new InventoryManagementService();