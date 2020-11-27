import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';

const Loading = () => {
  return (
    <View style={styles.page}>
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Text style={styles.load}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#37373750',
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  load: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: 'white',
    marginTop: 10,
  },
});
