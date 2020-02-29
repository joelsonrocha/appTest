import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';

import Header from '../../components/Header';


const Videos = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Vídeos"/>
            <View style={styles.center_content}>
                
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

export default Videos;