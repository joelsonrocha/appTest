import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import ToolbarButton from '../ToolbarButton'

const Toolbar = ({active}) => {
    return (
        <View style={styles.rodape}>
            <ToolbarButton iconName="home" enabled={active === "home"} />
            <ToolbarButton iconName="play-circle" enabled={active === "videos"} />
            <ToolbarButton iconName="shopping-cart" enabled={active === "market"} />
            <ToolbarButton iconName="heart" enabled={active === "date"} />
            <ToolbarButton iconName="bell" enabled={active === "notifications"} />
        </View>
    )
}

const styles = StyleSheet.create({
    rodape: {
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 50,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10
    },
   
});
export default Toolbar;