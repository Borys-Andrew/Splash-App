import React, { useContext } from 'react';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { UserContext } from '../../context/UserContext';
import './AuthNav.scss';

export const AuthNav: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem('activeUser');
    setUser(null);
  };

  console.log('user===>', user);

  return (
    <div className="auth-nav">
      {!user && <NavigationLink to="/login" title="Login" />}
      {!user && <NavigationLink to="/register" title="Register" />}
      {user && `Hi, ${user.username}`}
      {user && (
        <button
          className="logout-btn"
          type="button"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      )}
    </div>
  );
};
