import styles from "./RightNav.module.scss";
import classNames from "classnames/bind";
import CardItem from "@/components/common/Card/CardItem";

const cx = classNames.bind(styles);

const userFriends = [
  {
    content: "Friend 1",
    icon: <></>,
  },

  {
    content: "Friend 2",
    icon: <></>,
  },

  {
    content: "Friend 3",
    icon: <></>,
  },

  {
    content: "Friend 4",
    icon: <></>,
  },
];

const ListFriends = () => {
  return (
    <>
      <div>
        <CardItem list={userFriends} />
      </div>
    </>
  );
};

export default ListFriends;
