import {
  ShareAltOutlined,
  LikeFilled,
  CommentOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd/lib";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPost } from "@/store/post/post.actions";
import { RootState, useAppDispatch } from "@/store/store";

const actions: React.ReactNode[] = [
  <LikeFilled key="like" />,
  <CommentOutlined key="comments" />,
  <ShareAltOutlined key="share" />,
];

// ?? call APi

const ListPost = () => {
  const dispatch = useAppDispatch();

  const blogs = useSelector((state: RootState) => state.post.posts);

  const getAllPost = () => {
    dispatch(getPost());
  };

  useEffect(() => {
    getAllPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {blogs.map((blog: any, index: number) => (
        <Card
          actions={actions}
          style={{ minWidth: 300, marginTop: 24, backgroundColor: "#eee" }}
          key={index}
        >
          <Card.Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
            }
            title="Card title"
            description={
              <>
                <p>{blog.content}</p>
              </>
            }
          />
        </Card>
      ))}
    </>
  );
};

export default ListPost;
