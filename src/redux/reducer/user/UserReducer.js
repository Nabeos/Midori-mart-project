import { ADD_NEW_USER_DEMO, CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP, GET_ALL_ROLE, GET_ALL_USER_LIST_FOR_ADMIN, GET_ALL_USER_LIST_LENGTH_FOR_ADMIN, GET_USER_DETAILED_INFORMATION_FOR_ADMIN, GET_USER_PROFILE_INFORMATION, SEARCH_USER_FOR_ADMIN, SEARCH_USER_LENGTH_FOR_ADMIN, SHOW_ADD_NEW_USER_FOR_ADMIN_POPUP, UPLOAD_IMAGE, UPLOAD_IMAGE_USER_IN_USER_MNGT, USER } from "../../type/user/UserType";

let defaultUser = {};
if (localStorage.getItem(USER)) {
    defaultUser = JSON.parse(localStorage.getItem(USER));
}
const initialState = {
    user: defaultUser,
    userProfileInfo: {},
    userListDemo: [],
    uploadAvatar: "",
    uploadAvatarUserInUserMngt: "",
    userListForAdmin: [],
    userListLengthForAdmin: [],
    roleList: [],
    userDetailedInfoForAdmin: {},
    searchUserListForAdmin: [],
    searchUserListLengthForAdmin: [],
    openAddNewUserForAdminPopup: false
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
            userListForAdminUpdate = action.userListForAdminAction;
            state.userListForAdmin = userListForAdminUpdate;
            return { ...state }

        case GET_ALL_USER_LIST_LENGTH_FOR_ADMIN:
            let userListLengthForAdminUpdate = [...state.userListLengthForAdmin];
            userListLengthForAdminUpdate = action.userListLengthForAdminAction;
            state.userListLengthForAdmin = userListLengthForAdminUpdate;
            return { ...state }

        case SEARCH_USER_FOR_ADMIN:
            let searchUserListForAdminUpdate = [...state.userListForAdmin];
            searchUserListForAdminUpdate = action.searchUserListForAdminAction;
            state.userListForAdmin = searchUserListForAdminUpdate;
            return { ...state }

        case SEARCH_USER_LENGTH_FOR_ADMIN:
            let searchUserListLengthForAdminUpdate = [...state.searchUserListLengthForAdmin];
            searchUserListLengthForAdminUpdate = action.searchUserListLengthForAdminAction;
            state.searchUserListLengthForAdmin = searchUserListLengthForAdminUpdate;
            return { ...state }

        case UPLOAD_IMAGE:
            let uploadAvatarUpdate = { ...state.uploadAvatar }
            uploadAvatarUpdate = action.uploadAvatarAction;
            state.uploadAvatar = action.uploadAvatarAction;
            return { ...state }

        case UPLOAD_IMAGE_USER_IN_USER_MNGT:
            let uploadAvatarUserInUserMngtUpdate = { ...state.uploadAvatarUserInUserMngt }
            uploadAvatarUserInUserMngtUpdate = action.uploadAvatarUserInUserMngtAction;
            state.uploadAvatarUserInUserMngt = uploadAvatarUserInUserMngtUpdate;
            return { ...state }

        case GET_ALL_ROLE:
            let roleListUpdate = { ...state.roleList };
            roleListUpdate = action.roleListAction;
            state.roleList = roleListUpdate;
            return { ...state }

        case ADD_NEW_USER_DEMO:
            let userListDemoUpdate = [...state.userListDemo];
            userListDemoUpdate.push(action.newUserDemoAction);
            state.userListDemo = userListDemoUpdate;
            return { ...state }

        case GET_USER_DETAILED_INFORMATION_FOR_ADMIN:
            let userDetailedInfoForAdminUpdate = { ...state.userDetailedInfoForAdmin };
            let fullnameUser = action.userDetailedInfoForAdminAction.fullname;
            state.uploadAvatarUserInUserMngt = action.userDetailedInfoForAdminAction.thumbnail;
            let countAdmin = 0;
            let desiredIndexAdmin = 0;
            for (let index = 0; index < fullnameUser.length; index++) {
                if (countAdmin == 0 && fullnameUser[index] == " ") {
                    desiredIndexAdmin = index;
                    countAdmin++;
                }
            }

            let userInfoCustomAdmin = {
                ...action.userDetailedInfoForAdminAction,
                lastName: fullnameUser.slice(0, desiredIndexAdmin),
                firstName: fullnameUser.slice(desiredIndexAdmin + 1, fullnameUser.length),
            };

            localStorage.setItem("lastNameUserDetailedAdmin", fullnameUser.slice(0, desiredIndexAdmin));
            localStorage.setItem("firstNameUserDetailedAdmin", fullnameUser.slice(desiredIndexAdmin + 1, fullnameUser.length));

            userDetailedInfoForAdminUpdate = userInfoCustomAdmin;
            // userDetailedInfoForAdminUpdate = action.userDetailedInfoForAdminAction;
            state.userDetailedInfoForAdmin = userDetailedInfoForAdminUpdate;
            return { ...state }

        case SHOW_ADD_NEW_USER_FOR_ADMIN_POPUP:
            state.openAddNewUserForAdminPopup = true;
            return { ...state }

        case CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP:
            state.openAddNewUserForAdminPopup = false;
            return { ...state }

        default:
            return { ...state }
    }
}
