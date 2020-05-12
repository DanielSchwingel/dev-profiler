import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282D43',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo:{
        maxWidth: 210,
        maxHeight:160
    },  

    input: {
        marginTop: 40,
        width: '40%',
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
        textAlign: 'center',
        color: '#FFF'
    },

    button:{
        backgroundColor: '#F12639',
        width: '50%',
        marginTop: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },

    buttonText:{
        fontFamily: 'FredokaOne-Regular',
        color: '#fff',
        fontSize: 20,
    }

  });