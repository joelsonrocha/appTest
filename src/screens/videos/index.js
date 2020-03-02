import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Text } from 'react-native';

import BottomSheet from 'react-native-gesture-bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';

import YoutubeListItem from '../../components/YoutubeListItem';
import { youtubeApi } from '../../services/Api';

const Videos = ({ navigation }) => {
  const [videos, setVideos] = useState(null);
  const [description, setDescription] = useState({});
  const bottomSheet = useRef();

  useEffect(() => {
    async function fetchData() {
      const result = await youtubeApi.get(
        '?key=AIzaSyBBleED5xTgcnvD87Bh8S1ncCfUT_7_heY&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30'
      );
      setVideos(result.data.items);
    }
    fetchData();
  }, []);

  const showDrescription = ({ snippet }) => {
    setDescription(snippet);
    bottomSheet.current.show();
  };

  const playVideo = item => {
    navigation.navigate('VideoPlayer', item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={350}>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>{description.title}</Text>
          <View style={styles.channel}>
            <Icon style={styles.icon} name="user" size={30} color="#aaa" />
            <Text style={styles.descriptionChannel}>{description.channelTitle}</Text>
          </View>
          <Text style={styles.descriptionText}>{description.description}</Text>
        </View>
      </BottomSheet>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={videos}
        renderItem={({ item }) => (
          <YoutubeListItem
            item={item}
            seeMore={() => showDrescription(item)}
            playVideo={() => playVideo(item)}
          />
        )}
        keyExtractor={item => item.id.videoId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center_content: {
    flex: 1
  },
  list: {
    width: '100%'
  },
  description: {
    padding: 20
  },
  descriptionText: {
    fontSize: 16
  },
  channel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  descriptionChannel: {
    fontSize: 16,
    paddingLeft: 15
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  icon: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 25
  }
});

export default Videos;
