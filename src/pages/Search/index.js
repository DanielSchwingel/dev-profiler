import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Search () {
    const [userLogin, setUserLogin] = useState('');

    const navigation = useNavigation();

    async function searchUser(){
        if (userLogin == ''){
            return;
        }
        await api.get(`users/${userLogin}`)
        .then(() => {
            navigation.navigate('Profile', {userLogin})
        })
        .catch(() => {
            Alert.alert('Ops, não deu!','Dev não localizado no GitHub, verifique o valor informado!');
        }) 
    }

    return(
        <View style={styles.container}>
            <Image source={logoImg} style={styles.logo} />
            <TextInput style={styles.input} value={userLogin} onChangeText={value =>{setUserLogin(value)}} />
            <TouchableOpacity style={styles.button} onPress={searchUser}>
                <Text style={styles.buttonText}>PESQUISAR</Text>
            </TouchableOpacity>
        </View>
    );
}