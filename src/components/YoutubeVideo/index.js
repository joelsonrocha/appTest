import React from 'react';
import { View, StyleSheet } from 'react-native';
import { YouTube } from 'react-native-youtube';
// import { Container } from './styles';

export default function YoutubeVideo({ id }) {
  return (
    <View style={styles.videoView}>
      <YouTube
        videoId={id.videoId} // The YouTube video ID
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        style={{ alignSelf: 'stretch', height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  videoView: {
    flex: 1,
    backgroundColor: 'red'
  },
  video: {
    height: 300,
    backgroundColor: 'red'
  }
});
