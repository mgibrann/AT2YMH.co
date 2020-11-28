import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const CatalogItem = ({photo, title, onPress}) => {
  return (
    <TouchableOpacity style={{marginBottom: 20}} onPress={onPress}>
      <Image style={styles.img} source={{uri: photo}} resizeMode="contain" />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.desc}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatalogItem;

const styles = StyleSheet.create({
  img: {width: 120, height: 120},
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    maxWidth: 100,
    textAlign: 'center',
    marginTop: 5,
  },
});
