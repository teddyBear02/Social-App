import classNames from "classnames/bind";
import styles from "./Auth.module.scss";
import HeadAppTitle from "../HeadAppTitle";
import { Carousel } from "antd/lib";

const cx = classNames.bind(styles);

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const AuthLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <HeadAppTitle title="Login" />
      <div className={cx("wrapper-login")}>
        <div className={cx("wrapper-form")}>{children}</div>
        <div className={cx("slider-auth")}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
