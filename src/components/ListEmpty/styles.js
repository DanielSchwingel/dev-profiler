import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },

    animation: {
        width: 150,
        height: 150,
    },

    title :{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 40,
        color: '#41414d',
        marginBottom: 20
    },

    description: {
        fontFamily: 'FredokaOne-Regular',
        fontSize: 15,
        color: '#737380',
        marginBottom: 20,
        textAlign: 'center',
    }
});