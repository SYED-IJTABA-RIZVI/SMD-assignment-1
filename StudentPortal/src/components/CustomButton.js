import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, type = 'primary', style }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, type === 'secondary' && styles.secondary, style]} 
      onPress={onPress}
    >
      <Text style={[styles.text, type === 'secondary' && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0056D2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  secondary: {
    backgroundColor: '#E0E0E0',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#333333',
  }
});

export default CustomButton;
