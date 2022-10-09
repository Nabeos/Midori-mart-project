import { GROUPID } from "../utils/settings/config";
import { baseService } from "./baseService";
//DAY LÀ SAMPLE
export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }
    dangNhapHeThong = (thongTinNguoiDung) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', thongTinNguoiDung);
    }
    layDanhSachNguoiDung = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    }
    capNhatThongTinProfile = (thongTinNguoiDungCapNhat) => {
        return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDungCapNhat);
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();