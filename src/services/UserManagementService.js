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

    getAllUserListForAdmin = () => {
        return this.getAllUserListForAdminApi(`api/v1/user-management/users?offset=0&limit=1000`);
    }

    resetPassword = (userEmailInfo) => {
        return this.post(`api/v1/user-management/forgot-password`, userEmailInfo);
    }

    changePassword = () => {
        return this.put();
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

