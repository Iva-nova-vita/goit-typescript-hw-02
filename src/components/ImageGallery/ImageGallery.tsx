import css from './ImageGallery.module.css'
import {ImageCard} from '../ImageCard/ImageCard';
import {Image} from '../../types/types'

type ImageCardProps = {
  images: Image[],
  openModal: (item: Image)=>void,
}
export const ImageGallery: React.FC<ImageCardProps> = ({ images, openModal }) => {

  return (
    <ul className={css.gallery}>
      {images.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id} onClick={()=>openModal(item)}>
            <ImageCard image={item}></ImageCard>
          </li>
        );
      })}
    </ul>
  );
}
