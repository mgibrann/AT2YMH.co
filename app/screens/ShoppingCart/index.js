import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import AppleWatch from '../../assets/image/applewatch.png';

const ShoppingCart = () => {
  return (
    <>
      <Header />
      <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.profile}>Your Cart</Text>
          <View style={styles.border} />
        </View>
        <View style={styles.card}>
          <Image source={AppleWatch} style={{borderRadius: 10}} />
          <View style={{marginLeft: 20, justifyContent: 'center'}}>
            <Text style={styles.title}>
              Apple Watch Series 20 wadawd wadawd awdaw
            </Text>
            <Text style={styles.price}>$ 288</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profile: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  border: {
    height: 3,
    width: 170,
    backgroundColor: '#373737',
    alignItems: 'center',
  },
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
  },
  price: {marginTop: 5, fontFamily: 'Roboto-Bold', fontSize: 20},
});
