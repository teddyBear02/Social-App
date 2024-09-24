import { Row, Col } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./PostProfile.module.scss";

const cx = classNames.bind(styles);

const PhotosProfile = () => {
  return (
    <>
      <Row
        className={cx("photos", "background-color")}
        justify={"center"}
        align={"middle"}
      >
        <Col span={12}>
          <span className={cx("title-span")}>Photos</span>
        </Col>

        <Col
          span={12}
          style={{
            textAlign: "right",
          }}
        >
          <span className={cx("see-all-btns")}>See all photos</span>
        </Col>
      </Row>
    </>
  );
};

export default PhotosProfile;
