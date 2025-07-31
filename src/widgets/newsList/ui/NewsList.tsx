import { useEffect } from "react";

import { Card } from "antd";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import { fetchNews } from "../../../app/store/reducers/newsListReducer";
import type { News } from "../../../entities/news/model/types";

export const NewsList = ({
  onNewsClick,
}: {
  onNewsClick: (post: News) => void;
}) => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.newsList);
  console.log(news);
  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews() as any);
  }, []);

  return (
    <>
      {news.map((post) => (
        <Card
          key={post.id}
          onClick={() => onNewsClick(post)}
          style={{ marginBottom: 12 }}
        >
          <h3>{post.title}</h3>
        </Card>
      ))}
    </>
  );
};
