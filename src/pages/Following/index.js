import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';


export default function Profile() {
    const [following, setFollowing] = useState([]);
    const route = useRoute();
    const navigation = useNavigation();

    const user = route.params.user;

    function navigateBack() {
        navigation.goBack();
    }

    async function loadFollowing(){
        const response = await api.get(`users/${user.login}/following`);
        setFollowing(response.data);
    }

    useEffect(() =>{
        loadFollowing();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonHead} onPress={navigateBack}>
                    <Feather name="arrow-left" size={24} color="#F12639" />
                </TouchableOpacity>
            </View>
                <Image source={{uri: user.avatar_url}} style={styles.picture} />
                <Text style={styles.title}>SEGUINDO</Text>
                <FlatList
                data={following}
                keyExtractor={follow => follow.node_id}
                showsVerticalScrollIndicator={false}
                renderItem={({item:follow})=>(
                    <View style={styles.box}> 
                        <Image source={{uri: follow.avatar_url}} style={styles.followingPicture} />
                        <View style={styles.followingData}>
                            <Text style={styles.followingProperty}>Usuário</Text>               
                            <Text style={styles.followingValue}>{follow.login}</Text>
                            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                                <Feather name="search" size={18} color="#FFF"/>
                                <Text style={styles.buttonText}>ANALISAR</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )}
                />
            <View>
                <Text>
                    aqui vai o footer
                </Text>
            </View>
        </View>
    );
}