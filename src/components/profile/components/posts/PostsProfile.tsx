import classNames from "classnames/bind";
import styles from "./PostProfile.module.scss";
import { Row, Col, Button } from "antd/lib";
import PostActionCard from "@/components/home/center/PostActionCard";
import useContextGlobal from "@/hooks/useContextGlobal";
import { useState } from "react";
import IntroProfile from "./IntroProfile";
import PhotosProfile from "./PhotosProfile";
import FriendsProfile from "./FriendsProfile";
import { IoMdSettings } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BsList } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import RenderPost from "./RenderPosts";

const cx = classNames.bind(styles);

const PostsProfile = () => {
  const { setIsOpenPost } = useContextGlobal();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditBio = () => {
    setIsEdit(!isEdit);
  };

  const onModalClick = () => {
    setIsOpenPost(true);
  };

  return (
    <>
      <div className={cx("wrapper-posts")}>
        <Row gutter={16} justify={"space-between"}>
          <Col className={cx("left-posts")} span={10}>
            <IntroProfile isEdit={isEdit} handleEditBio={handleEditBio} />
            <PhotosProfile />
            <FriendsProfile />
          </Col>

          <Col className={cx("right-posts")} span={14}>
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <PostActionCard onModalClick={onModalClick} />
            </div>

            <Row className={cx("background-color", "no-padding")}>
              <Row className="w-full p-4">
                <Col span={12}>
                  <span
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Post
                  </span>
                </Col>

                <Col span={12}>
                  <Row justify={"end"}>
                    <Col>
                      <Button>
                        <VscSettings size={20} />
                        Filters
                      </Button>
                    </Col>

                    <Col
                      style={{
                        marginLeft: 8,
                      }}
                    >
                      <Button>
                        <IoMdSettings size={20} />
                        Manage posts
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className={cx("w-full", "line")}></div>
              <Row
                className={cx("w-full", "px-4", "mt-1")}
                justify={"center"}
                align={"middle"}
              >
                <Col span={12} className={cx("is-active")}>
                  <div
                    className={cx(
                      "items-center",
                      "flex",
                      "justify-center",
                      "style-view-posts",
                      "pb-1"
                    )}
                  >
                    <BsList size={20} />
                    List view
                  </div>
                </Col>
                <Col span={12} className={cx()}>
                  <div
                    className={cx(
                      "items-center",
                      "flex",
                      "justify-center",
                      "style-view-posts",
                      "mb-1"
                    )}
                  >
                    <IoGrid size={20} />
                    Grid view
                  </div>
                </Col>
              </Row>
            </Row>

            <RenderPost />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PostsProfile;
