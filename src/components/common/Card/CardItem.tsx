import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

type TypeCardCommon = {
  list: any[];
};

const CardItem: React.FC<TypeCardCommon> = (props) => {
  const { list } = props;

  return (
    <>
      {list.map((item, index) => (
        <div className={cx("card")} key={index}>
          <div className="flex">
            <div className={cx("icon")}>{item.icon}</div>
            <div className={cx("content-center", "items-center")}>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardItem;
