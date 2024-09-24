import classNames from "classnames/bind";
import styles from "./Left.module.scss";
import { FaUserGroup, FaClockRotateLeft } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOndemandVideo } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";
import { Avatar } from "antd/lib";
import CardItem from "@/components/common/Card/CardItem";

const cx = classNames.bind(styles);

const icons = [
  {
    content: "User's name",
    icon: <Avatar />,
    url: "/profile/posts",
  },

  {
    content: "Friends",
    icon: <FaUserGroup size={28} />,
  },

  {
    content: "Memory",
    icon: <FaClockRotateLeft size={28} />,
  },

  {
    content: "Groups",
    icon: <HiMiniUserGroup size={28} />,
  },

  {
    content: "Video",
    icon: <MdOndemandVideo size={28} />,
  },

  {
    content: "Market",
    icon: <BsShopWindow size={28} />,
  },
];

const LeftNav = () => {
  return (
    <>
      <div className={cx("wrapper-left")}>
        <CardItem list={icons} />
      </div>
    </>
  );
};

export default LeftNav;
