import css from './ImageCard.module.css';
import { Image } from '../../types/types';

type ImageCardProps = {
  image: Image
}

export const ImageCard: React.FC<ImageCardProps> = ({image}: ImageCardProps) => {
  const { urls, alt_description } = image;
  
  return (
      <img className={css.image} src={urls.small} alt={alt_description} />
  );
}
