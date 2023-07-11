import React, { useEffect, useState } from 'react';
import { getRandomPhotos } from '../../api/images';
import { Container } from '../../components/Container';
import { Gallery } from '../../components/Gallery';
import { PhotoPreview } from '../../types/Photo';
import './GalleryPage.scss';

export const GalleryPage: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoPreview[]>([]);

  const getPhotosh = async () => {
    try {
      const data = await getRandomPhotos();

      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotosh();
  }, []);

  console.log('photos--->', photos);

  return (
    <div className="gallery">
      <Container>
        <h1>GalaryPage</h1>
        <Gallery photos={photos} />
      </Container>
    </div>
  );
};
