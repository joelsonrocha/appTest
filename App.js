import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Text
} from 'react-native';

import Toolbar from './src/components/Toolbar';
import api from './src/services/Api';
import RepoItem from './src/components/RepoItem';
import Header from './src/components/Header';

const App = () => {
  const [repositories, setRepositories] =  useState({full_name: null, language: null, id: null})
  useEffect(()=>{
    async function fetchData(){
      const result = await api.get('users/joelsonrocha/repos');
      setRepositories(result.data);
    }
    fetchData();
  },[]);

  
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
        <View style={styles.center_content}>  
          <FlatList 
          showsVerticalScrollIndicator={false}
            data={repositories}
            renderItem={({ item }) => <RepoItem item={item}></RepoItem>}
            keyExtractor={item => item.id}
            />
        </View>
      <Toolbar active="home"></Toolbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  center_content: {
   flex: 1
  }

});

export default App;
