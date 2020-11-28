import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Button from '../../component/Button';
import FormInput from '../../component/FormInput';
import Header from '../../component/Header';
import Loading from '../../component/Loading';
import Firebase from '../../services/Fire';
import {storeData} from '../../services/storage';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const LogIn = ({navigation}) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, SetLoading] = useState(false);

  const onLogIn = () => {
    SetLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        Firebase.database()
          .ref(`users/${res.user.uid}`)
          .once('value')
          .then((res) => {
            SetLoading(false);
            storeData('user', res.val());
          })
          .catch((err) => {
            const errmessage = err.message;
            showMessage({
              message: errmessage,
              type: 'danger',
            });
            SetLoading(false);
          });
        navigation.replace('MainApp');
      })
      .catch((err) => {
        const errmessage = err.message;
        showMessage({
          message: errmessage,
          type: 'danger',
        });
        SetLoading(false);
      });
  };
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
        <FormInput text="E-mail" onChangeText={(value) => SetEmail(value)} />
        <View style={{marginBottom: 20}} />
        <FormInput
          text="Password"
          onChangeText={(value) => SetPassword(value)}
        />
        <View style={{marginBottom: 40}} />
        <Button
          text="Log In"
          color="#FFFFFF"
          background="#373737"
          onPress={onLogIn}
        />
        <Text style={styles.forgot}>Forgot your password?</Text>

        <View style={{alignItems: 'center'}}>
          <View style={styles.border2} />
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => navigation.navigate('CreateAccount')}>
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
      {loading && <Loading />}
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
