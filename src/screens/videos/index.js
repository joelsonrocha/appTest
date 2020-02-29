import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList
} from 'react-native';
import 'react-native-gesture-handler';

import Toolbar from '../../components/Toolbar';
import api from '../../services/Api';
import RepoItem from '../../components/RepoItem';
import Header from '../../components/Header';


const Videos = ({ navigation }) => {
    const [repositories, setRepositories] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const result = await api.get('users/joelsonrocha/repos');
            setRepositories(result.data);
        }
        fetchData();
    }, []);


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