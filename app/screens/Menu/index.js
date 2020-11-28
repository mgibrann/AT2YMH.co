import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import Item from '../../component/Item';

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
            <Item title="CLOTHES" />
            <Item title="PANTS" />
          </View>
          <View style={styles.imgwrap}>
            <Item title="SNEAKERS" />
            <Item title="ACCESSORIES" />
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
