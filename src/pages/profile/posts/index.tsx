import ProfileLayout from "@/components/layout/ProfileLayout";
import PostsProfile from "@/components/profile/components/posts/PostsProfile";
import { NextPageWithLayout } from "@/model";

const Posts: NextPageWithLayout = () => {
  return (
    <>
      <PostsProfile />
    </>
  );
};

Posts.getLayout = function getLayout(page: React.ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Posts;
