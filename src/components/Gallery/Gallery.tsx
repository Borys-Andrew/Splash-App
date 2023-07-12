import React, { useEffect, useState } from 'react';
import StackGrid from 'react-stack-grid';
import { PhotoPreview } from '../../types/Photo';
import { GalleryItem } from '../GalleryItem/GalleryItem';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';
import { setToLocalStorage } from '../../utils/setToLocalStorage';
import { Modal } from '../Modal';
import './Gallery.scss';

type Props = {
  photos: PhotoPreview[];
};

export const Gallery: React.FC<Props> = ({ photos }) => {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState<PhotoPreview | null>(null);
  const { email } = getFromLocalStorage('activeUser');
  const [userPhotos, setUserPhotos] = useState(
    getFromLocalStorage(`${email}`) || [],
  );

  const handleClose = () => {
    setModal(false);
  };

  const handleActive = (data: PhotoPreview) => {
    setModal(true);
    setModalImage(data);
  };

  const handlerFavorite = (image: PhotoPreview) => {
    const findDublicat = userPhotos.find(
      (el: PhotoPreview) => el.id === image.id,
    );

    if (userPhotos.length === 0) {
      setUserPhotos([...userPhotos, image]);
    }

    if (findDublicat) {
      // eslint-disable-next-line no-alert
      alert('Image exist in favorite list');

      return;
    }

    setUserPhotos([...userPhotos, image]);
  };

  useEffect(() => {
    setToLocalStorage(`${email}`, userPhotos);
  }, [userPhotos]);

  return (
    <>
      <StackGrid
        duration={0}
        columnWidth={200}
        gutterWidth={10}
        gutterHeight={10}
        component="div"
      >
        {photos.map((photo) => (
          <GalleryItem
            key={photo.id}
            photo={photo}
            handleImage={handleActive}
            handleFavorite={handlerFavorite}
          />
        ))}
      </StackGrid>
      {modal && <Modal onClose={handleClose} modalImage={modalImage} />}
    </>
  );
};
