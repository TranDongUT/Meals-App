import React, { useContext, useLayoutEffect } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// data
import { MEALS } from '../../data/dummy-data';

// store
import { FavoritesContext } from '../store/context/Favorites-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/slices/favorites';

// component
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  // context
  const favoriteMealCtx = useContext(FavoritesContext);

  // redux
  const { ids: favoriteMealIds } = useSelector((state) => state.favoriteMeals);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const isFavorite = favoriteMealCtx.ids.includes(mealId);
  const isFavorite = favoriteMealIds.includes(mealId);
  const handleChangeFavoriteStatus = () => {
    if (isFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isFavorite ? 'star' : 'star-outline'}
          color='#fff'
          onPress={handleChangeFavoriteStatus}
        />
      ),
    });
  }, [navigation, handleChangeFavoriteStatus]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },

  image: {
    width: '100%',
    height: 350,
  },

  title: {
    margin: 8,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  detailText: {
    color: '#fff',
  },

  listOuterContainer: {
    alignItems: 'center',
  },

  listContainer: {
    width: '80%',
  },
});
