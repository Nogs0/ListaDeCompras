import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: 10,
        padding: 10,
        alignItems: 'center'
    },
    label: {
        width: '20%',
        color: 'black'
    },
    input: {
        borderWidth: 2,
        borderColor: '#FFC467',
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#FAD7A0',
        width: '80%'
    }
})

export default styles;