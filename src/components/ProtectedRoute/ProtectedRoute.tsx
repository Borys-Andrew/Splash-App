import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  }

  return <Navigate to="/register" />;
};
