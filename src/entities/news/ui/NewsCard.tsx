import { Card } from "antd";
import type { News } from "../model/types";

interface NewsCardProps {
  news: News;
  onClick: (news: News) => void;
}

export const NewsItemCard = ({ news, onClick }: NewsCardProps) => {
  return (
    <Card
      hoverable
      style={{
        marginBottom: 16,
        backgroundColor: "#f5f5f5",
        border: "1px solid #d9d9d9",
        cursor: "pointer",
      }}
      onClick={() => onClick(news)}
    >
      <div style={{ color: "#666" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>{news.title}</h3>
        <p style={{ margin: "0 0 8px 0", color: "#666" }}>
          {news.text.length > 100
            ? `${news.text.substring(0, 100)}...`
            : news.text}
        </p>
        <small style={{ color: "#999" }}>{news.date}</small>
      </div>
    </Card>
  );
};
