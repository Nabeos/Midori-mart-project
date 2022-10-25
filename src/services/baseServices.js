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

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'POST',
            data: model,
            // headers: { 'Authorization': 'Token ' + localStorage.getItem(TOKEN) } //JWT
        })
    }

    postLogin = (url, model) => {
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

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_CAPSTONE}/${url}`,
            method: 'DELETE',
            // headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) } //JWT
        })
    }
}