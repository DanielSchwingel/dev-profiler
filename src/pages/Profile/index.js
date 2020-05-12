import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Profile() {
    const route = useRoute();
    const navigation = useNavigation();

    const user = route.params.user;

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToRepositories(){
        navigation.navigate('Repositories', {user})
    }

    return (
        // <ScrollView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonHead} onPress={navigateBack}>
                        <Feather name="home" size={24} color="#F12639" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Image source={{uri: user.avatar_url}} style={styles.picture} />
                    <View style={styles.box}>
                        <Text style={styles.userProperty}>Nome</Text>
                        <Text style={styles.userValue}>{user.name}</Text>

                        <Text style={styles.userProperty}>Membro desde</Text>
                        <Text style={styles.userValue}> {Intl.DateTimeFormat('pt-br').format(new Date(user.created_at))}</Text>

                        <Text style={styles.userProperty}>E-mail</Text>
                        <Text style={styles.userValue}>{user.email}</Text>

                        <Text style={styles.userProperty}>Local</Text>
                        <Text style={styles.userValue}>{user.location}</Text>

                        <Text style={styles.userProperty}>Blog/Site</Text>
                        <Text style={styles.userValue}>{user.blog}</Text>

                        <Text style={styles.userProperty}>Empresa</Text>
                        <Text style={styles.userValue}>{user.company}</Text>

                        <Text style={styles.userProperty}>Sobre</Text>
                        <Text style={[styles.userValue, {marginBottom: 10}]}>{user.bio}</Text>
                    </View>
                    <Text style={styles.obs}>* Atualizado em {Intl.DateTimeFormat('pt-br').format(new Date(user.updated_at))} *</Text>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.button} onPress={navigateToRepositories}>
                            <Feather name="folder" size={18} color="#FFF" />
                            <Text style={styles.buttonText}>Repositórios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>{}}>
                            <Feather name="users" size={18} color="#FFF" />
                            <Text style={styles.buttonText}>Seguindo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.button} onPress={()=>{}}>
                            <Feather name="clipboard" size={18} color="#FFF" />
                            <Text style={styles.buttonText}>Organizações</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        //</ScrollView>
    );
}