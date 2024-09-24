import { useDispatch } from "react-redux";
import { signUp } from "@/store/auth/auth.actions";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import { Form, notification } from "antd/lib";

const FormSignUp = () => {
  const dispatch: AppDispatch = useDispatch();

  const router = useRouter();

  const handleCreateUser = async () => {
    try {
      const res = await dispatch(signUp({ email: "", password: "", name: "" }));
      if (res.payload === "Network Error") {
        alert("Can't connect to server !");
      } else {
        if (res.meta.requestStatus === "fulfilled") {
          setTimeout(() => {}, 2500);
          setTimeout(() => {
            router.push(`/auth/login`);
          }, 2500);
        } else {
          setTimeout(() => {}, 2500);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form></Form>
    </>
  );
};

export default FormSignUp;
