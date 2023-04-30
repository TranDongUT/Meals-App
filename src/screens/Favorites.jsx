import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';

// data
import { MEALS } from '../../data/dummy-data';

// store
import { FavoritesContext } from '../store/context/Favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';

export default function Favorites() {
  // context
  const favoriteMealCtx = useContext(FavoritesContext);

  // redux
  const { ids: favoriteMealIds } = useSelector((state) => state.favoriteMeals);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealCtx.ids.includes(meal.id)
  // );
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Your have not favorite Meal yet</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
