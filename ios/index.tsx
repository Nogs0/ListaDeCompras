import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles';

type ButtonAddProps = {
 size?: number;
 color?: string;
}

export default function ButtonAdd({size, color}: ButtonAddProps){

    return(
        <View style={styles.container}>
            <Icon
                name='text-box-plus-outline'
                size={size}
                color={color}

            />  
        </View>
    )
}