import {
  AuthWrapper,
  FormSignUp,
  FailedMessage,
  SucceedMeassage,
} from "@/components";
import { GlobalContext } from "@/context/ProviderContext";
import { useContext } from "react";

const SignUp = () => {
  const { isFailed, isSuccessed } = useContext(GlobalContext);

  return (
    <>
      <title>Sign Up</title>
      <AuthWrapper>
        {isSuccessed ? <SucceedMeassage message="Sign up succeed" /> : null}
        {isFailed ? <FailedMessage msg="Sign up failed" /> : null}
        <FormSignUp />
      </AuthWrapper>
    </>
  );
};

export default SignUp;
