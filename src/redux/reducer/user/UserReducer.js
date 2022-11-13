import { GET_ALL_ROLE, GET_ALL_USER_LIST_FOR_ADMIN, GET_USER_PROFILE_INFORMATION, UPLOAD_IMAGE, USER } from "../../type/user/UserType";

let defaultUser = {};
if (localStorage.getItem(USER)) {
    defaultUser = JSON.parse(localStorage.getItem(USER));
}
const initialState = {
    user: defaultUser,
    userProfileInfo: {},
    uploadAvatar: "",
    userListForAdmin: [],
    roleList: []
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_USER_PROFILE_INFORMATION:
            let userProfileInfoUpdate = { ...state.userProfileInfo };
            let fullname = action.userInfo.fullname; //new
            state.uploadAvatar = action.userInfo.thumbnail;
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
                firstName: fullname.slice(desiredIndex + 1, fullname.length),
            };

            userProfileInfoUpdate = userInfoCustom;
            state.userProfileInfo = userProfileInfoUpdate;
            return { ...state }

        case GET_ALL_USER_LIST_FOR_ADMIN:
            let userListForAdminUpdate = [...state.userListForAdmin];
            state.userListForAdmin = action.userListForAdminAction;
            state.userListForAdmin = userListForAdminUpdate;
            return { ...state }

        case UPLOAD_IMAGE:
            let uploadAvatarUpdate = { ...state.uploadAvatar }
            uploadAvatarUpdate = action.uploadAvatarAction;
            state.uploadAvatar = action.uploadAvatarAction;
            return { ...state }

        case GET_ALL_ROLE:
            let roleListUpdate = { ...state.roleList };
            roleListUpdate = action.roleListAction;
            state.roleList = roleListUpdate;
            return { ...state }

        default:
            return { ...state }
    }
}
