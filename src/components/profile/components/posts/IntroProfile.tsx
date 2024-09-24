import { Row, Col, Flex, Button, Input } from "antd";
import { FaEarthAsia } from "react-icons/fa6";
import classNames from "classnames/bind";
import styles from "./PostProfile.module.scss";

const cx = classNames.bind(styles);

type IntroProfileType = {
  isEdit: boolean;
  handleEditBio: () => void;
};

const IntroProfile: React.FC<IntroProfileType> = (props) => {
  const { isEdit, handleEditBio } = props;
  return (
    <>
      <Row className={cx("intro", "background-color")}>
        <h1 className={cx("header-intro")}>Intro</h1>
        <div className={cx("bio-wrapper")}>
          {isEdit ? (
            <Input.TextArea
              className={cx("input-bio")}
              autoFocus={true}
            ></Input.TextArea>
          ) : (
            <p className={cx("bio-decs")}>Testing</p>
          )}

          {isEdit ? (
            <Row
              align={"middle"}
              gutter={0}
              style={{
                width: "100%",
                margin: 0,
              }}
            >
              <Col span={12}>
                <Row justify={"start"} align={"middle"}>
                  <FaEarthAsia
                    style={{
                      marginRight: 4,
                    }}
                  />
                  <span>Public</span>
                </Row>
              </Col>

              <Col span={12}>
                <Flex justify="flex-end">
                  <Button
                    style={{
                      marginRight: 8,
                    }}
                    onClick={handleEditBio}
                  >
                    Cancel
                  </Button>
                  <Button>Save</Button>
                </Flex>
              </Col>
            </Row>
          ) : (
            <Button onClick={handleEditBio} className={cx("btn-intro")}>
              Edit bio
            </Button>
          )}
        </div>

        <div className={cx("details-wrapper")}>
          <Button className={cx("btn-intro")}> Edit details</Button>
        </div>

        <div className={cx("edit-featured-wrapper")}>
          <Button className={cx("btn-intro")}> Edit featured</Button>
        </div>
      </Row>
    </>
  );
};

export default IntroProfile;
