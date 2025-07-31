import { Card, Tag, Space, Typography } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import type { News } from "../model/types";
import { formatDate } from "../../../shared/utils/dateUtils";
import { NewsMetrics } from "./NewsMetrics";
import { NewsTags } from "./NewsTags";

const { Title, Paragraph } = Typography;

interface NewsCardProps {
  news: News;
  onClick: (news: News) => void;
}

export const NewsCard = ({ news, onClick }: NewsCardProps) => {
  const handleClick = useCallback(() => {
    onClick(news);
  }, [onClick, news]);

  return (
    <Card
      hoverable
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        borderRadius: 20,
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
        border: "none",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      }}
      cover={
        <div
          style={{
            height: 200,
            background: "linear-gradient(135deg, #1890ff20 0%, #1890ff40 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>')`,
            }}
          />
          <div
            style={{
              fontSize: 48,
              color: "#1890ff",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {news.title.charAt(0).toUpperCase()}
          </div>
        </div>
      }
    >
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Space style={{ marginBottom: 16 }}>
          <Tag
            color="blue"
            style={{
              borderRadius: 20,
              padding: "4px 12px",
              fontWeight: 500,
            }}
          >
            #{news.id}
          </Tag>
          <Tag
            color="default"
            style={{
              borderRadius: 20,
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <CalendarOutlined />
            {formatDate()}
          </Tag>
        </Space>

        <Title
          level={3}
          ellipsis={{ rows: 1 }}
          style={{
            margin: "0 0 12px 0",
            color: "#1a1a1a",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {news.title}
        </Title>

        <Paragraph ellipsis={{ rows: 3 }}>{news.body}</Paragraph>

        <div style={{ marginTop: "auto" }}>
          <NewsTags news={news} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 16,
              borderTop: "1px solid #f0f0f0",
            }}
          >
            <NewsMetrics news={news} />
          </div>
        </div>
      </div>
    </Card>
  );
};
