import ProfileLayout from "@/components/layout/ProfileLayout";
import AboutProfile from "@/components/profile/components/about/AboutProfile";
import { NextPageWithLayout } from "@/model";

const About: NextPageWithLayout = () => {
  return (
    <>
      <AboutProfile />
    </>
  );
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default About;
