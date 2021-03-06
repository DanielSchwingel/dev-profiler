import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8D8D8',
        alignItems: 'center'
    },

    header: {
        backgroundColor: '#282D43',
        height: 120,
        paddingTop: Constants.statusBarHeight + 10,
        width: '100%'
    },

    buttonHead : {
        marginLeft: '90%',
    },
    
    picture:{
        height: 120 ,
        width: 120,
        borderRadius:80,
        position: 'absolute',
        marginTop: 60,
    },

    repositoryList :{
        width: '90%'
    },

    box:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },

    repositoryProperty: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#41414d',
        marginTop:10
    },

    repositoryValue: {
        fontSize: 14,
        color: '#737380',
        textAlign: 'justify'
    },

    obs:{
        color: '#737380',
        fontSize: 14,
        marginTop: 10,
        fontStyle: 'italic',
        marginBottom: 10,
    },

    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 17,
        color: '#41414d',
        marginTop: 65
    },
    
    footer:{
        backgroundColor: '#282D43',
        height: 60,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        flexDirection: 'row'
    },
    
    logo:{
        width: 62,
        height: 47
    }



});
