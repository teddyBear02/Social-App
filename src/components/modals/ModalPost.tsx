import React from "react";
import classNames from "classnames/bind";
import styles from "./ModalPost.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { Form, Avatar, Modal } from "antd/lib";
import { createPost } from "@/store/post/post.actions";
import useContextGlobal from "@/hooks/useContextGlobal";
import FormCreatePost from "./FormCreatePost";
import { IoMdClose } from "react-icons/io";
import { UserOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

const ModalPost = () => {
  const [form] = Form.useForm();

  const dispatch: AppDispatch = useDispatch();

  const { isOpenPost, setIsOpenPost } = useContextGlobal();

  const handleCloseModal = () => {
    setIsOpenPost(false);
  };

  const handleCreatePost = async (value: string) => {
    try {
      const res = await dispatch(createPost(value));
      console.log(res);
      if (res.type === "post/create/fulfilled") {
        setIsOpenPost(false);
      }
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={isOpenPost}
      onCancel={handleCloseModal}
      footer
      title={"Create a new post"}
      style={{
        textAlign: "center",
      }}
    >
      <div className={cx("mb-3", "flex", "items-center", "mt-6")}>
        <Avatar
          size={42}
          icon={<UserOutlined />}
          style={{
            marginRight: 8,
          }}
        />

        <div className={cx("text-left", "flex", "flex-col")}>
          <div className="flex flex-row">
            <div className="skrink-0">user name</div>
          </div>
          <div>public</div>
        </div>
      </div>

      <FormCreatePost
        onFinish={(value: any) => handleCreatePost(value)}
        form={form}
      />
    </Modal>
  );
};

export default ModalPost;
