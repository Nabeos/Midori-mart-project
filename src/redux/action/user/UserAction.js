import { history } from "../../../App";
import { userManagementService } from "../../../services/UserManagementService";
import { TOKEN } from "../../../utils/settings/config";
import { CHANGE_PASSWORD, GET_ALL_ROLE, GET_ALL_USER_LIST_FOR_ADMIN, GET_USER_PROFILE_INFORMATION, LOGIN, RESET_PASSWORD, UPDATE_USER_PROFILE_INFORMATION, UPLOAD_IMAGE, USER } from "../../type/user/UserType";
import Swal from 'sweetalert2'
import { imageManagementServices } from "../../../services/ImageManagementService";
import { notification } from "antd";

export const loginAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.login(userInfo);
            console.log("result login: ", result);
            localStorage.setItem(TOKEN, result.data.user.token);
            localStorage.setItem(USER, JSON.stringify(result.data.user));
            dispatch({
                type: LOGIN,
                userInfo: result
            })
            if (result.data.user.roleId == 1) {
                console.log("CÓ VÀO 1");
                history.push("/usermanagement");
            } else if (result.data.user.roleId == 2) {
                console.log("CÓ VÀO 2");
                history.push("/");
            } else if (result.data.user.roleId == 4) {
                console.log("CÓ VÀO 4");
                history.push("/ordermanagement");
            }

        } catch (error) {
            console.log('error', error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Quý khách nhập sai email hoặc mật khẩu !!!',
            })
        }
    }
}

export const registerAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.register(userInfo);
            console.log("result register: ", result);
            Swal.fire({
                icon: 'success',
                title: 'Chúc mừng !!!',
                text: 'Quý khách đăng ký tài khoản thành công !!!',
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push("/login");
                }
            })
        } catch (error) {
            console.log('error', error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Quý khách đăng ký tài khoản thất bại !!!',
            })
        }
    }
}

export const getUserProfileInformationAction = () => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.getUserProfile();
            console.log("RESULT USER PROFILE: ", result.data.user);
            dispatch({
                type: GET_USER_PROFILE_INFORMATION,
                userInfo: result.data.user,
                // districtIdAction: result.data.user.address.districtId
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

const openNotification = (placement) => {
    notification.success({
        message: `Cập nhật thông tin cá nhân thành công`,
        placement,
        duration: 2
    });
};

export const updateUserProfileInformationAction = (userId, userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.updateUserProfile(userId, userInfo);
            console.log("RESULT UPDATE USER PROFILE: ", result);
            // alert("Thành công !!!");
            // dispatch({
            //     type: UPDATE_USER_PROFILE_INFORMATION,
            //     updatedUserInfo: ""
            // })
            openNotification('bottomRight')
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const addNewUserForAdminAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.addNewUserForAdmin(userInfo);
            console.log("RESULT ADD NEW USER FOR ADMIN: ", result);
            // dispatch({
            //     type: UPDATE_USER_PROFILE_INFORMATION,
            //     updatedUserInfo: ""
            // })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllUserListForAdminAction = () => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.getAllUserListForAdmin();
            console.log("RESULT GET ALL USER LIST FOR ADMIN: ", result);
            dispatch({
                type: GET_ALL_USER_LIST_FOR_ADMIN,
                userListForAdminAction: result
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const resetPasswordAction = () => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.resetPassword();
            console.log("RESULT RESET PASSWORD: ", result);
            dispatch({
                type: RESET_PASSWORD
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const changePasswordAction = () => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.changePassword();
            console.log("RESULT CHANGE PASSWORD: ", result);
            dispatch({
                type: CHANGE_PASSWORD
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const uploadImageAction = (filesName) => {
    return async (dispatch) => {
        try {
            const result = await imageManagementServices.uploadAvatar(filesName);
            console.log("RESULT UPLOAD IMAGE: ", result.data.images[0].url);
            dispatch({
                type: UPLOAD_IMAGE,
                uploadAvatarAction: result.data.images[0].url
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllRoleInMidoriAction = () => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.getAllRoleInMidori();
            console.log("RESULT GET ALL ROLE IN MIDORI: ", result);
            dispatch({
                type: GET_ALL_ROLE,
                roleListAction: result
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}