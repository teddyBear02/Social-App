import classNames from "classnames/bind";
import stlyes from "./Center.module.scss";
import PostActionCard from "./PostActionCard";
import useContextGlobal from "@/hooks/useContextGlobal";
import ListPost from "./components/post/ListPost";
import ListStory from "./components/story/ListStories";
import { PostType } from "@/model";

const cx = classNames.bind(stlyes);

type ListPropsType = {
  postsList: PostType[];
};

const CenterContent: React.FC<ListPropsType> = (props) => {
  const { setIsOpenPost } = useContextGlobal();

  const { postsList } = props;

  const onModalClick = () => {
    setIsOpenPost(true);
  };

  return (
    <>
      <div>
        <ListStory />
        <PostActionCard onModalClick={onModalClick} />
        <ListPost postsList={postsList} />
      </div>
    </>
  );
};

export default CenterContent;
