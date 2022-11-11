import { baseService } from "./baseServices";

export class OrderManagementForSellerService extends baseService {
    constructor() {
        super();
    }

    getAllCustomerOrder = (limit, offset, statusOrder) => {
        return this.getAllCustomerOrderForSeller(`api/v1/order-management/orders?limit=${limit}&offset=${offset}&status=${statusOrder}`);
    }

    updateCustomerOrderForSeller = (orderNumber, status) => {
        return this.putUpdateCustomerOrderForSeller(`api/v1/order-management/${orderNumber}?status=${status}`);
    }


}

export const orderManagementForSellerService = new OrderManagementForSellerService;