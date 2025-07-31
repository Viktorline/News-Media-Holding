import { useEffect } from "react";
import { Card, Spin, Alert } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import type { News } from "../../../entities/news/model/types";
import { fetchNews, loadMoreNews } from "../../../entities/news/api/getNews";

export const NewsList = ({
  onNewsClick,
}: {
  onNewsClick: (post: News) => void;
}) => {
  const dispatch = useAppDispatch();
  const { news, loading, hasMore, error } = useAppSelector(
    (state) => state.newsList
  );

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews() as any);
  }, []);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      dispatch(loadMoreNews() as any);
    }
  };

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
        <Card
          key={post.id}
          onClick={() => onNewsClick(post)}
          style={{ marginBottom: 12, cursor: "pointer" }}
          hoverable
        >
          <h3>{post.title}</h3>
        </Card>
      ))}
    </InfiniteScroll>
  );
};
