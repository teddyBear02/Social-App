import { Avatar, Row, Col } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./Popovers.module.scss";
import { IoMdSettings } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { RiFeedbackFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

type PopoverAvatarType = {
  handleLogout: () => void;
};

const PopoverAvatar: React.FC<PopoverAvatarType> = (props) => {
  const { handleLogout } = props;

  const router = useRouter();

  return (
    <>
      <div
        className={cx("wrapper-popover")}
        style={{
          height: 400,
        }}
      >
        <div className={cx("header-avatar")}>
          <Row
            className={cx("hover-box")}
            onClick={() => router.push(`/profile/posts`)}
          >
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <Avatar size={36} />
            </Col>
            <Col
              style={{
                marginLeft: 12,
                alignContent: "center",
              }}
            >
              <p>User name</p>
            </Col>
          </Row>
          <hr className={cx("line")} />

          <Row className={cx("hover-box")}>
            <Col>
              <p>See all profiles</p>
            </Col>
          </Row>
        </div>

        <Col>
          <Row className={cx("setting-avatar")} gutter={24}>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <IoMdSettings size={28} />
            </Col>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <span>Setting & privacy</span>
            </Col>

            <Col className={cx("arrow-right")}>
              <RiArrowRightSLine size={28} />
            </Col>
          </Row>

          <Row className={cx("setting-avatar")} gutter={24}>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <FaQuestionCircle size={28} />
            </Col>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <span>Help & support</span>
            </Col>
            <Col className={cx("arrow-right")}>
              <RiArrowRightSLine size={28} />
            </Col>
          </Row>

          <Row className={cx("setting-avatar")} gutter={24}>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <CiDark size={28} />
            </Col>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <span>Display & accessibillity</span>
            </Col>

            <Col className={cx("arrow-right")}>
              <RiArrowRightSLine size={28} />
            </Col>
          </Row>

          <Row className={cx("setting-avatar")} gutter={24}>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <RiFeedbackFill size={28} />
            </Col>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <span>Give feedback</span>
            </Col>
          </Row>

          <Row
            className={cx("setting-avatar")}
            gutter={24}
            onClick={handleLogout}
          >
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <LuLogOut size={28} />
            </Col>
            <Col
              style={{
                alignContent: "center",
              }}
            >
              <span>Log out</span>
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
};

export default PopoverAvatar;
