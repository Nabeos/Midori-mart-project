import React from "react";
import styles from "./Comment.module.css";
import { Card, Avatar, Rate } from "antd";
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
export default function Comment(props) {
  const { content, starRate, thumbnail, updateTime, userName } = props;
  console.log("PROPS COMMENT: ", props);
  return (
    <div>
      <div styles={{ width: "100%" }} className="mb-3">
        <div
          className={`${styles.comment__border} flex`}
          style={{ width: "87%", margin: "0 auto", height: "auto" }}
        >
          <div
            className="flex-col ml-5 mt-3 text-2xl "
            style={{ height: "50%" }}
          >
            {/* <img className={`${styles.comment__avatar__circle}` } style={{width:"100%"}} src="./images/homelander.png"/> */}
            <Meta
              className="mr-3"
              avatar={<Avatar src={thumbnail} />}
            />
          </div>
          <div className="flex">
            <div className="flex">
              <div className="flex-col mb-3 mr-4">
                <div className="flex mt-2" style={{ width: "950px" }}>
                  <div
                    className="text-start text-lg font-medium"
                    style={{ width: "100%" }}
                  >
                    {userName}
                  </div>
                  <div className="text-end" style={{ width: "100%" }}>
                    {updateTime}
                  </div>
                </div>

                <div className="flex">
                  <Rate
                    className="text-base"
                    value={starRate}
                  />
                </div>
                <div
                  style={{ width: "100%" }}
                  className={`${styles.comment__overflow} overflow-y-hidden text-justify mt-2`}
                >
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
