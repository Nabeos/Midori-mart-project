import { history } from "../../../App";
import { userManagementService } from "../../../services/UserManagementService";
import { TOKEN } from "../../../utils/settings/config";
import { CHANGE_PASSWORD, CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP, GET_ALL_ROLE, GET_ALL_USER_LIST_FOR_ADMIN, GET_ALL_USER_LIST_LENGTH_FOR_ADMIN, GET_USER_PROFILE_INFORMATION, LOGIN, RESET_PASSWORD, SEARCH_USER_FOR_ADMIN, SEARCH_USER_LENGTH_FOR_ADMIN, UPDATE_USER_PROFILE_INFORMATION, UPLOAD_IMAGE, UPLOAD_IMAGE_USER_IN_USER_MNGT, USER } from "../../type/user/UserType";
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
            if (result.data.user.roleId == 1 && result.data.user.status == "Đang hoạt động") {
                console.log("CÓ VÀO 1");
                history.push("/usermanagement");
            } else if (result.data.user.roleId == 2 && result.data.user.status == "Đang hoạt động") {
                console.log("CÓ VÀO 2");
                history.push("/");
            } else if (result.data.user.roleId == 4 && result.data.user.status == "Đang hoạt động") {
                console.log("CÓ VÀO 4");
                history.push("/ordermanagement");
            } else if (result.data.user.status == "Ngừng hoạt động") {
                Swal.fire({
                    icon: 'error',
                    title: 'Tài khoản của quý khách đã bị vô hiệu hóa !',
                    text: 'Vui lòng liên hệ tới cửa hàng để biết thêm chi tiết',
                })
            }

        } catch (error) {
            console.log('error', error.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Quý khách nhập sai email hoặc mật khẩu !',
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
                text: 'Quý khách đăng ký tài khoản thành công !',
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
                text: 'Quý khách đăng ký tài khoản thất bại !',
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


const openNotificationAddNewUserForAdmin = (placement) => {
    notification.success({
        message: `Thêm người dùng mới thành công`,
        placement,
        duration: 2
    });
};
const openNotificationAddNewUserForAdminError = (placement) => {
    notification.error({
        message: `Thêm người dùng thất bại`,
        placement,
        duration: 2
    });
};
export const addNewUserForAdminAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.addNewUserForAdmin(userInfo);
            console.log("RESULT ADD NEW USER FOR ADMIN: ", result);
            openNotificationAddNewUserForAdmin('bottomRight')
            dispatch({
                type: CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP
            })
            // dispatch({
            //     type: UPDATE_USER_PROFILE_INFORMATION,
            //     updatedUserInfo: ""
            // })
        } catch (error) {
            console.log('error', error.response.data);
            dispatch({
                type: CLOSE_ADD_NEW_USER_FOR_ADMIN_POPUP
            })
            openNotificationAddNewUserForAdminError('bottomRight')
        }
    }
}

