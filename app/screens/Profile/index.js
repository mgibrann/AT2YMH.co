import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import Button from '../../component/Button';
import Header from '../../component/Header';
import Firebase from '../../services/Fire';
import {getData} from '../../services/storage';

const Profile = ({navigation}) => {
  const [data, SetData] = useState();
  const [dataload, SetDataLoad] = useState(false);

  useEffect(() => {
    getData('user').then((res) => {
      SetData(res);
      SetDataLoad(true);
    });
  }, []);

  const LogOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        showMessage({
          message: 'Succes Sign Out',
          type: 'success',
        });
        navigation.replace('Home');
      })
      .catch((err) => {
        const errormessage = err.message;
        showMessage({
          message: errormessage,
          type: 'danger',
        });
      });
  };

  return (
    <>
      <Header />
      <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.profile}>User Profile</Text>
          <View style={styles.border} />
        </View>
        {dataload && (
          <View>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={{uri: data.photo}} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.wraptext}>
              <Text style={styles.title}>FullName</Text>
              <Text style={styles.desc}>{data.name}</Text>
            </View>
            <View style={styles.wraptext}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.desc}>{data.email}</Text>
            </View>
            <View style={styles.wraptext}>
              <Text style={styles.title}>Province</Text>
              <Text style={styles.desc}>{data.province}</Text>
            </View>
            <View style={styles.wraptext}>
              <Text style={styles.title}>City</Text>
              <Text style={styles.desc}>{data.city}</Text>
            </View>
          </View>
        )}
        <View style={{height: 20}} />
        <Button text="SignOut" onPress={LogOut} />
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#373737',
  },
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: '#373737',
    borderBottomWidth: 1,
    borderBottomColor: '#373737',
  },
  profile: {
    fontSize: 28,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  border: {
    height: 3,
    width: 170,
    backgroundColor: '#373737',
    alignItems: 'center',
  },
  avatar: {
    height: 120,
    width: 120,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 120 / 2,
  },
  wraptext: {
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
});
