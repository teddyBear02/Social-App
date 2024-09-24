import { AuthLayout, FormSignUp } from "@/components";
import useContextGlobal from "@/hooks/useContextGlobal";

const SignUp = () => {
  const {} = useContextGlobal();

  return (
    <>
      <title>Sign Up</title>
      <AuthLayout>
        <FormSignUp />
      </AuthLayout>
    </>
  );
};

export default SignUp;
