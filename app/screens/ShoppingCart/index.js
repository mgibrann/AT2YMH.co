import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CartItem from '../../component/CartItem';
import Header from '../../component/Header';
import Firebase from '../../services/Fire';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const ShoppingCart = () => {
  const [item, SetItem] = useState('');

  useEffect(() => {
    Firebase.database()
      .ref('/cart')
      .on('value', (res) => {
        const data = res.val();
        SetItem(data);
      });
  }, []);

  return (
    <>
      <Header search />
      <ScrollView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={styles.page}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.profile}>Your Cart</Text>
            <View style={styles.border} />
          </View>
          {item.length > 0
            ? item.map((res) => {
                return (
                  <CartItem
                    key={res.id}
                    title={res.title}
                    photo={res.image}
                    price={res.price}
                    onPress={() => onClickDetails(res)}
                  />
                );
              })
            : null}
        </View>
      </ScrollView>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  page: {
    padding: 20,

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
});
