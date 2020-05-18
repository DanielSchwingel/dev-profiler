import React from 'react';
import { View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import loading from '../../assets/loading.json';
import styles from './styles';

export default function ListEmpty(){
    return(
        <View style={styles.container}>
            <LottieView style={styles.animation} source={loading} resizeMode='contain' autoPlay loop/>
            <Text style={styles.title}>Ooops....</Text>
            <Text style={styles.description}>No momento, não temos nada pra mostrar por aqui! Bora trabalhar Dev!</Text>
        </View>

    );
}