import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../../component/Logo';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#373737',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
