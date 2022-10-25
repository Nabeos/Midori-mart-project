import { baseService } from "./baseServices";

export class ProductManagementService extends baseService {
    constructor() {
        super();
    }

    getProductListByCategoryId = (categoryId, limit, offset) => {
        return this.get(`api/productManagement/getProductsByCategoryId?category=${categoryId}&limit=${limit}&offset=${offset}`);
    }

    getProductDetail = (slug) => {
        return this.get(`api/productManagement/${slug}`);
    }

    searchProduct = (keyWord) => {
        return this.get(`api/productManagement/searchProduct?title=${keyWord}`);
    }

}

export const productManagementService = new ProductManagementService();