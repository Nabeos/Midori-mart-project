import { baseService } from "./baseServices";

export class ProductManagementService extends baseService {
    constructor() {
        super();
    }

    getProductListByCategoryId = (categoryId, limit, offset) => {
        return this.get(`product-management/products?category=${categoryId}&limit=${limit}&offset=${offset}`);
    }

    getProductDetail = (slug) => {
        return this.get(`product-management/products/${slug}`);
    }

    searchProduct = (keyWord) => {
        return this.get(`product-management/search-product?title=${keyWord}`);
    }

}

export const productManagementService = new ProductManagementService();