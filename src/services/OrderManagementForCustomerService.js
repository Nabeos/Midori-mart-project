import { baseService } from "./baseServices";

export class OrderManagementForCustomerService extends baseService {
    constructor() {
        super();
    }

    getAllCustomerSuccessfulOrder = () => {
        return this.getSuccessfulOrderCustomer(`api/v1/users/purchase?limit=1000&offset=0&status=3`);
    }

    getAllInProgressOrder = () => {
        return this.getInProgressOrderCustomer(`api/v1/users/purchase?limit=1000&offset=0&status=0`);
    }

    getAllCustomerOrderForCustomer = () => {
        return this.getCustomerOrderAll(`api/v1/users/purchase?limit=1000&offset=0`);
    }

    cancelInProgressOrderForCustomer = (orderNumber) => {
        return this.putCancelInProgressOrderForCustomer(`api/user/purchases/${orderNumber}`);
    }

    createNewOrder = (newOrderInfo) => {
        return this.post(`api/payment-management/finishOrder`, newOrderInfo);
    }

}

export const orderManagementForCustomerService = new OrderManagementForCustomerService;