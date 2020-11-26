import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Logo from '../Logo';
import SearchBar from '../../assets/icon/search-bar.png';
import IconSearch from '../../assets/icon/search.png';
import {TextInput} from 'react-native-gesture-handler';

const Header = ({search}) => {
  if (search) {
    return (
      <View style={styles.container(search)}>
        <View>
          <Image source={SearchBar} style={{height: 37, width: 356}} />
          <Image
            source={IconSearch}
            style={{
              position: 'absolute',
              height: 10,
              width: 10,
              left: 12,
              top: 14,
            }}
          />
          <TextInput
            style={{
              top: 2,
              left: 25,
              position: 'absolute',
              height: 35,
              width: 330,
              color: 'black',
              fontSize: 12,
            }}
            placeholder="Search"
          />
        </View>
        <Logo />
      </View>
    );
  } else {
    return (
      <View style={styles.container()}>
        <Logo />
      </View>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  container: (search) => ({
    height: 120,
    backgroundColor: '#373737',
    padding: 10,
    alignItems: 'center',
    justifyContent: search ? 'space-between' : 'center',
  }),
});
