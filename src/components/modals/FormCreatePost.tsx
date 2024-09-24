import { FormInstance, Form, Input, Button } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./ModalPost.module.scss";
import { IoMdClose } from "react-icons/io";

type FormDataPropsType = {
  form: FormInstance<any>;
  onFinish?: (d: any) => void;
};

const cx = classNames.bind(styles);

const FormCreatePost: React.FC<FormDataPropsType> = (props) => {
  const { form, onFinish } = props;
  const { TextArea } = Input;
  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name={"Content"}>
          <TextArea
            placeholder="What are you thinking ?"
            autoSize={{ minRows: 3, maxRows: 7 }}
          />
        </Form.Item>

        <Form.Item className={cx("footer")}>
          <Button
            htmlType="submit"
            style={{ width: "100%", padding: "12px 0" }}
          >
            Post
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormCreatePost;
