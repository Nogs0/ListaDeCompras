import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height: 85,
        width: '100%',
        backgroundColor: '#800000',
        padding: 10,      
    },
    title: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row'
    },
    notification: {        
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})

export default styles;
