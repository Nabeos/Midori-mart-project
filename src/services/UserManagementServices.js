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
    layThongTinTaiKhoan = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }
    layDanhSachNguoiDung = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
    timKiemNguoiDung = (keyWord) => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${keyWord}`)
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    }
    layDanhSachLoaiNguoiDung = () => {
        return this.get(`api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
    }
    themNguoiDung = (thongTinNguoiDungCanThem) => {
        return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDungCanThem);
    }
    capNhatThongTinNguoiDung = (thongTinNguoiDungCapNhat) => {
        return this.post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDungCapNhat);
    }
    dangKy = (thongTinDangKy) => {
        return this.post(`api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    }
    capNhatThongTinProfile = (thongTinNguoiDungCapNhat) => {
        return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDungCapNhat);
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();