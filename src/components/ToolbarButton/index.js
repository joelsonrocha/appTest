import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const ToolbarButton = ({iconName, enabled, navigation, screenName}) => {
  const handleScreens = () =>{
    navigation.navigate(screenName);
  }
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleScreens}>
        <Icon style={enabled? styles.buttonText : styles.disable} name={iconName} size={30} color="#900" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
      flex: 1,
  },
  buttonText: {
      textAlign: "center",
      color: '#666'
  },
  disable :{
      textAlign: "center",
      color: '#bbb'
  }

});

export default ToolbarButton