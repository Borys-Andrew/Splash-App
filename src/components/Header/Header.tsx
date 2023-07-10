import React from 'react';
import { AuthNav } from '../AuthNav';
import { UserNav } from '../UserNav';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <UserNav />
      <AuthNav />
    </header>
  );
};
