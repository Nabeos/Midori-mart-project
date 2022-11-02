import { GET_USER_PROFILE_INFORMATION, USER } from "../../type/user/UserType";

let defaultUser = {};
if (localStorage.getItem(USER)) {
    defaultUser = JSON.parse(localStorage.getItem(USER));
}
const initialState = {
    user: defaultUser,
    userProfileInfo: {}
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_PROFILE_INFORMATION:
            let userProfileInfoUpdate = { ...state.userProfileInfo };
            let fullname = action.userInfo.fullname; //new
            let count = 0;
            let desiredIndex = 0;
            for (let index = 0; index < fullname.length; index++) {
                if (count == 0 && fullname[index] == " ") {
                    desiredIndex = index;
                    count++;
                }
            }
            let userInfoCustom = {
                ...action.userInfo,
                lastName: fullname.slice(0, desiredIndex),
                firstName: fullname.slice(desiredIndex + 1, fullname.length)
            };
            userProfileInfoUpdate = userInfoCustom;
            state.userProfileInfo = userProfileInfoUpdate;
            return { ...state }

        default:
            return { ...state }
    }
}
