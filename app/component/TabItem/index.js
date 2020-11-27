import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconMenu from '../../assets/icon/icon-menu.png';
import IconList from '../../assets/icon/icon-list.png';
import IconCart from '../../assets/icon/icon-cart.png';
import IconProfile from '../../assets/icon/icon-profile.png';

const TabItem = ({title, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Menu') {
      return <Image source={IconMenu} style={styles.icon} />;
    }
    if (title === 'ListItem') {
      return <Image source={IconList} style={styles.icon} />;
    }
    if (title === 'ShoppingCart') {
      return <Image source={IconCart} style={styles.icon} />;
    }
    if (title === 'Profile') {
      return <Image source={IconProfile} style={styles.icon} />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
