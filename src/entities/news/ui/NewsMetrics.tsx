import { Space, Avatar } from "antd";
import {
  EyeOutlined,
  LikeOutlined,
  DislikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { News } from "../model/types";

interface NewsMetricsProps {
  news: News;
}

export const NewsMetrics = ({ news }: NewsMetricsProps) => {
  return (
    <Space size="large">
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Avatar
          size="small"
          icon={<UserOutlined />}
          style={{ backgroundColor: "#1890ff" }}
        />
        <span style={{ fontSize: "12px", color: "#666" }}>
          Автор {news.userId}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <LikeOutlined style={{ color: "#1890ff" }} />
        <span style={{ fontSize: "12px", color: "#666" }}>
          {news.reactions.likes}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <DislikeOutlined style={{ color: "#ff4d4f" }} />
        <span style={{ fontSize: "12px", color: "#666" }}>
          {news.reactions.dislikes}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <EyeOutlined style={{ color: "#52c41a" }} />
        <span style={{ fontSize: "12px", color: "#666" }}>{news.views}</span>
      </div>
    </Space>
  );
};
