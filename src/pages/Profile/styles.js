import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#D8D8D8',
        alignItems: 'center',
        flex: 1
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

    body:{
        alignItems: 'center',
        backgroundColor: '#D8D8D8',
        paddingLeft: 15,
        paddingRight: 15
    },

    picture:{
        height: 120 ,
        width: 120,
        borderRadius:80,
        position: 'absolute',
        marginTop: -60,
    },

    box:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 75,
        width:'100%'
    },

    userProperty: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#41414d',
        marginLeft: 10,
        marginTop:10
    },

    userValue: {
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
        marginBottom: 10
    },

    action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button:{
        backgroundColor: '#F12639',
        width: '48%',
        marginBottom: 10,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8, 
        paddingLeft: 10, 
        paddingRight: 10,
    },

    buttonText:{
        fontFamily: 'FredokaOne-Regular',
        color: '#fff',
        fontSize: 14,
        marginLeft: 10
    }
});
