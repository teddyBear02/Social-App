import styles from "./Messages.module.scss";
type Message = {
  message: string;
};

const SuccessedMeassage = ({ message }: Message) => {
  return (
    <>
      <div
        className={`${styles["wrapper-messages"]} flex p-5 justify-center items-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-green-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="ml-2">{message}</p>
      </div>
    </>
  );
};

export default SuccessedMeassage;
