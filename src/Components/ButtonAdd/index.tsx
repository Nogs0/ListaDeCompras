import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type ButtonAddProps = {
 size?: number;
 color?: string;
}

export default function ButtonAdd({size, color}: ButtonAddProps){

    return(
        <View style={styles.container}>
            <Icon
                name='basket-plus'
                size={size}
                color={color}

            />  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F0E68C',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25
    }
})