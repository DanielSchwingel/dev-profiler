import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import ListEmpty from '../../components/ListEmpty';
import ListLoading from '../../components/ListLoading';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Repositories(){
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
    }

    const ListRepositories = () =>{
        if (loading === false) {
            return <ListLoading/>
        } else {
            return(
                <FlatList
                style={styles.repositoryList}
                ListEmptyComponent={<ListEmpty/>}
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
            )
        }
    };


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
            <ListRepositories />
            <View style={styles.footer}>
                <Image source={logoImg} style={styles.logo}/>
            </View>                
        </View>
    );
}