export const getAllUserListForAdminAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.getAllUserListForAdmin(offset, limit);
            console.log("RESULT GET ALL USER LIST FOR ADMIN: ", result.data.users);
            dispatch({
                type: GET_ALL_USER_LIST_FOR_ADMIN,
                userListForAdminAction: result.data.users
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const getAllUserListLengthForAdminAction = (offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.getAllUserListForAdmin(offset, limit);
            console.log("RESULT GET ALL USER LIST LENGTH FOR ADMIN: ", result.data.users);
            dispatch({
                type: GET_ALL_USER_LIST_LENGTH_FOR_ADMIN,
                userListLengthForAdminAction: result.data.users
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchUserForAdminAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.searchUserForAdmin(keyWord, offset, limit);
            console.log("RESULT SEARCH USER FOR ADMIN: ", result.data.users);
            dispatch({
                type: SEARCH_USER_FOR_ADMIN,
                searchUserListForAdminAction: result.data.users
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const searchUserLengthForAdminAction = (keyWord, offset, limit) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.searchUserForAdmin(keyWord, offset, limit);
            console.log("RESULT SEARCH USER LENGTH FOR ADMIN: ", result.data.users);
            dispatch({
                type: SEARCH_USER_LENGTH_FOR_ADMIN,
                searchUserListLengthForAdminAction: result.data.users
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

const openNotificationResetNewPassword = (placement) => {
    notification.success({
        message: `Gửi yêu cầu reset mật khẩu thành công !`,
        placement,
        duration: 2
    });
};
export const resetPasswordAction = (userEmailInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.resetPassword(userEmailInfo);
            console.log("RESULT RESET PASSWORD: ", result);
            openNotificationResetNewPassword('bottomRight');
            // dispatch({
            //     type: RESET_PASSWORD
            // })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

export const verifyResetPasswordAction = (verificationCode) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.verifyResetPassword(verificationCode);
            console.log("RESULT VERIFY RESET PASSWORD: ", result);
            // dispatch({
            //     type: RESET_PASSWORD
            // })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}

const openNotificationChangePassword = (placement) => {
    notification.success({
        message: `Đổi mật khẩu thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationChangePasswordError = (placement) => {
    notification.error({
        message: `Đổi mật khẩu thất bại ! Mật khẩu hiện tại quý khách nhập không đúng`,
        placement,
        duration: 2
    });
};
export const changePasswordAction = (userPasswordInfo) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.changePassword(userPasswordInfo);
            console.log("RESULT CHANGE PASSWORD: ", result);
            openNotificationChangePassword('bottomRight');
            // dispatch({
            //     type: CHANGE_PASSWORD
            // })
        } catch (error) {
            console.log('error', error.response.data);
            openNotificationChangePasswordError('bottomRight');
        }
    }
}

const openNotificationUploadAvatar = (placement) => {
    notification.success({
        message: `Đổi ảnh đại diện thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationUploadAvatarError = (placement) => {
    notification.error({
        message: `Đổi ảnh đại diện thất bại !`,
        placement,
        duration: 2
    });
};
export const uploadImageAction = (filesName) => {
    return async (dispatch) => {
        try {
            const result = await imageManagementServices.uploadAvatar(filesName);
            console.log("RESULT UPLOAD IMAGE: ", result.data.images[0].url);
            dispatch({
                type: UPLOAD_IMAGE,
                uploadAvatarAction: result.data.images[0].url
            })
            openNotificationUploadAvatar('bottomRight');
        } catch (error) {
            console.log('error', error.response.data);
            openNotificationUploadAvatarError('bottomRight');
        }
    }
}

export const uploadImageUserInUserMngtAction = (filesName) => {
    return async (dispatch) => {
        try {
            const result = await imageManagementServices.uploadAvatar(filesName);
            console.log("RESULT UPLOAD IMAGE USER IN USER MNGT: ", result.data.images[0].url);
            dispatch({
                type: UPLOAD_IMAGE_USER_IN_USER_MNGT,
                uploadAvatarUserInUserMngtAction: result.data.images[0].url
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
            console.log("RESULT GET ALL ROLE IN MIDORI: ", result.data.roles);
            dispatch({
                type: GET_ALL_ROLE,
                roleListAction: result.data.roles
            })
        } catch (error) {
            console.log('error', error.response.data);
        }
    }
}
const openNotificationActivateUserAccountForAdmin = (placement) => {
    notification.success({
        message: `Kích hoạt lại tài khoản này thành công !`,
        placement,
        duration: 2
    });
};

const openNotificationActivateUserAccountForAdminError = (placement) => {
    notification.error({
        message: `Kích hoạt lại tài khoản này thất bại !`,
        placement,
        duration: 2
    });
};

export const activateUserAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.activateUserAccountForAdmin(userId);
            console.log("RESULT ACTIVATE USER ACCOUNT FOR ADMIN: ", result);
            openNotificationActivateUserAccountForAdmin('bottomRight');
            history.push("/usermanagement");
            // dispatch({
            //     type: GET_ALL_ROLE,
            //     roleListAction: result.data.roles
            // })
        } catch (error) {
            openNotificationActivateUserAccountForAdminError('bottomRight');
            console.log('error', error.response.data);
        }
    }
}


const openNotificationDeactivateUserAccountForAdmin = (placement) => {
    notification.success({
        message: `Vô hiệu hóa tài khoản này thành công !`,
        placement,
        duration: 2
    });
};
const openNotificationDeactivateUserAccountForAdminError = (placement) => {
    notification.success({
        message: `Vô hiệu hóa tài khoản này thất bại !`,
        placement,
        duration: 2
    });
};
export const deactivateUserAccountAction = (userId) => {
    return async (dispatch) => {
        try {
            const result = await userManagementService.deactivateUserAccountForAdmin(userId);
            console.log("RESULT DEACTIVATE USER ACCOUNT FOR ADMIN: ", result);
            openNotificationDeactivateUserAccountForAdmin('bottomRight');
            history.push("/usermanagement");
            // dispatch({
            //     type: GET_ALL_ROLE,
            //     roleListAction: result.data.roles
            // })
        } catch (error) {
            openNotificationDeactivateUserAccountForAdminError('bottomRight');
            console.log('error', error.response.data);
        }
    }
}