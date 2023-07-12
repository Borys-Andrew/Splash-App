import React from 'react';
import { PhotoPreview } from '../../types/Photo';
import './GalleryItem.scss';

type Props = {
  photo: PhotoPreview;
  handleImage: (photo: PhotoPreview) => void;
  handleFavorite: (photo: PhotoPreview) => void;
};

export const GalleryItem: React.FC<Props> = ({
  photo,
  handleImage,
  handleFavorite,
}) => {
  const { urls, description } = photo;

  return (
    <div className="gallery-card-wrapper">
      <button
        type="button"
        className="gallery-card"
        onClick={() => handleImage(photo)}
      >
        <img className="gallery-image" src={urls.regular} alt={description} />
      </button>
      <button
        className="favorite-btn"
        type="button"
        onClick={() => handleFavorite(photo)}
      >
        {/* {  ? ❤️: 🤍} */}
        🤍
      </button>
    </div>
  );
};
