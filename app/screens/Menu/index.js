import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../component/Header';

import Item from '../../component/Item';

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
