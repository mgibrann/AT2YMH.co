import React, {useState} from 'react';
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
import ImagePicker from 'react-native-image-picker';
import Loading from '../../component/Loading';
import Firebase from '../../services/Fire';
import {storeData} from '../../services/storage';

const CreateAccount = ({navigation}) => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [province, SetProvince] = useState('');
  const [city, SetCity] = useState('');
  const [loading, SetLoading] = useState(false);

  const onCreate = () => {
    SetLoading(true);
    const data = {
      name: name,
      email: email,
      province: province,
      city: city,
    };

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        Firebase.database().ref(`users/${res.user.uid}`).set(data);
        // showMessage({
        //   message: 'Success',
        //   type: 'success',
        // });
        console.log('succes', res);
        SetLoading(false);
        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch((error) => {
        console.log('error', error);
        const errorMessage = error.message;
        // showMessage({
        //   message: errorMessage,
        //   type: 'danger',
        // });
        SetLoading(false);
      });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary({quality: 0.5}, (res) => {
      console.log(res);
    });
  };

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
            <TouchableOpacity onPress={getImage}>
              <Image source={NullPhoto} style={styles.avatar} />
            </TouchableOpacity>
          </View>
          <FormInput
            text="Your Name"
            onChangeText={(value) => SetName(value)}
          />
          <View style={{marginBottom: 10}} />
          <FormInput text="E-mail" onChangeText={(value) => SetEmail(value)} />
          <View style={{marginBottom: 10}} />
          <FormInput
            text="Password"
            onChangeText={(value) => SetPassword(value)}
          />
          <View style={{marginBottom: 10}} />
          <FormInput
            text="Province"
            onChangeText={(value) => SetProvince(value)}
          />
          <View style={{marginBottom: 10}} />
          <FormInput text="City" onChangeText={(value) => SetCity(value)} />
          <View style={{marginBottom: 20}} />
          <Button
            text="Create"
            color="#FFFFFF"
            background="#373737"
            onPress={onCreate}
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
      {loading && <Loading />}
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
