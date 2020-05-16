import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import boxImg from '../../assets/box.png';
import styles from './styles';

export default function ListEmpty(){
    return(
        <View style={styles.container}>
            <Image source={boxImg} style={styles.image} />
            <Text style={styles.title}>Ooops....</Text>
            <Text style={styles.description}>No momento, não temos nada pra mostrar por aqui! Bora trabalhar Dev!</Text>
        </View>

    );
}