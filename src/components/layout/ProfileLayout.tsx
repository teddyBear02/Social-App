import NavBar from "../common/NavBar/NavBar";
import HeaderProfile from "../profile/HeaderProfile";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);

const ProfileLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <NavBar />
      <div className={cx("wrapper-profile")}>
        <HeaderProfile />
        <div className={cx("body-profile")}>{children}</div>
      </div>
    </>
  );
};

export default ProfileLayout;
