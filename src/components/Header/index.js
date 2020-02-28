import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const Header = ({ active }) => {
    return (
        <View style={styles.header}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        //marginBottom: 15
    },

});
export default Header;