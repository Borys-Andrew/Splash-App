import React from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import './AuthNav.scss';

export const AuthNav: React.FC = () => {
  return (
    <div className="auth-nav">
      <NavigationLink to="/login" title="Login" />
      <NavigationLink to="/register" title="Register" />
    </div>
  );
};
