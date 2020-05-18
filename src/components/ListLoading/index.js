import React from 'react';
import { View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import loading from '../../assets/loading.json';
import styles from './styles';

export default function ListLoading(){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <LottieView style={styles.animation} source={loading} resizeMode='contain' autoPlay loop/>
                <Text style={styles.text} >Carregando Dev...</Text>
            </View>
        </View>

    );
}