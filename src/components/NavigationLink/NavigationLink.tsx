import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import './NavigationLink.scss';

type Props = {
  to: string;
  title: string;
};

export const NavigationLink: React.FC<Props> = ({ to, title }) => (
  <NavLink
    className={({ isActive }) => cn('navbar-item', {
      isActive,
    })}
    to={to}
  >
    {title}
  </NavLink>
);
