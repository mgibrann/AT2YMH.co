import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../component/Header';
import NullPhoto from '../../assets/image/null-photo.png';

const Profile = () => {
  return (
    <>
      <Header />
      <View style={styles.page}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.profile}>User Profile</Text>
          <View style={styles.border} />
          <TouchableOpacity>
            <Image source={NullPhoto} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        <View style={styles.wraptext}>
          <Text style={styles.title}>FullName</Text>
          <Text style={styles.desc}>Anjay Gurinjay</Text>
        </View>
        <View style={styles.wraptext}>
          <Text style={styles.title}>FullName</Text>
          <Text style={styles.desc}>Anjay Gurinjay</Text>
        </View>
        <View style={styles.wraptext}>
          <Text style={styles.title}>FullName</Text>
          <Text style={styles.desc}>Anjay Gurinjay</Text>
        </View>
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
