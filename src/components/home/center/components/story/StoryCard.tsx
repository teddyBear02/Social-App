import { Card } from "antd/lib";
import classNames from "classnames/bind";
import styles from "./Story.module.scss";

const cx = classNames.bind(styles);

const { Meta } = Card;

const StoryCard = () => {
  return (
    <>
      <Card
        hoverable
        className={cx("card-stories")}
        cover={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      />
    </>
  );
};

export default StoryCard;
