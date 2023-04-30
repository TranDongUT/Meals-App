import React, { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

// data
import { CATEGORIES, MEALS } from '../../data/dummy-data';

// component
import MealItem from '../components/MealItem';

export default function MealsOverview({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  const renderMealItem = (mealData) => {
    const item = mealData.item;

    mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      <MealItem
        id={mealItemProps.id}
        title={mealItemProps.title}
        imageUrl={mealItemProps.imageUrl}
        duration={mealItemProps.duration}
        complexity={mealItemProps.complexity}
        affordability={mealItemProps.affordability}
      />
    );
  };

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
