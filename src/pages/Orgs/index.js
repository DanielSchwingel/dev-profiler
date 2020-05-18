import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import ListEmpty from '../../components/ListEmpty';
import ListLoading from '../../components/ListLoading';


export default function Orgs() {
    const [orgs, setOrgs] = useState([]);
    const [loading, setLoading] = useState(false);
    const route = useRoute();
    const navigation = useNavigation();

    const user = route.params.user;

    function navigateBack() {
        navigation.goBack();
    };

    async function loadOrgs(){
        const response = await api.get(`users/${user.login}/orgs`);
        setOrgs(response.data);
        setLoading(true);
    };

    const ListOrgs = () =>{
        if (loading === false) {
            return <ListLoading/>;
        } else {
            return(
                <FlatList
                style={styles.orgsList}
                data={orgs}
                keyExtractor={org => org.node_id}
                ListEmptyComponent={<ListEmpty />}
                showsVerticalScrollIndicator={false}
                renderItem={({item:org})=>(
                    <View style={styles.box}> 
                        <Image source={{uri: org.avatar_url}} style={styles.orgsPicture} />
                        <View style={styles.orgsData}>
                            <Text style={styles.orgsProperty}>Nome</Text>               
                            <Text style={styles.orgsValue}>{org.login}</Text>
                            <Text style={styles.orgsProperty}>Descrição</Text>               
                            <Text style={styles.orgsValue}>{org.description}</Text>
                        </View>
                    </View>
                )}
                />
            )
        }
    };

    useEffect(() =>{
        loadOrgs();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonHead} onPress={navigateBack}>
                    <Feather name="arrow-left" size={24} color="#F12639" />
                </TouchableOpacity>
            </View>
                <Image source={{uri: user.avatar_url}} style={styles.picture} />
                <Text style={styles.title}>ORGANIZAÇÕES</Text>
                <ListOrgs />
            <View style={styles.footer}>
                <Image source={logoImg} style={styles.logo}/>
            </View>  
        </View>
    );
}