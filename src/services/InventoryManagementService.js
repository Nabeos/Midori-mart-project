import { baseService } from "./baseServices";

export class InventoryManagementService extends baseService {
    constructor() {
        super();
    }

    getProductListByCategoryIdForSeller = () => {
        return this.get();
    }

    addNewProductForSeller = () => {
        return this.post();
    }

    deleteProductForSeller = () => {
        return this.put();
    }

    getProductDetailedInformationForSeller = () => {
        return this.get();
    }

    updateProductDetailedInformationForSeller = () => {
        return this.put();
    }

    searchProductForSeller = () => {
        return this.get();
    }

    createNewImportGoodsForm = () => {
        return this.post();
    }

    getAllImportGoodsOrderList = () => {
        return this.get();
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