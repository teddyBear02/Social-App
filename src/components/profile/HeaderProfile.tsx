import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { Avatar, Row, Col, Button, Tooltip } from "antd/lib";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";
import { TAG_PAGE_NAME } from "@/constants/profile";

const cx = classNames.bind(styles);

const HeaderProfile = () => {
  const router = useRouter();
  return (
    <>
      <div className={cx("header-profile")}>
        <div className={cx("cover-photo")}>
          <Button className={cx("btn-edit-cover-photo")}>
            {" "}
            <FaCamera /> Edit cover photo
          </Button>
        </div>

        <Row className={cx("avatar-option")} gutter={24}>
          <Col span={12}>
            <Row>
              <Col>
                <div className={cx("avatar-wrapper")}>
                  <Avatar
                    size={160}
                    icon={<UserOutlined />}
                    className={cx("avatar")}
                  />
                </div>
              </Col>

              <Col>
                <div className={cx("card-contact")}>
                  <h1
                    style={{
                      fontSize: 32,
                      padding: 0,
                    }}
                  >
                    Name user
                  </h1>
                  <p
                    style={{
                      margin: 4 | 0,
                    }}
                  >
                    189 friends
                  </p>
                  <Avatar.Group
                    style={{
                      margin: 4 | 0,
                    }}
                  >
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    <a href="#">
                      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                    </a>
                    <Tooltip title="Ant User" placement="top">
                      <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                    <Avatar
                      style={{ backgroundColor: "#1677ff" }}
                      icon={<AntDesignOutlined />}
                    />
                  </Avatar.Group>
                </div>
              </Col>
            </Row>
          </Col>

          <Col span={12} className={cx("card-contact", "flex-end-direction")}>
            <Row className={cx("group-btn-right")} justify={"end"}>
              <Col className={cx("button-profile")}>
                <Button type="primary">
                  <FaPlus /> {"Add a story"}
                </Button>
              </Col>

              <Col className={cx("button-profile")}>
                <Button>
                  <MdEdit /> {"Edit profile"}
                </Button>
              </Col>

              <Col className={cx("button-profile")}>
                <Button>
                  <MdKeyboardArrowDown />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={cx("other-page-profile")}>
          {TAG_PAGE_NAME.map((item, key) => (
            <Col
              className={cx("")}
              key={key}
              onClick={() => {
                item.url ? router.push(item.url) : null;
              }}
            >
              <div
                className={cx("box-underline", {
                  isActive:
                    router.pathname == `/profile/${item.name.toLowerCase()}`,
                })}
              >
                <div
                  className={cx(
                    router.pathname == `/profile/${item.name.toLowerCase()}`
                      ? "isActiveTag"
                      : "tag-page"
                  )}
                >
                  {item.name}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HeaderProfile;
