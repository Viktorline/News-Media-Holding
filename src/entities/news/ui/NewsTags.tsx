import { Space, Tag } from "antd";
import type { News } from "../model/types";

interface NewsTagsProps {
  news: News;
}

export const NewsTags = ({ news }: NewsTagsProps) => {
  if (!news.tags || news.tags.length === 0) return null;

  return (
    <Space style={{ marginBottom: 16 }}>
      {news.tags.map((tag, index) => (
        <Tag
          key={index}
          color="purple"
          style={{
            borderRadius: 20,
            padding: "4px 12px",
            fontSize: "12px",
          }}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  );
};
