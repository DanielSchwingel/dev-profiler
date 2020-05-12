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
        flexDirection: 'row',
        alignItems: 'stretch',
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

    box:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        minWidth: '90%',
    },

    repositoryProperty: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#41414d',
        marginLeft: 10,
        marginTop:10
    },

    repositoryValue: {
        fontSize: 14,
        color: '#737380',
        marginLeft: 10,
        marginRight: 10,
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
        height: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width:'100%',
        flexDirection: 'row'
    },
    
    textFooter : {
        fontFamily: 'FredokaOne-Regular',
        marginRight: 20,
        color: '#FFF'
    },

    logoFooter: {
        height: 40 ,
        width: 52,
    }

});
