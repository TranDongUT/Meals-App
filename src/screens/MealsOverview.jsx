import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

// data
import { CATEGORIES, MEALS } from '../../data/dummy-data';

// component
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverview({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  // UI Navigate
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}
