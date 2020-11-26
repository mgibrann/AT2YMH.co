import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({text, onPress, color, background}) => {
  return (
    <TouchableOpacity
      style={styles.container(background, color)}
      onPress={onPress}>
      <Text style={styles.text(color, background)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (background, color) => ({
    backgroundColor: background,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: color,
  }),
  text: (color) => ({
    textAlign: 'center',
    color: color,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  }),
});
