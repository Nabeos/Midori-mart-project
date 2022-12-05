import { baseService } from "./baseServices";

export class OrderManagementForCustomerService extends baseService {
    constructor() {
        super();
    }

    getAllCustomerSuccessfulOrder = (limit, offset) => {
        return this.getSuccessfulOrderCustomer(`api/v1/users/purchase?limit=${limit}&offset=${offset}&status=3`);
    }

    getAllInProgressOrder = (limit, offset) => {
        return this.getInProgressOrderCustomer(`api/v1/users/purchase?limit=${limit}&offset=${offset}&status=0`);
    }

    getAllCustomerOrderForCustomer = (limit, offset) => {
        return this.getCustomerOrderAll(`api/v1/users/purchase?limit=${limit}&offset=${offset}`);
    }

    cancelInProgressOrderForCustomer = (orderNumber, code) => {
        return this.putCancelInProgressOrderForCustomer(`api/user/purchases/${orderNumber}?code=${code}`);
    }

    createNewOrder = (newOrderInfo) => {
        return this.postCreateNewOrder(`api/payment-management/finishOrder`, newOrderInfo);
    }

}

export const orderManagementForCustomerService = new OrderManagementForCustomerService;