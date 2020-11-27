import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../component/Header';
import Item from '../../component/Item';
import AppleWatch from '../../assets/image/applewatch.png';
import CatalogItem from '../../component/CatalogItem';

const ListItem = () => {
  return (
    <>
      <Header search />
      <ScrollView>
        <View style={styles.page}>
          <Item larger />
          <Text style={styles.recomend}>Recomended</Text>
          <View style={styles.container}>
            <CatalogItem photo={AppleWatch} title="Applewatch Series 4 38mm" />
            <CatalogItem photo={AppleWatch} title="Applewatch Series 4 38mm" />
            <CatalogItem photo={AppleWatch} title="Applewatch Series 4 38mm" />
            <CatalogItem photo={AppleWatch} title="Applewatch Series 4 38mm" />
            <CatalogItem photo={AppleWatch} title="Applewatch Series 4 38mm" />
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
