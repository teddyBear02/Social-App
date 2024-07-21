import styles from "./Auth.module.scss";

type Props = {
  children: React.ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  return (
    <>
      <div className={styles.wrapperLogin}>{children}</div>
    </>
  );
};

export default AuthWrapper;
