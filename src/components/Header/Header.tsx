import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { AuthNav } from '../AuthNav';
import { Container } from '../Container';
import { SearchQuery } from '../SearchQuery/SearchQuery';
import { UserNav } from '../UserNav';
import './Header.scss';

export const Header: React.FC = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const isLocation = location.pathname === '/gallery';

  return (
    <header className="header">
      <Container>
        <div className="header__content">
          {user && <UserNav />}
          {!user && <div></div>}
          {isLocation && <SearchQuery />}
          <AuthNav />
        </div>
      </Container>
    </header>
  );
};
