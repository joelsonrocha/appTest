import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const RepoItem = ({ item }) => {
  const { full_name: fullName, language } = item;
  return (
    <View style={style.itemContainer}>
      <View style={style.langContainer}>
        <Text style={style.itemLang}>{language || 'No lang'}</Text>
      </View>
      <View>
        <Text style={style.itemFullName}>{fullName}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  itemContainer: {
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderColor: '#ccc'
  },
  itemFullName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  itemLang: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 10
  },
  langContainer: {
    backgroundColor: '#d00',
    padding: 5,
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 100
  }
});
export default RepoItem;
