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

    box:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 75,
        width:'90%',
        paddingLeft: 10,
        paddingRight: 10,
    },

    userProperty: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#41414d',
        marginTop:10
    },

    userValue: {
        fontSize: 14,
        color: '#737380',
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
        width: '90%',
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
