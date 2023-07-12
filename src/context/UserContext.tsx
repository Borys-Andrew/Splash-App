import React, { createContext, useEffect, useState } from 'react';
import { UserRegister } from '../types/User';
import { getFromLocalStorage } from '../utils/getFromLocalStorage';
import { setToLocalStorage } from '../utils/setToLocalStorage';

type Props = {
  children: React.ReactNode;
};

type UserContextType = {
  user: UserRegister | null;
  setUser: (user: UserRegister | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
});

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserRegister | null>(
    () => getFromLocalStorage('activeUser') || null,
  );

  useEffect(() => {
    setToLocalStorage('activeUser', user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
