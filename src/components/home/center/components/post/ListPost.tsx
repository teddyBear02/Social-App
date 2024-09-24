import {
  ShareAltOutlined,
  LikeFilled,
  CommentOutlined,
} from "@ant-design/icons";
import { List } from "antd/lib";
import React, { useEffect } from "react";
import { PostType } from "@/model/store/posts";
import classNames from "classnames/bind";
import styles from "./ListPost.module.scss";
import CardPost from "@/components/common/Card/CardPost";

const cx = classNames.bind(styles);

const actions: React.ReactNode[] = [
  <LikeFilled key="like" />,
  <CommentOutlined key="comments" />,
  <ShareAltOutlined key="share" />,
];

type ListPostType = {
  postsList: PostType[];
};

const ListPost: React.FC<ListPostType> = (props) => {
  const { postsList } = props;
  return (
    <>
      <List
        itemLayout="horizontal"
        className={cx("noti-list")}
        dataSource={postsList}
        renderItem={(item: PostType, index) => {
          return <CardPost item={item} index={index} />;
        }}
      />
    </>
  );
};

export default ListPost;
