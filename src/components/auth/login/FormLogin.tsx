import { useDispatch } from "react-redux";
import { login } from "@/store/auth/auth.actions";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import { Button, Form, Input, notification } from "antd/lib";
import styles from "@/components/auth/login/FormLogin.module.scss";
import { unwrapResult } from "@reduxjs/toolkit";

const cx = classNames.bind(styles);

const FormValidator = () => {
  const router = useRouter();

  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async (value: any) => {
    await dispatch(login(value))
      .then(unwrapResult)
      .then(() => {
        notification.success({
          message: "Login success",
        });

        router.push("/home");
      })
      .catch((error: any) => {
        notification.error({
          message: error.message,
        });
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Form
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={handleLogin}
        className={cx("form-login")}
      >
        <Form.Item
          label="Username"
          name="email"
          layout="vertical"
          style={{ marginBottom: 32 }}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input className={cx("input")} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          layout="vertical"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className={cx("input")} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ width: 120 }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormValidator;
