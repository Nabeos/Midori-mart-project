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

    getBestSellerProductListByCategoryId = (categoryId) => {
        return this.get(`product-management/products/categories/${categoryId}/best-seller`);
    }

    sortProductListByPriceAsc = (categoryId, limit, offset) => {
        return this.get(`product-management/products?category=${categoryId}&priceAsc=asc&limit=${limit}&offset=${offset}`);
    }

    sortProductListByPriceDesc = (categoryId, limit, offset) => {
        return this.get(`product-management/products?category=${categoryId}&priceDesc=desc&limit=${limit}&offset=${offset}`);
    }

}

export const productManagementService = new ProductManagementService();