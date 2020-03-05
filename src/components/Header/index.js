import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title, navigation, showMenu }) => {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="#efefef" barStyle="dark-content" />
      {showMenu && (
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="bars" size={30} />
        </TouchableOpacity>
      )}
      <View style={styles.viewTitle}>
        <Text style={[styles.headerTitle, showMenu && styles.hasMenuButton]}>{title}</Text>
      </View>
    </View>
  );
};

Header.defaultProps = { showMenu: false, navigation: null };

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#efefef'
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  hasMenuButton: {
    marginLeft: -40
  },
  viewTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuButton: {
    marginLeft: 10
  }
});
export default Header;
