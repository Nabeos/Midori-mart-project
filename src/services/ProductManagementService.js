import { baseService } from "./baseServices";

export class ProductManagementService extends baseService {
    constructor() {
        super();
    }

    getProductListByCategoryId = (categoryId, limit, offset) => {
        return this.get(`api/productManagement/getProductsById?category=${categoryId}&limit=${limit}&offset=${offset}`);
    }

    getProductDetail = (productId) => {
        return this.get();
    }

}

export const productManagementService = new ProductManagementService();