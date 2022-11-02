import { GET_ALL_DISTRICTS_BY_PROVINCE_ID, GET_ALL_PROVINCES, GET_ALL_WARDS_BY_DISTRICT_ID } from "../../type/address/AddressType"

const initialState = {
    provinces: [],
    districts: [],
    wards: []
}

export const AddressReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_PROVINCES:
            console.log("CÓ VÀO GET_ALL_PROVINCES")
            state.provinces = action.provinceList;
            return { ...state }

        case GET_ALL_DISTRICTS_BY_PROVINCE_ID:
            console.log("CÓ VÀO GET_ALL_DISTRICTS_BY_PROVINCE_ID");

            state.districts = action.districtList;
            console.log("STATE.DISTRICTS: ", state.districts);
            return { ...state }

        case GET_ALL_WARDS_BY_DISTRICT_ID:
            state.wards = action.wardList;
            return { ...state }

        default:
            return { ...state }
    }
}
