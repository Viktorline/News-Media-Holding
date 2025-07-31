import {
  closeNewsModal,
  openNewsModal,
} from "../../app/store/reducers/newsItemModalReducer";
import { NewsModal } from "../../features/newsModal/NewsModal";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { NewsList } from "../../widgets/newsList/ui/NewsList";

export const FeedPage = () => {
  const dispatch = useAppDispatch();
  const { selectedNews, isModalOpen } = useAppSelector(
    (state) => state.newsItem
  );

  return (
    <div>
      <h2>Лента новостей</h2>
      <NewsList onNewsClick={(post) => dispatch(openNewsModal(post))} />
      <NewsModal
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={() => dispatch(closeNewsModal())}
      />
    </div>
  );
};
