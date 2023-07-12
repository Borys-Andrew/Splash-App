import React from 'react';
import { Container } from '../../components/Container';
import { Gallery } from '../../components/Gallery';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';
import './FavoritePage.scss';

export const FavoritePage: React.FC = () => {
  const { email } = getFromLocalStorage('activeUser');
  const userPhotos = getFromLocalStorage(`${email}`);

  return (
    <div className="favorite">
      <Container>
        <Gallery photos={userPhotos} />
      </Container>
    </div>
  );
};
