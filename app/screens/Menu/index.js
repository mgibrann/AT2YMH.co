import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import Item from '../../component/Item';
import Accessories from '../../assets/image/apple.png';
import Sneakers from '../../assets/image/sneakers.png';
import Pants from '../../assets/image/pants.png';
import Clothes from '../../assets/image/clothes.png';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const Menu = () => {
  return (
    <>
      <Header search />
      <View style={styles.page}>
        <Item larger />
        <View style={{flexDirection: 'column'}}>
          <View style={styles.imgwrap}>
            <Item title="CLOTHES" photo={Clothes} />
            <Item title="PANTS" photo={Pants} />
          </View>
          <View style={styles.imgwrap}>
            <Item title="SNEAKERS" photo={Sneakers} />
            <Item title="ACCESSORIES" photo={Accessories} />
          </View>
          <View style={styles.imgwrap}>
            <Item title="OUTFITS" medium />
          </View>
        </View>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {padding: 20, backgroundColor: '#FFFFFF', flex: 1},
  imgwrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});
