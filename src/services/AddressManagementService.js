import { baseService } from "./baseServices";

export class AddressManagementServices extends baseService {
    constructor() {
        super();
    }

    getAllProvinces = () => {
        return this.get("api/provinces");
    }

    getAllDistrictsByProvinceId = (provinceId) => {
        return this.get(`api/provinces/${provinceId}/districts`);
    }

    getAllWardsByDistrictId = (districtId) => {
        return this.get(`api/districts/${districtId}/wards`);
    }

}

export const addressManagementServices = new AddressManagementServices();