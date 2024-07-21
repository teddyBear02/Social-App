import styles from "./Messages.module.scss";

type message = {
  msg: string;
};

const FailedMessage = ({ msg }: message) => {
  return (
    <>
      <div
        className={`${styles["wrapper-messages"]} flex justify-center items-center p-5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6 text-amber-500 text-2xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>

        <p className="ml-3">{msg}</p>
      </div>
    </>
  );
};

export default FailedMessage;
