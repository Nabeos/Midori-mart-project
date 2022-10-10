import { baseService } from "./baseServices";

export class ProductManagementService extends baseService {
    constructor() {
        super();
    }

    getProductListByCategoryId = (categoryId, limit, offset) => {
        return this.get(`api/productManagement/getProductsById?category=${categoryId}&limit=${limit}&offset=${offset}`);
    }

}

export const productManagementService = new ProductManagementService();