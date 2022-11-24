import Axios from "axios"
import { DOMAIN_CAPSTONE, TOKEN } from "../utils/settings/config"


export class baseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            data: model,
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putDeleteImportGoodsOrder = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putUpdateProductDetailedInformationForSeller = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putDeleteProductForSeller = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }



    putActivateUserAccount = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putDeactivateUserAccount = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putUpdateCustomerOrderForSeller = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putCancelInProgressOrderForCustomer = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            // headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putUpdateUserProfile = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    putUpdateComment = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            // headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postCreateNewImportGoodsForm = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postAddNewProductForSeller = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postUploadProductImageForSeller = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postAddNewUserForAdmin = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postCreateNewOrder = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postComment = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postLogin = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            // headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postUploadImage = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postChangePassword = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    get = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getAllImportGoodsOrderListApi = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getSearchUserForAdmin = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getAllUserListForAdminApi = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getAllRole = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getAllCustomerOrderForSeller = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getSuccessfulOrderCustomer = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getInProgressOrderCustomer = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    getCustomerOrderAll = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }


    getUserProfileApi = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'DELETE',
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }
}