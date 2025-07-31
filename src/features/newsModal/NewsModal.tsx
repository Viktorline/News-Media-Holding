import { Modal } from "antd";
import type { News } from "../../entities/news/model/types";

interface Props {
  isOpen: boolean;
  news: News | null;
  onClose: () => void;
}

export const NewsModal = ({ isOpen, news, onClose }: Props) => {
  return (
    <Modal open={isOpen} onCancel={onClose} footer={null} title={news?.title}>
      <p>{news?.text}</p>
    </Modal>
  );
};
