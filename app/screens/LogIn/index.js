import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../component/Button';
import FormInput from '../../component/FormInput';
import Header from '../../component/Header';

const LogIn = ({navigation}) => {
  return (
    <>
      <Header />
      <View style={styles.page}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          <Text style={styles.login}>Login</Text>
          <View style={styles.border} />
        </View>
        <FormInput text="E-mail" />
        <View style={{marginBottom: 20}} />
        <FormInput text="Password" />
        <View style={{marginBottom: 40}} />
        <Button
          text="Log In"
          color="#FFFFFF"
          background="#373737"
          onPress={() => navigation.replace('Menu')}
        />
        <Text style={styles.forgot}>Forgot your password?</Text>

        <View style={{alignItems: 'center'}}>
          <View style={styles.border2} />
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              You don't have an account?{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}>
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  login: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  border: {
    height: 3,
    width: 100,
    backgroundColor: '#373737',
    alignItems: 'center',
  },
  border2: {
    marginBottom: 3,
    height: 3,
    width: 320,
    backgroundColor: '#373737',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgot: {
    marginVertical: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
});
