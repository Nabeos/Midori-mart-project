import { baseService } from "./baseServices";

export class UserManagementService extends baseService {
    constructor() {
        super();
    }

    login = (userInfo) => {
        return this.postLogin('api/usermanagement/login', userInfo);
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

