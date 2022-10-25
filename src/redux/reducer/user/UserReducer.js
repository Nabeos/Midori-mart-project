import { USER } from "../../type/user/UserType";

let defaultUser = {};
if (localStorage.getItem(USER)) {
    defaultUser = JSON.parse(localStorage.getItem(USER));
}
const initialState = {
    user: defaultUser
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case "first":
            return { ...state }

        default:
            return { ...state }
    }
}
