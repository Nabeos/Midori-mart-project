import axios from 'axios'
import { addressManagementServices } from '../../../services/AddressManagementService';
import { GET_ALL_DISTRICTS_BY_PROVINCE_ID, GET_ALL_PROVINCES, GET_ALL_WARDS_BY_DISTRICT_ID } from '../../type/address/AddressType';

export const getAllProvincesAction = () => {
    return async (dispatch) => {
        try {
            const result = await addressManagementServices.getAllProvinces();
            dispatch({
                type: GET_ALL_PROVINCES,
                provinceList: result.data.provinces
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllDistrictsByProvinceIdAction = (provinceId) => {
    return async (dispatch) => {
        try {
            const result = await addressManagementServices.getAllDistrictsByProvinceId(provinceId);
            console.log("DISTRICT LIST ACTION: ", result.data.districts);
            dispatch({
                type: GET_ALL_DISTRICTS_BY_PROVINCE_ID,
                districtList: result.data.districts
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllWardsByDistrictIdAction = (districtId) => {
    return async (dispatch) => {
        try {
            const result = await addressManagementServices.getAllWardsByDistrictId(districtId);
            console.log("RESULT WARDS: ", result.data.wards);
            dispatch({
                type: GET_ALL_WARDS_BY_DISTRICT_ID,
                wardList: result.data.wards
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}



