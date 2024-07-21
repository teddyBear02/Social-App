import classNames from "classnames/bind";
import styles from "./Story.module.scss";
import StoryCard from "./StoryCard";

const cx = classNames.bind(styles);

const ListStory = () => {
  return (
    <>
      <div className={cx("grid grid-cols-4 gap-4", "list-stories")}>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </>
  );
};

export default ListStory;
