import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/Header';

export default function Market({ navigation }) {
  return (
    <SafeAreaView>
      <Header title="Market" navigation={navigation} showMenu={true}></Header>
    </SafeAreaView>
  );
}
