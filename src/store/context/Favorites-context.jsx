import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    return setFavoriteIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    return setFavoriteIds((prev) =>
      prev.filter((favoriteId) => favoriteId !== id)
    );
  };

  const values = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}
