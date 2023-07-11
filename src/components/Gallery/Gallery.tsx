import React from 'react';
import { PhotoPreview } from '../../types/Photo';
import './Gallery.scss';

type Props = {
  photos: PhotoPreview[];
};

export const Gallery: React.FC<Props> = ({ photos }) => {
  return (
    <div>
      <h1>Gallery photos</h1>
      <div className="gallery-photo">
        {photos.map((el) => {
          return (
            <div className="gallery-card" key={el.id}>
              <img
                className="gallery-image"
                src={el.url}
                alt={el.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
