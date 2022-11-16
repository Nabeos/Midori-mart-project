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
  // avatar hover
  const content = (
    <div className="flex flex-col mr-8" style={{ width: "5rem" }}>
      <NavLink to={"/"} style={{ width: "50rem" }}>Management page</NavLink>
      <NavLink to={"/managerprofile/:userId"} style={{ width: "50rem" }}>Setting</NavLink>
      <p className="cursor-pointer" onClick={handleLogOut}>Log out</p>
    </div>
  );
  return (
    <div>
      <div className="flex justify-end mr-5">
        <div className="flex flex-col mt-3">
          <div
            className="text-lg font-semibold"
            style={{ width: "100%" }}
          >
            Hello Thanh
          </div>
          <div className="text-end" style={{ width: "100%" }}>
            Admin
          </div>
        </div>

        <Popover content={content} >
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg"
            className="mt-2 mr-3 mb-2"
            style={{ width: "4%" }}
          />
        </Popover>
      </div>
    </div>
  );
}
