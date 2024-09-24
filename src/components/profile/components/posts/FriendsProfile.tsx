import { Row, Col } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./PostProfile.module.scss";

const cx = classNames.bind(styles);

const FriendsProfile = () => {
  return (
    <>
      <Row
        className={cx("friends", "background-color")}
        justify={"center"}
        align={"middle"}
      >
        <Col span={12}>
          <span className={cx("title-span")}>Friends</span>
        </Col>

        <Col
          span={12}
          style={{
            textAlign: "right",
          }}
        >
          <span className={cx("see-all-btns")}>See all friends</span>
        </Col>
      </Row>
    </>
  );
};

export default FriendsProfile;
