import { history } from "../../../App";
import { userManagementService } from "../../../services/UserManagementService";
import { TOKEN } from "../../../utils/settings/config";
import { GET_USER_PROFILE_INFORMATION, LOGIN, UPDATE_USER_PROFILE_INFORMATION, USER } from "../../type/user/UserType";
import Swal from 'sweetalert2'

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
            history.push("/");
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
            dispatch({
                type: GET_USER_PROFILE_INFORMATION,
                userInfo: result.data.user
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const updateUserProfileInformationAction = (userId, userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.updateUserProfile(userId, userInfo);
            console.log("RESULT UPDATE USER PROFILE: ", result);
            dispatch({
                type: UPDATE_USER_PROFILE_INFORMATION,
                updatedUserInfo: ""
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}