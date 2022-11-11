import { baseService } from "./baseServices";

export class CategoriesManagementServices extends baseService {
    constructor() {
        super();
    }

    getAllCategories = () => {
        return this.get(`category-management/categories`);
    }

    getBestSellerCategories = () => {
        return this.get();
    }

}

export const categoriesManagementServices = new CategoriesManagementServices();