import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';

// navigate
import { useNavigation } from '@react-navigation/native';

// screen
import MealDetails from '../MealDetails';

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  const handlePressMealItem = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.itemPress : null)}
        onPress={handlePressMealItem}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* detail */}
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 8,
    margin: 16,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#5d5b5b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    overflow: Platform.select({ android: 'hidden' }),
  },

  itemPress: {
    opacity: 0.5,
  },

  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
