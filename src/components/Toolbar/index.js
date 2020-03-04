import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToolbarButton from '../ToolbarButton';

const Toolbar = ({ navigation, state }) => {
  return (
    <View style={styles.rodape}>
      <ToolbarButton
        iconName="home"
        enabled={state.index === 0}
        navigation={navigation}
        screenName="Home"
      />
      <ToolbarButton
        iconName="play-circle"
        enabled={state.index === 1}
        navigation={navigation}
        screenName="Videos"
      />
      <ToolbarButton
        iconName="shopping-cart"
        enabled={state.index === 2}
        navigation={navigation}
        screenName="Market"
      />
      <ToolbarButton
        iconName="heart"
        enabled={state.index === 3}
        navigation={navigation}
        screenName="Home"
      />
      <ToolbarButton
        iconName="bell"
        enabled={state.index === 4}
        navigation={navigation}
        screenName="Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rodape: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 70,
    paddingBottom: 20,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10
  }
});
export default Toolbar;
