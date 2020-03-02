import React from 'react';
import { WebView } from 'react-native-webview';
export default function VideoPlayer({ route }) {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/embed/' + route.params.id.videoId + '?autoplay=1' }}
      startInLoadingState={true}
    />
  );
}
