import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import 'react-native-gesture-handler';

import { api } from '../../services/Api';
import RepoItem from '../../components/RepoItem';
import Header from '../../components/Header';

const Home = () => {
  const [repositories, setRepositories] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await api.get('users/joelsonrocha/repos');
      setRepositories(result.data);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
      <View style={styles.center_content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={repositories}
          renderItem={({ item }) => <RepoItem item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  center_content: {
    flex: 1
  }
});

export default Home;
