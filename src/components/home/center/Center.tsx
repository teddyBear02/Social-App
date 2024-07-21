import classNames from "classnames/bind";
import stlyes from "./Center.module.scss";
import PostActionCard from "./PostActionCard";
import useContextGlobal from "@/hooks/useContextGlobal";
import ListPost from "./components/post/ListPost";
import ListStory from "./components/story/ListStories";

const cx = classNames.bind(stlyes);

const CenterContent = () => {
  const { setIsOpenPost } = useContextGlobal();

  const onModalClick = () => {
    setIsOpenPost(true);
  };

  return (
    <>
      <div>
        <ListStory />
        <PostActionCard onModalClick={onModalClick} />
        <ListPost />
      </div>
    </>
  );
};

export default CenterContent;
