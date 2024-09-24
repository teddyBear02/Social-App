import { Divider, Skeleton } from "antd/lib";
import InfiniteScroll from "react-infinite-scroll-component";

type InfiniteScrollType = {
  children: React.ReactElement | React.ReactNode;
  data: any[];
  totalRecord: number;
  getMoreData: () => any;
};

const InfiniteShow: React.FC<InfiniteScrollType> = (props) => {
  const { children, data, totalRecord, getMoreData } = props;
  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={getMoreData()}
        hasMore={data.length < totalRecord}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>Nothing more here</Divider>}
      >
        {children}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteShow;
