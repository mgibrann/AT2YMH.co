import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../component/Header';
import Button from '../../component/Button';
import btnBack from '../../assets/icon/arrow-back.png';
import Firebase from '../../services/Fire';
import Loading from '../../component/Loading';
import {showMessage} from 'react-native-flash-message';

const DetailItem = ({navigation, route}) => {
  const {title, image, id, description, price} = route.params;
  const [loading, SetLoading] = useState(false);

  const addCart = () => {
    SetLoading(true);
    Firebase.database()
      .ref('cart/' + id)
      .set({
        id: id,
        image: image,
        title: title,
        price: price,
      })
      .then((res) => {
        showMessage({
          message: 'Success Add To Cart',
          type: 'success',
        });
        SetLoading(false);
      })
      .catch((res) => {
        const errmessage = res.message;
        showMessage({
          message: errmessage,
          type: 'danger',
        });
        SetLoading(false);
      });
  };

  return (
    <View style={styles.page}>
      <Header search />
      <ScrollView>
        <Image source={{uri: image}} style={styles.image} />
        <TouchableOpacity
          style={{position: 'absolute', left: 20, top: 20}}
          onPress={() => navigation.goBack()}>
          <Image source={btnBack} style={{width: 35, height: 35}} />
        </TouchableOpacity>
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>$ {price}</Text>
          <View style={{marginVertical: 10}}>
            <Text style={styles.desctitle}>Description</Text>
            <Text style={styles.desctext}>{description}</Text>
          </View>
          <Button text="Add To Cart" onPress={addCart} />
          <View style={{marginBottom: 20}} />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FFFFFF'},
  image: {width: '100%', height: 300},
  description: {paddingHorizontal: 20, paddingTop: 5},
  title: {fontFamily: 'Roboto-Medium', fontSize: 20},
  price: {fontFamily: 'Roboto-Bold', fontSize: 26, color: '#373737'},
  desctext: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 35,
  },
  desctitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    borderBottomColor: '#373737',
    borderBottomWidth: 1,
  },
});
