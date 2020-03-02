import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#efefef" barStyle="dark-content" />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#efefef'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default Header;
