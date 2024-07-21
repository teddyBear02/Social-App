import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={`${styles["wrapper-loader"]}`}>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
