import React from "react";
import styles from "./Comment.module.css";
import { Card, Avatar } from "antd";
import {
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
  FaStar,
  FaUser,
} from "react-icons/fa";
const { Meta } = Card;
export default function Comment() {
  return (
    <div>
      <div styles={{ width: "100%" }} className="mb-3">
        <div
          className={`${styles.comment__border} flex`}
          style={{ width: "87%", height: "25vh" }}
        >
          <div
            className="flex-col ml-5 mt-3 text-2xl "
            style={{ width: "60%", height: "50%" }}
          >
            {/* <img className={`${styles.comment__avatar__circle}` } style={{width:"100%"}} src="./images/homelander.png"/> */}
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            />
          </div>
          <div className="flex">
            <div className="flex">
              <div className="flex-col -ml-4 mt-2 mb-3 mr-4">
                <div className="flex" style={{ width: "100%" }}>
                  <div
                    className="text-start text-lg font-medium"
                    style={{ width: "100%" }}
                  >
                    Đinh Kông Thành
                  </div>
                  <div className="text-end" style={{ width: "100%" }}>
                    23/02/2001
                  </div>
                </div>

                <div className="flex">
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                  <FaStar className="text-yellow-400 text-lg" />
                </div>
                <div
                  style={{ height: "76%", width: "100%" }}
                  className={`${styles.comment__overflow} overflow-y-hidden text-justify mt-2`}
                >
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. Contrary to popular belief,
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
