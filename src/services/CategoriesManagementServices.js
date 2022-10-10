import { baseService } from "./baseServices";

export class CategoriesManagementServices extends baseService {
    constructor() {
        super();
    }

    getAllCategories = () => {
        return this.get(`api/productManagement/getAllCategories`);
    }

}

export const categoriesManagementServices = new CategoriesManagementServices();