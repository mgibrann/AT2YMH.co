import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../component/Header';
import JumpMan from '../../assets/image/jumpan.png';
import Clothes from '../../assets/image/clothes.png';

const Menu = () => {
  return (
    <>
      <Header search />
      <View style={styles.page}>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image
              source={{
                uri:
                  'https://houseofheat.co/app/uploads/2019/12/air-jordan-1-mid-light-smoke-grey-554724-092-release-date-info-2.jpg',
              }}
              style={styles.largeimg}
            />
          </View>
          <View style={styles.wrap}>
            <Text style={styles.text}>Air Jordan Mid Light Smoke Grey</Text>
            <Image source={JumpMan} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <View style={styles.imgwrap}>
          <View>
            <Image source={Clothes} style={styles.imgsmall} />
            <Text style={styles.imgtxt}>Clothes</Text>
          </View>
          <View>
            <Image source={Clothes} style={styles.imgsmall} />
            <Text style={styles.imgtxt}>Clothes</Text>
          </View>
        </View>
        <View style={styles.imgwrap}>
          <View>
            <Image source={Clothes} style={styles.imgsmall} />
            <Text style={styles.imgtxt}>Clothes</Text>
          </View>
          <View>
            <Image source={Clothes} style={styles.imgsmall} />
            <Text style={styles.imgtxt}>Clothes</Text>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Image
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-2020-outfits-1593029318.jpg',
            }}
            style={{height: 60, borderRadius: 20, opacity: 0.7}}
          />
        </View>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  page: {padding: 20, backgroundColor: '#FFFFFF', flex: 1},
  wrapper: {alignItems: 'center', justifyContent: 'center'},
  largeimg: {width: 360, height: 240, borderRadius: 30},
  wrap: {position: 'absolute', flexDirection: 'row'},
  text: {
    top: 15,
    left: 20,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    maxWidth: 120,
  },
  icon: {right: -180, top: 15},
  imgsmall: {
    width: 160,
    height: 100,
    borderRadius: 20,
    opacity: 0.7,
  },
  imgtxt: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: 32,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: '#000000',
    opacity: 1,
  },
  imgwrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
});
