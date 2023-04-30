import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
