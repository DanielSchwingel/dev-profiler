import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';

export default function Profile() {
    const [user, setUser] = useState({});
    const [dateCreated, setDateCreated] = useState('');
    const [dateUpdated, setDateUpdated] = useState('');

    const route = useRoute();
    const navigation = useNavigation();

    const userLogin = route.params.userLogin;

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToRepositories(){
        navigation.navigate('Repositories', {user});
    }

    function navigateToFollowing(){
        navigation.navigate('Following', {user});
    }

    function navigateToOrgs(){
        navigation.navigate('Orgs', {user});
    }

    async function loadUser(){
        const response = await api.get(`users/${userLogin}`);
        setUser(response.data)
        setDateCreated(new Date(response.data.created_at));
        setDateUpdated(new Date(response.data.updated_at));
    }

    useEffect(() =>{
        loadUser();
    }, [userLogin]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonHead} onPress={navigateBack}>
                    <Feather name="home" size={24} color="#F12639" />
                </TouchableOpacity>
            </View>
            <Image source={{uri: user.avatar_url}} style={styles.picture} />
            <View style={styles.box}>
                <Text style={styles.userProperty}>Nome</Text>
                <Text style={styles.userValue}>{user.name}</Text>

                <Text style={styles.userProperty}>Membro desde</Text>
                <Text style={styles.userValue}> {Intl.DateTimeFormat('pt-br').format(dateCreated)}</Text>

                <Text style={styles.userProperty}>Local</Text>
                <Text style={styles.userValue}>{user.location}</Text>

                <Text style={styles.userProperty}>Blog/Site</Text>
                <Text style={styles.userValue}>{user.blog}</Text>

                <Text style={styles.userProperty}>Empressa</Text>
                <Text style={styles.userValue}>{user.company}</Text>

                <Text style={styles.userProperty}>Sobre</Text>
                <Text style={[styles.userValue, {marginBottom: 10}]}>{user.bio}</Text>
            </View>
            <Text style={styles.obs}>* Atualizado em {Intl.DateTimeFormat('pt-br').format(dateUpdated)} *</Text>
            <View style={styles.action}>
                <TouchableOpacity style={styles.button} onPress={navigateToRepositories}>
                    <Feather name="folder" size={18} color="#FFF" />
                    <Text style={styles.buttonText}>REPOSITÓRIOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={navigateToFollowing}>
                    <Feather name="users" size={18} color="#FFF" />
                    <Text style={styles.buttonText}>SEGUINDO</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.action}>
                <TouchableOpacity style={styles.button} onPress={navigateToOrgs}>
                    <Feather name="clipboard" size={18} color="#FFF" />
                    <Text style={styles.buttonText}>ORGANIZAÇÕES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}