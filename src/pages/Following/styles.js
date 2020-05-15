import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        backgroundColor: '#D8D8D8',
        flex: 1,
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

    title:{
        fontFamily: 'FredokaOne-Regular',
        fontSize: 17,
        color: '#41414d',
        marginTop: 65,
        marginBottom: 10
    },

    picture:{
        height: 120 ,
        width: 120,
        borderRadius:80,
        position: 'absolute',
        marginTop: 60,
    },

    followingList:{
        width: '90%',
    },

    box:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        padding: 15

    },

    followingProperty: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#41414d',
        marginLeft: 10,
        marginTop:10
    },

    followingValue: {
        fontSize: 14,
        color: '#737380',
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify'
    },

    followingPicture:{
        height: 100,
        width: 100,
    },

    followingData:{
        flexDirection: 'column',
        width: '60%',
    },

    button:{
        backgroundColor: '#F12639',
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8, 
        paddingLeft: 10, 
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5

    },

    buttonText:{
        fontFamily: 'FredokaOne-Regular',
        color: '#fff',
        fontSize: 14,
        marginLeft: 10
    }
});
