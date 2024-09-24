import { Row } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./PostProfile.module.scss";
import ListPost from "@/components/home/center/components/post/ListPost";
import { useAppDispatch } from "@/store/store";
import { getPostByUserId } from "@/store/post/post.actions";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const RenderPost = () => {
  const [postList, setPostList] = useState<null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const getPosts = () => {
    dispatch(getPostByUserId(""))
      .then(() => {})
      .catch(() => {});
  };

  return (
    <>
      <Row className={cx("post-render")}>{/* <ListPost postsList={}/> */}</Row>
    </>
  );
};

export default RenderPost;
