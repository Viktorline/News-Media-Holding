import { useCallback } from "react";
import {
  closeNewsModal,
  openNewsModal,
} from "../../app/store/reducers/newsItemModalReducer";
import { NewsModal } from "../../features/newsModal/NewsModal";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { NewsList } from "../../widgets/newsList/ui/NewsList";
import type { News } from "../../entities/news/model/types";

export const FeedPage = () => {
  const dispatch = useAppDispatch();
  const { selectedNews, isModalOpen } = useAppSelector(
    (state) => state.newsItem
  );

  const handleNewsClick = useCallback(
    (post: News) => {
      dispatch(openNewsModal(post));
    },
    [dispatch]
  );

  const handleCloseModal = useCallback(() => {
    dispatch(closeNewsModal());
  }, [dispatch]);

  return (
    <div>
      <h2>Лента</h2>
      <NewsList onNewsClick={handleNewsClick} />
      <NewsModal
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
