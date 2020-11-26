import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../component/Button';
import ImgHome from '../../assets/image/img-home.png';
import Header from '../../component/Header';

const Home = ({navigation}) => {
  return (
    <>
      <Header />
      <View style={styles.page}>
        <View style={styles.wrap}>
          <Image source={ImgHome} style={styles.img} />
        </View>
        <Button
          text="Log In"
          color="#FFFFFF"
          background="#373737"
          onPress={() => navigation.navigate('LogIn')}
        />
        <Text style={styles.or}>OR</Text>
        <Button
          text="Create Account"
          color="#373737"
          background="#FFFFFF"
          onPress={() => navigation.navigate('CreateAccount')}
        />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            textDecorationLine: 'underline',
            marginTop: 5,
          }}>
          Need help?
        </Text>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 312,
    height: 317,
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130,
  },
  or: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginVertical: 10,
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
