const getSavedItem = (item: string) => {
  const savedItem = localStorage.getItem("L" + item);
  if (savedItem) {
    return JSON.parse(savedItem);
  }

  return null;
};

const saveItem = (item: string, value: string | number | string[]) => {
  localStorage.setItem("L" + item, JSON.stringify(value));
};

const localStorageUtils = {
  getSavedItem,
  saveItem,
};

export default localStorageUtils;
