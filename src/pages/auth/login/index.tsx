import {
  AuthWrapper,
  FormLogin,
  FailedMessage,
  SucceedMeassage,
} from "@/components";
import { GlobalContext } from "@/context/ProviderContext";
import { useContext } from "react";

const Login = () => {
  const { isFailed, isSuccessed } = useContext(GlobalContext);
  return (
    <>
      <title>Login</title>
      <AuthWrapper>
        {/* Failed Message here and loader here*/}
        {isSuccessed ? <SucceedMeassage message="Login succeed" /> : null}
        {isFailed ? <FailedMessage msg="Login failed" /> : null}
        <FormLogin />
      </AuthWrapper>
    </>
  );
};

export default Login;
