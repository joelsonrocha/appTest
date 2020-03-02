import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

export default function YoutubeListItem({ item, seeMore, playVideo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.image} onPress={playVideo}>
        <Image style={styles.image} source={{ uri: item.snippet.thumbnails.high.url }} />
      </TouchableOpacity>
      <View style={styles.footVideo}>
        <Text style={styles.title}>{item.snippet.title}</Text>
        <TouchableOpacity style={styles.button} onPress={seeMore}>
          <Icon style={{ paddingLeft: 15 }} name="ellipsis-v" size={20} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  image: {
    height: 225,
    width: '100%'
  },
  title: {
    fontSize: 18,
    paddingTop: 10,
    paddingRight: 10,
    color: '#666'
  },
  footVideo: {
    flexDirection: 'row'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
