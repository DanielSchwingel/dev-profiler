import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Search () {
    const [value, setValue] = useState('');

    const navigation = useNavigation();

    async function searchUser(){
        if (value == ''){
            return;
        }
        await api.get(`users/${value}`)
        .then(response => {
            const {login , name, created_at, email, location, blog, company, bio, avatar_url, updated_at} = response.data;
            let user = {
                login,
                name,
                created_at,
                email,
                location,
                blog,
                company,
                bio,
                avatar_url,
                updated_at
            }
            navigation.navigate('Profile', {user})
        })
        .catch(() => {
            Alert.alert('Ops, não deu!','Dev não localizado no GitHub, verifique o valor informado!');
        }) 
    }

    return(
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            <TextInput style={styles.input} value={value} onChangeText={value =>{setValue(value)}} />
            <TouchableOpacity style={styles.button} onPress={searchUser}>
                <Text style={styles.buttonText}>PESQUISAR</Text>
            </TouchableOpacity>
        </View>
    );
}