import React from "react";
import styles from "./Slogan.module.css";
import {
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
  FaShieldAlt,
  FaShieldVirus,
  FaShoppingBag,
  FaShoppingBasket,
  FaSun,
} from "react-icons/fa";

export default function Slogan() {
  return (
    <div>
      <div className="bg-white">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center mt-5 mb-14">
            <div className="mb-2">
              <FaShieldAlt className="text-red-500 text-6xl"/>
            </div>
            <div className="text-2xl font-semibold">Thực phẩm an toàn</div>
          </div>
          <div className="flex flex-col items-center mt-5 mb-14">
            <div className="mb-2">
              <FaShoppingBasket className="text-orange-500 text-6xl"/>
            </div>
            <div className="text-2xl font-semibold">Chất lượng cam kết</div>
          </div>
          <div className="flex flex-col items-center mt-5 mb-14">
            <div className="mb-2">
              <FaSun className="text-yellow-500 text-6xl"/>
            </div>
            <div className="text-2xl font-semibold">Luôn luôn tươi ngon</div>
          </div>
        </div>
      </div>
    </div>
  );
}
