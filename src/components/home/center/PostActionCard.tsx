import React from "react";
import classNames from "classnames/bind";
import styles from "./Center.module.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IoVideocam } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { FaFaceGrinWide } from "react-icons/fa6";

const cx = classNames.bind(styles);

type Props = {
  onModalClick: () => void;
};

function PostActionCard({ onModalClick }: Props) {
  return (
    <div className={cx("wrapper-actions-poster")}>
      <div className="flex ">
        <div>
          <Avatar size={38} icon={<UserOutlined />} />
        </div>
        <div onClick={onModalClick} className={cx("btn-onModal")}>
          What are you thinking?
        </div>
      </div>
      <div className={cx("line-break")} />

      <div className={cx("grid-col-3")}>
        <div className={cx("btn-action")}>
          <IoVideocam
            style={{
              fontSize: 26,
              marginRight: 4,
              color: "rgb(255, 90, 90)",
            }}
          />
          <span className="ml-2">Live stream</span>
        </div>

        <div className={cx("btn-action")}>
          <FaRegImage
            style={{
              fontSize: 26,
              marginRight: 4,
              color: "rgb(109, 207, 79)",
            }}
          />
          <span className="ml-2">Images / Videos</span>
        </div>

        <div className={cx("btn-action")}>
          <FaFaceGrinWide
            style={{
              fontSize: 26,
              marginRight: 4,
              color: "rgb(255, 220, 30)",
            }}
          />
          <span className="ml-2">Status</span>
        </div>
      </div>
    </div>
  );
}

export default PostActionCard;
