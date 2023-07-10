import React from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import './UserNav.scss';

export const UserNav: React.FC = () => {
  return (
    <div className="user-nav">
      <NavigationLink to="/" title="Home" />
      <NavigationLink to="/gallery" title="Gallery" />
      <NavigationLink to="/favorite" title="Favorite" />
    </div>
  );
};
