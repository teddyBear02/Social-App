import NavBar from "../common/NavBar/NavBar";
import ModalPost from "../modals/ModalPost";
import CenterContent from "./center/Center";
import LeftNav from "./left/LeftNav";
import RightNav from "./right/RightNav";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import useContextGlobal from "@/hooks/useContextGlobal";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPost } from "@/store/post/post.slice";
import { PostType } from "@/model";
import { PaginationPayload } from "@/model/pagination";
import { getPost } from "@/store/post/post.actions";
import InfiniteScroll from "react-infinite-scroll-component";
import { Divider, Skeleton } from "antd/lib";

const cx = classNames.bind(styles);

const Home = () => {
  const { isOpenPost } = useContextGlobal();

  // call API here ???
  const dispatch = useAppDispatch();

  const { totalRecord, totalPage } = useSelector(selectPost);

  const [page, setPage] = useState<number>(1);

  const [postsList, setPostsList] = useState<PostType[]>([]);

  const [pagiSearch, setPagiSearch] = useState<PaginationPayload>({
    pagination: {
      pageNumber: page,
      pageSize: 5,
    },
  });

  useEffect(() => {
    getAllPost(pagiSearch);
  }, [pagiSearch]);

  const getListMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page <= totalPage) {
      const newDataSearch = {
        pagination: {
          pageNumber: page,
          pageSize: 5,
        },
      };
      setPagiSearch(newDataSearch);
      console.log(page);
    }
  }, [page]);

  const getAllPost = (Payload: PaginationPayload) => {
    dispatch(getPost(Payload))
      .then((res) => {
        setPostsList((prevList) =>
          page >= 1 && page <= totalPage
            ? [...prevList, ...res.payload.result]
            : res.payload.result
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <InfiniteScroll
          dataLength={postsList.length}
          next={getListMore}
          hasMore={postsList.length < totalRecord}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        >
          <NavBar />
          <div className={cx("wrapper-content")}>
            <div className={cx("side-nav")}>
              <LeftNav />
            </div>

            <div className={cx("pd-1")}>
              <CenterContent postsList={postsList} />
            </div>

            <div className={cx("side-nav")}>
              <RightNav />
            </div>
          </div>
        </InfiniteScroll>
      </div>

      {isOpenPost ? <ModalPost /> : <div />}
    </>
  );
};

export default Home;
