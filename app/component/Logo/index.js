import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Logo = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
      <Text style={styles.title}>AT</Text>
      <Text style={styles.super}>2</Text>
      <Text style={styles.title}>YMH.co</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 36,
    lineHeight: 42,
  },
  super: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    lineHeight: 20,
  },
});
