import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Button from '../../component/Button';
import FormInput from '../../component/FormInput';
import Header from '../../component/Header';
import NullPhoto from '../../assets/image/null-photo.png';

const CreateAccount = ({navigation}) => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.page}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.login}>Create Account</Text>
            <View style={styles.border} />
            <TouchableOpacity>
              <Image source={NullPhoto} style={styles.avatar} />
            </TouchableOpacity>
          </View>
          <FormInput text="Your Name" />
          <View style={{marginBottom: 10}} />
          <FormInput text="E-mail" />
          <View style={{marginBottom: 10}} />
          <FormInput text="Password" />
          <View style={{marginBottom: 10}} />
          <FormInput text="Province" />
          <View style={{marginBottom: 10}} />
          <FormInput text="City" />
          <View style={{marginBottom: 20}} />
          <Button
            text="Create"
            color="#FFFFFF"
            background="#373737"
            onPress={() => navigation.replace('Menu')}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
            }}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 14}}>
              You already have an account?{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 14,
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    height: 120,
    width: 120,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 120 / 2,
  },
  login: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  border: {
    height: 3,
    width: 200,
    backgroundColor: '#373737',
    alignItems: 'center',
  },
  forgot: {
    marginVertical: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
});
