import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/Header';

export default function Market({ navigation }) {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: -23.52510662325689,
    longitude: -46.68052477139523,
    latitudeDelta: 0.007200766742091247,
    longitudeDelta: 0.0044417387748012516
  });

  useEffect(() => {
    const findCoordinates = () => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
    findCoordinates();
  }, []);

  return (
    <SafeAreaView style={styles.content}>
      <Header title="Market" navigation={navigation} showMenu />
      <MapView style={styles.bgMap} region={currentLocation} />
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
