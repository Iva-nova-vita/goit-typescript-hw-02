import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
    onLoadMore: () => void;
  }
export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({onLoadMore}: LoadMoreBtnProps) => {
    return (
        <button className={css.btnLoadMore} onClick={onLoadMore}>Load more</button>
    )
}