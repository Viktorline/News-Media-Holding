import { useEffect, useCallback } from "react";
import { Spin, Alert } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import type { News } from "../../../entities/news/model/types";
import { fetchNews, loadMoreNews } from "../../../entities/news/api/getNews";
import { NewsCard } from "../../../entities/news/ui/NewsCard";
import { useResize } from "../../../shared/hooks/useResize";

export const NewsList = ({
  onNewsClick,
}: {
  onNewsClick: (post: News) => void;
}) => {
  const dispatch = useAppDispatch();
  const { news, loading, hasMore, error } = useAppSelector(
    (state) => state.newsList
  );
  const { isScreen720, isScreen1280 } = useResize();

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews() as any);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      dispatch(loadMoreNews() as any);
    }
  }, [loading, hasMore, dispatch]);

  const handleNewsClick = useCallback(
    (post: News) => {
      onNewsClick(post);
    },
    [onNewsClick]
  );

  if (error) {
    return (
      <Alert
        message="Ошибка"
        description={error}
        type="error"
        showIcon
        style={{ marginBottom: 16 }}
      />
    );
  }

  return (
    <InfiniteScroll
      dataLength={news.length}
      style={{
        display: "grid",
        gridTemplateColumns: isScreen1280
          ? "repeat(3, 1fr)"
          : isScreen720
          ? "repeat(2, 1fr)"
          : "repeat(1, 1fr)",
        gap: "12px",
      }}
      next={handleLoadMore}
      hasMore={hasMore}
      loader={
        <div style={{ textAlign: "center", padding: "20px" }}>
          <Spin size="large" />
        </div>
      }
      endMessage={
        <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          Больше новостей нет
        </div>
      }
    >
      {news.map((post) => (
        <NewsCard key={post.id} news={post} onClick={handleNewsClick} />
      ))}
    </InfiniteScroll>
  );
};
