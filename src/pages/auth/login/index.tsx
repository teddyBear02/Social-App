import { AuthLayout, FormLogin } from "@/components";
import { NextPageWithLayout } from "@/model";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <FormLogin />
    </>
  );
};

Login.getLayout = function getLayout(page: React.ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
