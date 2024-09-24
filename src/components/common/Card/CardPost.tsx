import { PostType } from "@/model";
import {
  LikeFilled,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd/lib";

const actions: React.ReactNode[] = [
  <LikeFilled key="like" />,
  <CommentOutlined key="comments" />,
  <ShareAltOutlined key="share" />,
];

type CardPostType = {
  index: number;
  item: PostType;
};

const CardPost: React.FC<CardPostType> = (props) => {
  const { index, item } = props;
  return (
    <>
      <Card
        actions={actions}
        style={{
          minWidth: 200,
          marginTop: 24,
          backgroundColor: "#eee",
        }}
        key={index}
      >
        <Card.Meta
          avatar={
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
          }
          title="Card title"
          description={
            <>
              <p>{item.content}</p>
            </>
          }
        />
      </Card>
    </>
  );
};

export default CardPost;
