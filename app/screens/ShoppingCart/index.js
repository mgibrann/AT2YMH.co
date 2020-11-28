import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import Firebase from '../../services/Fire';

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

  console.log(item);
  return (
    <>
      <Header />
      <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.profile}>Your Cart</Text>
          <View style={styles.border} />
        </View>
        {item != null
          ? item.map((res) => {
              return (
                <View style={styles.card} key={res.id}>
                  <Image source={{uri: res.image}} style={{borderRadius: 10}} />
                  <View style={{marginLeft: 20, justifyContent: 'center'}}>
                    <Text style={styles.title}>{res.title}</Text>
                    <Text style={styles.price}>$ {res.price}</Text>
                  </View>
                </View>
              );
            })
          : null}
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
