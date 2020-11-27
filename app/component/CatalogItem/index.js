import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const CatalogItem = ({photo, title}) => {
  return (
    <TouchableOpacity style={{marginBottom: 20}}>
      <Image style={styles.img} source={photo} />
      <Text style={styles.desc}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CatalogItem;

const styles = StyleSheet.create({
  img: {width: 100, height: 100},
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    maxWidth: 100,
    textAlign: 'center',
    marginTop: 5,
  },
});
