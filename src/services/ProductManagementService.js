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
        return this.get(`product-management/search-product?title=${keyWord}&offset=0&limit=1000`);
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

    getBestSellerProductsInHomePage = () => {
        return this.get(`products/best-sellers`);
    }

    getTopThreeBestSellerCategoriesInHomePage = () => {
        return this.get(`category-management/categories/bestseller`);
    }

    getTopTwentyBestSellerProductOfBestSellerCategories = (categoryId) => {
        return this.get(`product-management/products/best-seller?category=${categoryId}`);
    }

    getTopTwentyBestSellerProductOfSecondBestSellerCategories = (categoryId) => {
        return this.get(`product-management/products/best-seller?category=${categoryId}`);
    }

    getTopTwentyBestSellerProductOfThirdBestSellerCategories = (categoryId) => {
        return this.get(`product-management/products/best-seller?category=${categoryId}`);
    }

}

export const productManagementService = new ProductManagementService();