import { baseService } from "./baseServices";

export class UserManagementService extends baseService {
    constructor() {
        super();
    }

    login = (userInfo) => {
        return this.postLogin('api/user-management/login', userInfo);
    }

    register = (userInfo) => {
        return this.post('api/user-management/register', userInfo);
    }

    getUserProfile = () => {
        return this.getUserProfileApi('api/v1/user-management/user');
    }

    updateUserProfile = (userId, userInfo) => {
        return this.putUpdateUserProfile(`api/v1/user-management/users/${userId}`, userInfo);
    }

    addNewUserForAdmin = (userInfo) => {
        return this.postAddNewUserForAdmin(`api/v1/user-management/users`, userInfo);
    }

    searchUserForAdmin = (keyWord, offset, limit) => {
        return this.getSearchUserForAdmin(`api/v1/user-management/searchUser?name=${keyWord}&offset=${offset}&limit=${limit}`);
    }

    getAllUserListForAdmin = (offset, limit) => {
        return this.getAllUserListForAdminApi(`api/v1/user-management/users?offset=${offset}&limit=${limit}`);
    }

    resetPassword = (userEmailInfo) => {
        return this.post(`api/v1/user-management/forgot-password`, userEmailInfo);
    }

    verifyResetPassword = (verificationCode) => {
        return this.get(`api/user-management/verify?code=${verificationCode}`);
    }

    changePassword = (userPasswordInfo) => {
        return this.postChangePassword(`api/v1/user/changePassword`, userPasswordInfo);
    }

    getAllRoleInMidori = () => {
        return this.getAllRole(`api/v1/user-management/users/roles`);
    }

    activateUserAccountForAdmin = (userId) => {
        return this.putActivateUserAccount(`api/user-management/users/${userId}/status`);
    }

    deactivateUserAccountForAdmin = (userId) => {
        return this.putDeactivateUserAccount(`api/user-management/users/${userId}/status`);
    }


    // layDanhSachNguoiDung = () => {
    //     return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    // }
    // xoaNguoiDung = (taiKhoan) => {
    //     return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    // }
    // capNhatThongTinProfile = (thongTinNguoiDungCapNhat) => {
    //     return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDungCapNhat);
    // }
}

export const userManagementService = new UserManagementService();

