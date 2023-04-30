import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

// expo
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
