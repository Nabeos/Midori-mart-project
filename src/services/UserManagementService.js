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

    addNewUserForAdmin = () => {
        return this.post();
    }

    getAllUserListForAdmin = () => {
        return this.get();
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

