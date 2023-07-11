import React from 'react';
import { AuthNav } from '../AuthNav';
import { Container } from '../Container';
import { UserNav } from '../UserNav';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <UserNav />
          <AuthNav />
        </div>
      </Container>
    </header>
  );
};
