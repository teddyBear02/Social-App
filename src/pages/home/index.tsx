import { NavBar, CenterContent, RightNav, LeftNav } from "@/components";
import useContextGlobal from "@/hooks/useContextGlobal";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ModalPost from "@/components/modals/ModalPost";

const cx = classNames.bind(styles);

const HomePage = () => {
  const { isOpenPost } = useContextGlobal();

  return (
    <>
      <title>Home Page</title>
      <div style={{ position: "relative" }}>
        <NavBar />
        <div className={cx("wrapper-content")}>
          <div className={cx("side-nav")}>
            <LeftNav />
          </div>

          <div className={cx("pd-1")}>
            <CenterContent />
          </div>

          <div className={cx("side-nav")}>
            <RightNav />
          </div>
        </div>
      </div>

      {isOpenPost ? <ModalPost /> : <div />}
    </>
  );
};

export default HomePage;
