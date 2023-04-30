import { View, Text, FlatList } from 'react-native';
import React from 'react';

// data
import { CATEGORIES } from '../../data/dummy-data.js';
import CategoryGridTile from '../components/CategoryGridTile.jsx';

export default function Categories({ navigation }) {
  const renderCategoryItem = (categoryData) => {
    const handlePress = () => {
      navigation.navigate('MealsOverview', {
        categoryId: categoryData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={categoryData.item.title}
        color={categoryData.item.color}
        onPress={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
