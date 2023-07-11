import { UserRegister } from '../types/User';

export const setToLocalStorage = (
  key: string,
  users: UserRegister[],
) => {
  localStorage.setItem(key, JSON.stringify(users));
};
