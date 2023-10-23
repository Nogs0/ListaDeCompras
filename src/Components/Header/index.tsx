import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export function Header(){

    function abrirNotificacoes(){}

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={abrirNotificacoes} >
                <Icon 
                size={30}
                name='bell'
                color='#F0E68C'
                />                
            </TouchableOpacity>
        </View>
    )
}