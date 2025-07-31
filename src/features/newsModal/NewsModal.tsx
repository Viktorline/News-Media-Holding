import { Modal, Typography, Tag, Space, Button } from "antd";
import { CalendarOutlined, CloseOutlined } from "@ant-design/icons";
import type { News } from "../../entities/news/model/types";
import { formatDate } from "../../shared/utils/dateUtils";
import { NewsMetrics } from "../../entities/news/ui/NewsMetrics";
import { NewsTags } from "../../entities/news/ui/NewsTags";

const { Title, Paragraph } = Typography;

interface NewsModalProps {
  isOpen: boolean;
  news: News | null;
  onClose: () => void;
}

export const NewsModal = ({ isOpen, news, onClose }: NewsModalProps) => {
  if (!news) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={800}
      closeIcon={
        <Button
          type="text"
          icon={<CloseOutlined />}
          style={{
            color: "#666",
            fontSize: "16px",
          }}
        />
      }
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1890ff20 0%, #1890ff40 100%)",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: 64,
            color: "#1890ff",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {news.title.charAt(0).toUpperCase()}
        </div>
      </div>

      <div style={{ padding: 32 }}>
        <Space style={{ marginBottom: 20 }}>
          <Tag
            color="blue"
            style={{
              borderRadius: 20,
              padding: "6px 16px",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            #{news.id}
          </Tag>
          <Tag
            color="default"
            style={{
              borderRadius: 20,
              padding: "6px 16px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "14px",
            }}
          >
            <CalendarOutlined />
            {formatDate()}
          </Tag>
        </Space>

        <Title
          level={1}
          style={{
            margin: "0 0 20px 0",
            color: "#1a1a1a",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {news.title}
        </Title>

        <Paragraph
          style={{
            color: "#333",
            fontSize: "16px",
            marginBottom: 24,
            textAlign: "justify",
          }}
        >
          {news.body}
        </Paragraph>

        <NewsTags news={news} />

        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid #f0f0f0",
            marginTop: 24,
          }}
        >
          <NewsMetrics news={news} />
        </div>
      </div>
    </Modal>
  );
};
