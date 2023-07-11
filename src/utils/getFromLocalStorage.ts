export const getFromLocalStorage = (key: string) => {
  const usersPreview = localStorage.getItem(key);

  if (usersPreview === null) {
    return false;
  }

  const users = JSON.parse(usersPreview);

  return users;
};
