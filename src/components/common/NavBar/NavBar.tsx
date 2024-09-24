import React from "react";
import { Layout, Input, Avatar, Popover } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";
import { UserOutlined } from "@ant-design/icons";
import { FaFacebook } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { useRouter } from "next/router";
import PopoverAvatar from "./Popovers/PopoverAvatar";
import useContextGlobal from "@/hooks/useContextGlobal";

const cx = classNames.bind(styles);

const { Header } = Layout;

const NavBar = () => {
  const router = useRouter();

  const { handleLogout } = useContextGlobal();

  const renderTabContent = () => {
    return (
      <div className={cx("notify-loading")}>
        <PopoverAvatar handleLogout={handleLogout} />
      </div>
    );
  };

  return (
    <>
      <Header
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          position: "fixed",
          zIndex: 3,
          top: 0,
          width: "100%",
        }}
      >
        <div className={cx("begin-nav")}>
          <FaFacebook
            className={cx("logo")}
            onClick={() => router.push("/home")}
          />
          <Input.Search
            style={{
              width: 240,
              marginLeft: 24,
            }}
          />
        </div>

        <div className={cx("middle-nav")}>
          <div
            className={cx("icon-wrapper")}
            onClick={() => router.push("/home")}
          >
            <HiHome
              className={cx(
                "icons",
                router.pathname === "/home" ? "isOnPage" : ""
              )}
            />
          </div>

          <div className={cx("icon-wrapper")}>
            <HiUsers className={cx("icons")} />
          </div>

          <div className={cx("icon-wrapper")}>
            <BsShopWindow className={cx("icons")} />
          </div>
        </div>

        <div className={cx("end-nav")}>
          <div>
            <BsGrid3X3GapFill className={cx("icons", "icon-end-nav")} />
          </div>
          <div>
            <FaFacebookMessenger className={cx("icons", "icon-end-nav")} />
          </div>
          <div>
            <FaBell className={cx("icons", "icon-end-nav")} />
          </div>

          <Popover
            content={renderTabContent}
            trigger="click"
            placement="bottomRight"
          >
            <Avatar
              icon={<UserOutlined />}
              className={cx("icons", "icon-end-nav", "icon-avatar")}
              style={{
                backgroundColor: "#aaa",
              }}
            />
          </Popover>
        </div>
      </Header>
    </>
  );
};

export default NavBar;
