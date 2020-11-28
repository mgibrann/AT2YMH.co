import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import Item from '../../component/Item';
import CatalogItem from '../../component/CatalogItem';
import Firebase from '../../services/Fire';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

const ListItem = ({navigation}) => {
  const [largecatalog, SetLargeCatalog] = useState('');
  const [smallcatalog, SetSmallCatalog] = useState('');

  useEffect(() => {
    Firebase.database()
      .ref('/catalog')
      .once('value')
      .then((res) => {
        const datalarge = res.val().large;
        const datasmall = res.val().small;
        SetLargeCatalog(datalarge);
        SetSmallCatalog(datasmall);
      });
  }, []);

  const onDetails = (item) => {
    navigation.navigate('DetailItem', item);
  };

  return (
    <>
      <Header search />
      <ScrollView>
        <View style={styles.page}>
          {largecatalog.length > 0
            ? largecatalog.map((item) => {
                return (
                  <Item larger onPress={() => onDetails(item)} key={item.id} />
                );
              })
            : null}
          <Text style={styles.recomend}>Recomended</Text>
          <View style={styles.container}>
            {smallcatalog.length > 0
              ? smallcatalog.map((item) => {
                  return (
                    <CatalogItem
                      photo={item.image}
                      title={item.title}
                      onPress={() => onDetails(item)}
                      key={item.id}
                    />
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  page: {padding: 20, backgroundColor: '#FFFFFF', flex: 1},
  recomend: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#373737',
    padding: 5,
    paddingTop: 20,
  },
  container: {
    padding: 40,
    paddingTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
