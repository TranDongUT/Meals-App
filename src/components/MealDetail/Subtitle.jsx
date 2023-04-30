import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e2b497',
    textAlign: 'center',
  },

  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
  },
});
