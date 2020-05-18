import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import ListEmpty from '../../components/ListEmpty';
import ListLoading from '../../components/ListLoading';


export default function Profile() {
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    const user = route.params.user;

    function navigateBack() {
        navigation.goBack();
    }

    function analyzeFollowing(userLogin){
        navigation.navigate('Profile', {userLogin});
    }

    async function loadFollowing(){
        const response = await api.get(`users/${user.login}/following`);
        setFollowing(response.data);
        setLoading(true);
    }

    const ListFollowing = () =>{
        if (loading === false) {
            return <ListLoading/>;
        } else {
            return(
                    <FlatList
                    style={styles.followingList}
                    data={following}
                    keyExtractor={follow => follow.node_id}
                    ListEmptyComponent={<ListEmpty />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item:follow})=>(
                        <View style={styles.box}> 
                            <Image source={{uri: follow.avatar_url}} style={styles.followingPicture} />
                            <View style={styles.followingData}>
                                <Text style={styles.followingProperty}>Usuário</Text>               
                                <Text style={styles.followingValue}>{follow.login}</Text>
                                <TouchableOpacity style={styles.button} onPress={()=>{analyzeFollowing(follow.login)}}>
                                    <Feather name="search" size={18} color="#FFF"/>
                                    <Text style={styles.buttonText}>ANALISAR</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                    />
            )
        }
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
                {/* <FlatList
                style={styles.followingList}
                data={following}
                keyExtractor={follow => follow.node_id}
                ListEmptyComponent={<ListEmpty />}
                showsVerticalScrollIndicator={false}
                renderItem={({item:follow})=>(
                    <View style={styles.box}> 
                        <Image source={{uri: follow.avatar_url}} style={styles.followingPicture} />
                        <View style={styles.followingData}>
                            <Text style={styles.followingProperty}>Usuário</Text>               
                            <Text style={styles.followingValue}>{follow.login}</Text>
                            <TouchableOpacity style={styles.button} onPress={()=>{analyzeFollowing(follow.login)}}>
                                <Feather name="search" size={18} color="#FFF"/>
                                <Text style={styles.buttonText}>ANALISAR</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )}
                /> */}
                <ListFollowing />
            <View style={styles.footer}>
                <Image source={logoImg} style={styles.logo}/>
            </View>  
        </View>
    );
}