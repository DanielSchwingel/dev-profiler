import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Repositories(){
    const [repositories, setRepositories] = useState([]);

    const route = useRoute();
    const navigation = useNavigation();
    const user = route.params.user;

    function navigateToBack(){
        navigation.goBack();
    }

    async function loadRepositories(){
        const response = await api.get(`users/${user.login}/repos?sort=updated`
        );
        setRepositories(response.data);
    }

    useEffect(() =>{
        loadRepositories();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonHead} onPress={navigateToBack}>
                    <Feather name="arrow-left" size={24} color="#F12639" />
                </TouchableOpacity>
            </View>
            <Image source={{uri: user.avatar_url}} style={styles.picture} />
            <Text style={styles.title}>REPOSITÓRIOS</Text>
            <Text style={styles.obs}>*Ultimos repositórios alterados*</Text>   
            <FlatList
                style={styles.repositoryList}
                data={repositories}
                keyExtractor={repositorie => repositorie.node_id}
                showsVerticalScrollIndicator={false}
                renderItem={({item:repositorie})=>(
                    <View style={styles.box}> 
                        <Text style={styles.repositoryProperty}>Nome</Text>               
                        <Text style={styles.repositoryValue}>{repositorie.name}</Text>
                        
                        <Text style={styles.repositoryProperty}>Descrição</Text>               
                        <Text style={styles.repositoryValue}>{repositorie.description}</Text>

                        <Text style={styles.repositoryProperty}>Linguagem</Text>               
                        <Text style={styles.repositoryValue}>{repositorie.language}</Text>

                        <Text style={styles.repositoryProperty}>Data de criação</Text>               
                        <Text style={styles.repositoryValue}>{Intl.DateTimeFormat('pt-BR').format(new Date(repositorie.created_at))}</Text>

                        <Text style={styles.repositoryProperty}>Última alteração</Text>               
                        <Text style={styles.repositoryValue}>{Intl.DateTimeFormat('pt-BR').format(new Date(repositorie.updated_at))}</Text>

                        <Text style={styles.repositoryProperty}>Forks</Text>               
                        <Text style={[styles.repositoryValue, {marginBottom: 10}]}>{repositorie.forks}</Text>
                    </View>
                )}
            />
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Fonte: API do GitHub</Text>
            </View>                
        </View>
    );
}