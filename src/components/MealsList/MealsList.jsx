import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

export default function MealsList({ items }) {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
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
