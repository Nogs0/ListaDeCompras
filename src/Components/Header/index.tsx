import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import Title from '../Title';

export function Header() {

    function abrirNotificacoes() { }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Title text='CodeShopping'></Title>
                <TouchableOpacity style={{
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end'
                }}
                    onPress={abrirNotificacoes} >
                    <Icon
                        size={30}
                        name='bell'
                        color='#F0E68C'
                    />
                </TouchableOpacity>
            </View>

        </View >
    )
}