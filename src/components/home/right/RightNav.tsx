import classNames from "classnames/bind";
import styles from "./RightNav.module.scss";
import ListFriends from "./ListFriends";

const cx = classNames.bind(styles);

const RightNav = () => {
  return (
    <>
      <div className={cx("wrapper-right")}>
        <ListFriends />
      </div>
    </>
  );
};

export default RightNav;
