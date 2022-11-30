import React from "react";
import { Popover, Button } from "antd";
import { NavLink } from "react-router-dom";
import { USER } from "../../redux/type/user/UserType";
import { TOKEN } from "../../utils/settings/config";
import { history } from "../../App";

export default function HeaderManagement() {
  const handleLogOut = () => {
    localStorage.removeItem(USER);
    localStorage.removeItem(TOKEN);
    history.push("/");
    window.location.reload();
  }
  let user = JSON.parse(localStorage.getItem(USER));
  // avatar hover
  const content = (
    <div className="flex flex-col mr-8" style={{ width: "5rem" }}>
      {user.roleId == 1 ? <NavLink to={"/"} style={{ width: "9rem" }} className="text-black no-underline hover:bg-gray-300 -ml-4">Trang chủ</NavLink> : ""}
      {user.roleId == 4 ? <NavLink to={"/"} style={{ width: "9rem" }} className="text-black no-underline hover:bg-gray-300 -ml-4">Trang chủ</NavLink> : ""}

      <NavLink to={`/managerprofile/${user.email}`} className="text-black no-underline hover:bg-gray-300 -ml-4" style={{ width: "9rem" }}>Thông tin cá nhân</NavLink>
      <p className="cursor-pointer hover:bg-gray-300 -ml-4" style={{ width: "9rem" }} onClick={handleLogOut}>Đăng xuất</p>
    </div>
  );
  return (
    <div className="flex justify-end">
      <div className="flex justify-end mr-5" style={{}}>
        <Popover content={content} className="flex flex-col">
          <div className="p-2">
            <div
              className="text-lg font-semibold"
              style={{ width: "100%" }}
            >
              {user?.fullname}
            </div>
            <div className="text-end" style={{ width: "100%" }}>
              {user.roleId == 1 ? "Quản trị viên" : ""}
              {user.roleId == 4 ? "Quản lý cửa hàng" : ""}
            </div>
          </div>

        </Popover>

        {/* <Popover content={content} >
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg"
            className="mt-2 mr-3 mb-2"
            style={{ width: "4%" }}
          />
        </Popover> */}
      </div>
    </div>
  );
}
