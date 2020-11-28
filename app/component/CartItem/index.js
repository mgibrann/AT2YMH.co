import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CartItem = ({photo, title, price}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: photo}} style={styles.image} />
      <View style={{marginLeft: 20, justifyContent: 'center'}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#37373750',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    maxWidth: 200,
    color: '#373737',
  },
  price: {
    marginTop: 5,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  image: {borderRadius: 10, width: 100, height: 100},
});
