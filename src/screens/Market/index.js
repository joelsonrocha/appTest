import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import Header from '../../components/Header';

export default function Market({ navigation }) {
  return (
    <SafeAreaView style={styles.content}>
      <Header title="Market" navigation={navigation} showMenu />
      <MapView
        style={styles.bgMap}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  bgMap: {
    flex: 1
  }
});
