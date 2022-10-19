import React from "react";
import {Popover } from "antd";
export default function HeaderManagement() {
  // avatar hover
  const content = (
    <div>
      <p>Homepage</p>
      <p>Log out</p>
    </div>
  );
  return (
    <div>
       <div className="flex justify-end">
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

              <Popover content={content}>
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
