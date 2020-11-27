import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import Clothes from '../../assets/image/clothes.png';
import Outfits from '../../assets/image/outfit.jpg';
import JumpMan from '../../assets/image/jumpan.png';
import Airjordan from '../../assets/image/air-jordan.webp';

const Item = ({title, larger, medium, onPress}) => {
  if (medium) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={Outfits} style={styles.imgmedium} />
          <Text style={styles.imgtxt}>OUTFITS</Text>
        </View>
      </TouchableOpacity>
    );
  }
  if (larger) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper}>
          <Image source={Airjordan} style={styles.largeimg} />
        </View>
        <View style={styles.wrap}>
          <Text style={styles.text}>Air Jordan Mid Light Smoke Grey</Text>
          <Image source={JumpMan} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image source={Clothes} style={styles.imgsmall} />
        <Text style={styles.imgtxt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  imgsmall: {
    width: 160,
    height: 90,
    borderRadius: 20,
    opacity: 0.7,
  },
  imgtxt: {
    position: 'absolute',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: '#000000',
    opacity: 1,
  },
  imgmedium: {width: 350, height: 60, borderRadius: 20, opacity: 0.7},
  largeimg: {width: 360, height: 240, borderRadius: 30},
  wrapper: {alignItems: 'center', justifyContent: 'center'},
  wrap: {position: 'absolute', flexDirection: 'row'},
  text: {
    top: 15,
    left: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    maxWidth: 140,
  },
  icon: {right: -160, top: 15},
});
